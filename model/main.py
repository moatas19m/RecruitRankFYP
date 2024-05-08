import json
import PyPDF2
import docx2txt
import re
from pydantic import BaseModel
import spacy
from spacy.pipeline import EntityRuler
from spacy.lang.en import English
from spacy.tokens import Doc
from spacy import displacy 
from spacy.lang.en import English
from spacy.pipeline import EntityRuler

import os
import io
from fastapi import FastAPI, UploadFile
from fastapi.responses import JSONResponse
from uuid import uuid4
import jsonlines

current_dir = os.path.dirname(os.path.realpath(__file__))
file_path = os.path.join(current_dir, "Osama Hameed Resume.pdf")
skill_pattern_path = os.path.join(current_dir, "jz_skill_patterns.jsonl")

def resumeparse(file_path):
    if file_path.endswith('.pdf'):
        with open(file_path, 'rb') as pdf_file:
            pdf_reader = PyPDF2.PdfReader(pdf_file)
            text = ''
            for page_num in range(len(pdf_reader.pages)):  # Change getNumPages() to len(reader.pages)
                page_obj = pdf_reader.pages[page_num]
                text += page_obj.extract_text()

            
    elif file_path.endswith('.docx'):
        text = docx2txt.process(file_path)
   
    #Cleaning extracted text     

    doc = text.replace("\n", " ")
    #doc = doc.replace("-", "")
    #doc = doc.replace(",", "")
    #doc = doc.replace(":", " ")
    doc = doc.replace("•", " ")
    #doc = doc.replace("-", "")
    #doc = doc.replace(".", " ")
    doc = doc.replace("|", " ")
    doc = doc.replace("–", " ")
    doc = doc.replace("- ", "-")
    doc = doc.replace(" -", "-")#for linkedin/github link
    doc = doc.replace("BS", "Bachelor of Sciences ")
    doc = doc.replace("B.S", "Bachelor of Sciences ")
    doc = doc.replace("B.S", "Bachelor of Sciences ")
    doc = doc.replace("B.S.", "Bachelor of Sciences ")

    doc = " ".join(re.split(r"\s+", doc, flags=re.UNICODE)) #removing unwanted space between words
    doc = re.sub(r'(?<=\d) (?=\d)', '', doc) #removes space between numbers only

    
    #Loading spaCy large vector model  
    nlp = spacy.load("en_core_web_lg")
    ruler = nlp.add_pipe("entity_ruler",before ="ner")
    ruler.from_disk(skill_pattern_path)

    patterns = [
                    {
                        "label": "EMAIL", "pattern": [{"TEXT": {"REGEX": r"([^@|\s]+@[^@]+\.[^@|\s]+)"}}
                                                            ]
                    },
                    {
                        "label": "LINKEDIN", "pattern": [{"TEXT": {"REGEX": r"^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)"}}
                                                            ]
                    },
                    {
                        "label": "GITHUB", "pattern": [{"TEXT": {"REGEX": r"^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$"}}
                                                            ]
                    },
                    {
                        "label": "PHONE-NUMBER", "pattern": [{"TEXT": {"REGEX": r"^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$"}}
                                                            ]
                    }
                ]


    ruler.add_patterns(patterns)
    p = nlp(doc)


    dict = {}
    skills = []
    experience = []
    university = []
    degree = []
    discipline = []
    education = []
    person = []
    for ent in p.ents:
        if ent.label_ == "PERSON":
            #dict['PERSON'] = ent.text
            person.append(ent.text)
            #print('Names: ', ent.text)
        if ent.label_ == "EMAIL":
            dict['EMAIL'] = ent.text
        if ent.label_ == "LINKEDIN":
            dict['LINKEDIN'] = ent.text
        if ent.label_ == "GITHUB":
            dict['GITHUB'] = ent.text
        if ent.label_ == "PHONE-NUMBER":
            dict['PHONE-NUMBER'] = ent.text 
        if ent.label_ == "DEGREE":
            degree.append(ent.text)
        if ent.label_ == "DISCIPLINE":
            discipline.append(ent.text)
        if ent.label_ == "UNIVERSITY":
            university.append(ent.text)      
        if ent.label_ == "EXPERIENCE":
            experience.append(ent.text)       
        if ent.label_ == "SKILL":
            skills.append(ent.text)
            

    dict['PERSON'] = person[0]
    dict['DEGREE'] = degree
    dict['DISCIPLINE'] = discipline
    dict['UNIVERSITY'] = university
    dict['EXPERIENCE'] = experience         
    dict['SKILLS'] = skills   


    return dict

# Call the resumeparse function with the file path
resume_data = resumeparse(file_path)

# Print the output
print(resume_data)

app = FastAPI()

@app.get("/")
async def read_root():
    return resume_data



from fastapi import FastAPI, HTTPException
import json
import PyPDF2
import docx2txt
import re
import requests
from pydantic import BaseModel
import spacy
import google.generativeai as genai
from typing import Optional
from fastapi import FastAPI, HTTPException, Query
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json
import os
import io
from fastapi import FastAPI, UploadFile, Request
from fastapi.responses import JSONResponse
from uuid import uuid4
import jsonlines
from fastapi.middleware.cors import CORSMiddleware

#from app1 import resumeparse,save_json
#from app2 import extract_job_info

current_dir = os.path.dirname(os.path.realpath(__file__))
file_path = os.path.join(current_dir, "Osama Hameed Resume.pdf")
skill_pattern_path = os.path.join(current_dir, "jz_skill_patterns.jsonl")

def extract_university_name(text):
    experiences = []
    names = []
    cgpa=[]
    skills=[]
    regex_match = re.search(
        r'([A-Za-z]+(?:\s+University|College|Institute)?(?:\s+of\s+[A-Za-z]+)?)\s+(?:University|College|Institute)',
        text)
    university_name = None

    if not university_name:
        GOOGLE_API_KEY = "AIzaSyDvgEdqaiSwClMdnqN7TRz9_aG5JTgvtLg"
        genai.configure(api_key=GOOGLE_API_KEY)
        model = genai.GenerativeModel('gemini-pro')
        prompt = f"Extract the name of the university from the text:\n{text}\n\nUniversity name:"
        response = model.generate_content(prompt)
        university_name = response.text.strip()
        experience = model.generate_content(
            f"Extract experience in form of numbers of experience:\n{text}\n\nExperience:")
        experiences.append(experience.text)
        name = model.generate_content(f"Extract the person name from the text:\n{text}\n\nName:")
        names.append(name.text)
        gpa = model.generate_content(f"Extract the cgpa or gpa from the text:\n{text}\n\nCGPA:")
        cgpa.append(gpa.text)
        skill = model.generate_content(
            f"Extract the skills from the text and separate them with a comma and inverted commas:{text}SKILLS:")
        skills_text = skill.text.replace("\\", "")
        skills_list = re.findall(r'"([^"]*)"', skills_text)
        skills = [skill.strip() for skill in skills_list]
    return university_name, experiences,names,cgpa,skills

def resumeparse(url):

    response = requests.get(url)

    if response.status_code == 200:

        if ".pdf" in url:
            pdf_reader = PyPDF2.PdfReader(io.BytesIO(response.content))
            text = ""
            for page_num in range(len(pdf_reader.pages)):  # Change getNumPages() to len(reader.pages)
                page_obj = pdf_reader.pages[page_num]
                text += page_obj.extract_text()
                    
        elif ".docx" in url:
            text = docx2txt.process(io.BytesIO(response.content))
            
        university_name, experiences, names, cgpa,skills= extract_university_name(text)

        doc = text.replace("\n", " ")
        doc = doc.replace("•", " ")
        doc = doc.replace("|", " ")
        doc = doc.replace("–", " ")
        doc = doc.replace("- ", "-")
        doc = doc.replace(" -", "-")
        doc = doc.replace("BS", "Bachelors of Sciences ")
        doc = doc.replace("B.S", "Bachelors of Sciences ")
        doc = doc.replace("B.S", "Bachelors of Sciences ")
        doc = doc.replace("B.S.", "Bachelors of Sciences ")
        doc = doc.replace("B.A.", "Bachelors of Arts ")
        doc = doc.replace("CS", "Computer Science ")
        doc = doc.replace("A.A.", "Associate of Arts ")
        doc = doc.replace("A.S.", "Associate of Science ")
        doc = doc.replace("B.A.", "Bachelor of Arts ")
        doc = doc.replace("B.S.", "Bachelor of Science ")
        doc = doc.replace("B.F.A.", "Bachelor of Fine Arts ")
        doc = doc.replace("B.A.S.", "Bachelor of Applied Science ")
        doc = doc.replace("B.B.A.", "Bachelor of Business Administration ")
        doc = doc.replace("B.Com.", "Bachelor of Commerce ")
        doc = doc.replace("B.Arch.", "Bachelor of Architecture ")
        doc = doc.replace("B.Eng.", "Bachelor of Engineering ")
        doc = doc.replace("B.S.C.S.", "Bachelor of Science in Computer Science ")
        doc = doc.replace("LL.B.", "Bachelor of Laws ")
        doc = doc.replace("M.A.", "Master of Arts ")
        doc = doc.replace("M.S.", "Master of Science ")
        doc = doc.replace("M.B.A.", "Master of Business Administration ")
        doc = doc.replace("M.F.A.", "Master of Fine Arts ")
        doc = doc.replace("LL.M.", "Master of Laws ")
        doc = doc.replace("M.P.H.", "Master of Public Health ")
        doc = doc.replace("Ph.D.", "Doctor of Philosophy ")
        doc = doc.replace("M.D.", "Doctor of Medicine ")
        doc = doc.replace("D.D.S.", "Doctor of Dental Surgery ")
        doc = doc.replace("D.V.M.", "Doctor of Veterinary Medicine ")
        doc = doc.replace("AA", "Associate of Arts ")
        doc = doc.replace("AS", "Associate of Science ")
        doc = doc.replace("AAS", "Associate of Applied Science ")
        doc = doc.replace("BA", "Bachelor of Arts ")
        doc = doc.replace("BS", "Bachelor of Science ")
        doc = doc.replace("BFA", "Bachelor of Fine Arts ")
        doc = doc.replace("BAS", "Bachelor of Applied Science ")
        doc = doc.replace("BBA", "Bachelor of Business Administration ")
        doc = doc.replace("BCom", "Bachelor of Commerce ")
        doc = doc.replace("BArch", "Bachelor of Architecture ")
        doc = doc.replace("BEng", "Bachelor of Engineering ")
        doc = doc.replace("BSCS", "Bachelor of Science in Computer Science ")
        doc = doc.replace("BSN", "Bachelor of Science in Nursing ")
        doc = doc.replace("LLB", "Bachelor of Laws ")
        doc = doc.replace("BLA", "Bachelor of Landscape Architecture ")
        doc = doc.replace("BED", "Bachelor of Education ")
        doc = doc.replace("BM", "Bachelor of Music ")
        doc = doc.replace("BPharm", "Bachelor of Pharmacy ")
        doc = doc.replace("DVM", "Doctor of Veterinary Medicine ")
        doc = doc.replace("DDS", "Doctor of Dental Surgery ")
        doc = doc.replace("MD", "Doctor of Medicine ")
        doc = doc.replace("DO", "Doctor of Osteopathic Medicine ")
        doc = doc.replace("PhD", "Doctor of Philosophy ")
        doc = doc.replace("EdD", "Doctor of Education ")
        doc = doc.replace("JD", "Juris Doctor ")
        doc = doc.replace("MFA", "Master of Fine Arts ")
        doc = doc.replace("MBA", "Master of Business Administration ")
        doc = doc.replace("MS", "Master of Science ")
        doc = doc.replace("MA", "Master of Arts ")
        doc = doc.replace("MPH", "Master of Public Health ")
        doc = doc.replace("MEd", "Master of Education ")
        doc = doc.replace("MLA", "Master of Landscape Architecture ")
        doc = doc.replace("MSW", "Master of Social Work ")
        doc = doc.replace("MEng", "Master of Engineering ")
        doc = doc.replace("MSci", "Master of Science ")
        doc = doc.replace("MCom", "Master of Commerce ")
        doc = doc.replace("LLM", "Master of Laws ")
        doc = doc.replace("MCP", "Master of City Planning ")
        doc = doc.replace("MPP", "Master of Public Policy ")
        doc = doc.replace("MPT", "Master of Physical Therapy ")
        doc = doc.replace("MPA", "Master of Public Administration ")
        doc = doc.replace("MMus", "Master of Music ")
        doc = doc.replace("PsyD", "Doctor of Psychology ")
        doc = doc.replace("PharmD", "Doctor of Pharmacy ")
        doc = doc.replace("DPT", "Doctor of Physical Therapy ")
        doc = doc.replace("DHSc", "Doctor of Health Science ")
        doc = doc.replace("DC", "Doctor of Chiropractic ")
        doc = doc.replace("DSW", "Doctor of Social Work ")
        
        doc = " ".join(re.split(r"\s+", doc, flags=re.UNICODE))
        doc = re.sub(r'(?<=\d) (?=\d)', '', doc)

        nlp = spacy.load("en_core_web_lg")
        skill_pattern_path = "jz_skill_patterns.jsonl"
        ruler = nlp.add_pipe("entity_ruler", before="ner")
        ruler.from_disk(skill_pattern_path)

        patterns = [
            {"label": "EMAIL", "pattern": [{"TEXT": {"REGEX": r"([^@|\s]+@[^@]+\.[^@|\s]+)"}}]},
            {"label": "LINKEDIN", "pattern": [{"TEXT": {"REGEX": r"^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)"}}]},
            {"label": "GITHUB", "pattern": [{"TEXT": {"REGEX": r"^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$"}}]},
            {"label": "PHONE-NUMBER", "pattern": [{"TEXT": {"REGEX": r"^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$"}}]}
        ]
        ruler.add_patterns(patterns)
        p = nlp(doc)

        dict = {}

        university = []
        degree = []
        discipline = []
        education = []

        for ent in p.ents:
            if ent.label_ == "NAME":
                names.append(ent.text)
                print('Names: ', ent.text)
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
                experiences.append(ent.text)
            if ent.label_ == "SKILL":
                skills.append(ent.text)

        dict['NAME'] = names
        dict['DEGREE'] = degree
        dict['DISCIPLINE'] = discipline
        dict['UNIVERSITY'] = university if university else [university_name]
        dict['EXPERIENCE'] = experiences
        dict['SKILLS'] = skills
        dict['CGPA'] = cgpa
        return dict

def clean_text(text):
    # Remove special characters
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    # Convert to lowercase
    text = text.lower()
    # Remove extra white spaces
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def extract_job_info(text):
    cleaned_text = clean_text(text)
    GOOGLE_API_KEY = "AIzaSyDvgEdqaiSwClMdnqN7TRz9_aG5JTgvtLg"
    genai.configure(api_key=GOOGLE_API_KEY)
    model = genai.GenerativeModel('gemini-pro')
    prompt = f"Extract the title of the job from the text:\n{text}\n\nJob Title:"
    response = model.generate_content(prompt)
    job_title = response.text.strip()
    gpa_response = model.generate_content(f"Extract the cgpa or gpa from the text:\n{text}\n\nCGPA:")
    gpa = gpa_response.text.strip()
    # cgpa.append(gpa.text)
    skill = model.generate_content(
        f"Extract all the skills from the text and separate them with a comma and inverted commas:{text}SKILLS:")
    skills_text = skill.text.replace("\\", "")
    skills_list = re.findall(r'"([^"]*)"', skills_text)
    skills = [skill.strip() for skill in skills_list]
    experience_response = model.generate_content(
        f"Extract experience in form of numbers of experience:\n{text}\n\nExperience:")
    experience = experience_response.text.strip()
    education_response = model.generate_content(
        f"Extract the only degree name (e.g Bachelors, Masters, PHD) from the text and don't write degree in the end:\n{text}\n\nEducation:")
    education = education_response.text.strip().replace("'","")
    discipline_response = model.generate_content(
        f"Extract the only discipline name from the text:\n{text}\n\nDiscipline:")
    discipline = discipline_response.text.strip()
    university_response = model.generate_content(
        f"Extract the only university name (if any) from the text:\n{text}\n\nUniversity:")
    university = university_response.text.strip()
    # experiences.append(experience.text)
    # Your extraction logic for job description goes here
    job_info = {
        "title": job_title,  # Example
        "description": skills, # Example
        "cgpa": gpa,
        "experiece": experience,
        "education": education,
        "discipline": discipline,
        "university": university
    }
    return job_info

def save_json(data, json_file_path):
    try:
        with open(json_file_path, 'w') as file:
            json.dump(data, file, indent=4)
        print(f"Data successfully saved to {json_file_path}")
    except Exception as e:
        print(f"Failed to save data: {e}")

def is_meaningful_data(data):
    """Check if data is meaningful and not just placeholder text or absent."""
    placeholder_phrases = [
        "the text does not contain any information",
        "the provided text does not mention",
        "the text does not mention",
        "the provided text does not contain any university names."
    ]
    if isinstance(data, str):
        return not any(phrase in data.strip().lower() for phrase in placeholder_phrases)
    return bool(data)

def normalize_text(text_items):
    """Normalize and concatenate list of text items, flattening any nested lists and removing non-alphabetic characters."""
    flat_list = [item for sublist in text_items for item in (sublist if isinstance(sublist, list) else [sublist]) if is_meaningful_data(item)]
    normalized_text = ' '.join(str(item).replace("’", "").replace("'", "") for item in flat_list)
    return ' '.join(normalized_text.split()).lower()


app = FastAPI()

@app.get("/parseResume")
async def parse_resume(request: Request):
    download_url = request.query_params.get("downloadURL")
    # Assuming 'resumeparse' function and other necessary imports and code are defined as in your script
    if download_url:
        print("Download URL:", download_url)
        resume_data = resumeparse(download_url)
        print(resume_data)
        return resume_data
    else:
        return {"error": "No downloadURL parameter provided"}
    
@app.post('/score/')
async def calculate_score(request: Request):
    # resume_path: str = Query(...), jd_path: str = Query(...)
    body = await request.json()
    jd_data = body.get("jobParsed")
    cv_data = body.get("resumeParsed")

    # cv_data = json.loads(cv_json)
    # jd_data = json.loads(jd_json)

    # print(cv_data)
    # print(jd_data)

    # resume_path = os.path.abspath(resume_path)
    # jd_path = os.path.abspath(jd_path)

    # if not (os.path.isfile(resume_path) and os.path.isfile(jd_path)):
    #     raise HTTPException(status_code=404, detail="File not found at resolved path")
    # try:
    #     cv_data, jd_data = json.load(cv_json), json.load(jd_json)
    # except json.JSONDecodeError as json_err:
    #     raise HTTPException(status_code=400, detail=f"Error decoding JSON: {json_err}")
    # except FileNotFoundError as fnf_error:
    #     raise HTTPException(status_code=404, detail=f"File not found: {fnf_error}")

    def get_normalized_cgpa(cgpa):
    # Check if CGPA data is a list, and if so, take the first element.
     if isinstance(cgpa, list) and cgpa:
        cgpa = cgpa[0]
    
     if is_meaningful_data(cgpa):
        try:
            normalized_value = float(cgpa)
            print(f"Successfully converted CGPA: {normalized_value}")  # Debugging output
            return normalized_value
        except (ValueError, TypeError) as e:
            print(f"Error converting CGPA '{cgpa}' to float: {e}")  # Debugging output
            return 0  # Return 0 if there's an error converting to float
     else:
        print(f"CGPA '{cgpa}' is not meaningful")  # Debugging output
     return 1  # Return 1 if CGPA is not meaningful - consider if this is the best default



    jd_cgpa, cv_cgpa = map(get_normalized_cgpa, (jd_data.get('CGPA', 0), cv_data.get('CGPA', 0)))
    cgpa_match = cv_cgpa >= jd_cgpa or not is_meaningful_data(jd_data.get('CGPA', 0))
    print(f"JD CGPA: {jd_cgpa}, Resume CGPA: {cv_cgpa}, Match: {cgpa_match}")
    print(cgpa_match)

    def prepare_text_data(data, keys):
        return normalize_text([data.get(key, []) for key in keys])

    jd_text = prepare_text_data(jd_data, ['description', 'experience'])
    print(jd_text)
    cv_text = prepare_text_data(cv_data, ['SKILLS', 'EXPERIENCE'])
    print(cv_text)

    vectorizer = TfidfVectorizer(stop_words='english', ngram_range=(1, 2), max_features=500)
    vectors = vectorizer.fit_transform([jd_text, cv_text])
    cosine_sim = cosine_similarity(vectors[0:1], vectors[1:2])[0][0]

    def compare_education_field(cv_field, jd_field):
        if is_meaningful_data(jd_field):
            return 0.1 if normalize_text([cv_field]) == normalize_text([jd_field]) else 0
        return 0.1

    degree_match = compare_education_field(cv_data.get('DEGREE', ""), jd_data.get('education', ""))
    print(degree_match)
    discipline_match = compare_education_field(cv_data.get('DISCIPLINE', ""), jd_data.get('discipline', ""))
    print(discipline_match)
    university_match = compare_education_field(cv_data.get('UNIVERSITY', ""), jd_data.get('university', ""))
    print(university_match)

    overall_score = (0.5 * cosine_sim) + (0.2 * (1 if cgpa_match else 0)) + degree_match + discipline_match + university_match
    overall_score_percentage = round(overall_score * 100, 2)

    return {"Resume match score": f"{overall_score_percentage}%"}


@app.post("/extractJobDescription")
async def extract_job(request: Request):
    try:
        # with open(file_path, 'r') as file:
        #     job_description_text = file.read()
        body = await request.json()
        job_description = body.get("JD")
        job_info =extract_job_info(job_description)
        print(job_info)
        # json_file_path="job_data.json"
        # save_json(job_info,json_file_path)
        return job_info
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
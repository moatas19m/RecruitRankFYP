import requests
import PyPDF2
import io

# URL of the PDF file
url = "https://firebasestorage.googleapis.com/v0/b/recruitranks-1111.appspot.com/o/files%2FOsama%20Hameed%20Resume.pdfua2024-5-9%204%3A42%3A10?alt=media&token=8048f9a9-d926-4e91-ac22-d8debca493c1"

# Send a GET request to the URL
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:

    if ".pdf" in url:
        # Create a PDF reader object
        pdf_reader = PyPDF2.PdfReader(io.BytesIO(response.content))

        # Initialize an empty string to store the text
        text = ""

        # Iterate through each page of the PDF and extract text
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            text += page.extract_text()

        # Print the extracted text
        print(text)
        
    elif ".docx" in url:
        text = docx2txt.process(io.BytesIO(response.content))

        # Print the extracted text
        print(text)
else:
    print("Failed to fetch the PDF file. Status code:", response.status_code)

import os
import PyPDF2

def open_pdf_resume():
    # Get the current directory
    current_dir = os.path.dirname(os.path.realpath(__file__))
    
    # Path to the PDF file
    pdf_file_path = os.path.join(current_dir, "Osama Hameed Resume.pdf")

    # Check if the file exists
    if not os.path.exists(pdf_file_path):
        print("Error: Resume file not found.")
        return

    # Open the PDF file
    with open(pdf_file_path, "rb") as pdf_file:
        # Create a PdfFileReader object
        pdf_reader = PyPDF2.PdfReader(pdf_file)
        
        # Check if the PDF file has any pages
        if len(pdf_reader.pages) == 0:
            print("Error: The PDF file is empty.")
            return
        
        # Print the number of pages in the PDF file
        print("Number of pages in the PDF:", len(pdf_reader.pages))

        # Read the text from the first page
        first_page_text = pdf_reader.pages[0].extract_text()

        # Print the text from the first page
        print("Text from the first page:")
        print(first_page_text)

        # You can add more code here to further process the PDF file, such as extracting text from other pages, etc.

if __name__ == "__main__":
    open_pdf_resume()

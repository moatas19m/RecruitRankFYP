from fastapi import FastAPI

# Create an instance of the FastAPI class
app = FastAPI()

# Define an API endpoint that responds with "Hello, World!"
@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}
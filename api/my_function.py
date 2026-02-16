from fastapi import FastAPI

app = FastAPI()

@app.get("/my-function")
def handler():
    return {"message": "This is a new serverless function"}

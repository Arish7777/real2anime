# app/server.py
import io
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import StreamingResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import torch
import os

from .inference import (
    load_generator,
    pil_from_bytes,
    transform_image
)

app = FastAPI(title="AnimeGANv2 API")

# Add CORS middleware
# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for production (Vercel)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
CKPT = "app/checkpoints/generator.pth"  # relative path

MODEL = None


@app.on_event("startup")
async def startup():
    global MODEL
    MODEL = load_generator(CKPT, DEVICE)
    print("AnimeGANv2 loaded.")


@app.post("/transform")
async def transform(file: UploadFile = File(...), size: int = 512):
    try:
        data = await file.read()
        img = pil_from_bytes(data)
        out = transform_image(img, MODEL, DEVICE, size=size)

        buf = io.BytesIO()
        out.save(buf, format="PNG")
        buf.seek(0)
        return StreamingResponse(buf, media_type="image/png")

    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)

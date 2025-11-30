# app/inference.py
import io
import numpy as np
from PIL import Image
import torch
import torchvision.transforms as T

from .model import Generator  # ← IMPORT YOUR GENERATOR MODEL


# ---------------------------------------------------------
# Load AnimeGANv2 Generator
# ---------------------------------------------------------
def load_generator(checkpoint_path, device="cuda"):
    model = Generator().to(device)

    state = torch.load(checkpoint_path, map_location=device)

    # Usually AnimeGANv2 checkpoints contain keys like:
    # "generator", "state_dict", or raw state_dict
    if "state_dict" in state:
        state = state["state_dict"]
    elif "generator" in state:
        state = state["generator"]

    model.load_state_dict(state)
    model.eval()
    return model


# ---------------------------------------------------------
# Image preprocess → tensor
# ---------------------------------------------------------
def preprocess(img: Image.Image, size=512):
    img = img.convert("RGB")
    img = img.resize((size, size), Image.BICUBIC)
    arr = np.asarray(img).astype(np.float32) / 255.0
    t = torch.from_numpy(arr).permute(2, 0, 1).unsqueeze(0)
    t = (t - 0.5) / 0.5  # tanh model normalization [-1,1]
    return t


# ---------------------------------------------------------
# tensor → image
# ---------------------------------------------------------
def postprocess(out):
    t = out.squeeze(0).permute(1, 2, 0).cpu().detach().numpy()
    t = (t * 0.5) + 0.5
    t = np.clip(t * 255.0, 0, 255).astype(np.uint8)
    return Image.fromarray(t)


# ---------------------------------------------------------
# Main transform function
# ---------------------------------------------------------
def transform_image(pil_image, model, device="cuda", size=512):
    t = preprocess(pil_image, size).to(device)
    with torch.no_grad():
        result = model(t)
    return postprocess(result)


def pil_from_bytes(data: bytes):
    return Image.open(io.BytesIO(data))

# frontend/streamlit_app.py
import streamlit as st
import requests
from PIL import Image
from io import BytesIO

API_URL = "http://localhost:8000/transform"

st.title("Real → Anime (AnimeGANv2)")
uploaded = st.file_uploader("Upload a selfie", type=["jpg","jpeg","png"])

size = st.slider("Output size", 256, 1024, 512)

if st.button("Convert") and uploaded:
    files = {"file": (uploaded.name, uploaded.getvalue(), uploaded.type)}
    with st.spinner("Generating..."):
        resp = requests.post(API_URL, files=files, params={"size": size})

    if resp.status_code == 200:
        out = Image.open(BytesIO(resp.content))
        st.image(out, caption="Anime Output")

        st.download_button(
            "Download",
            data=resp.content,
            file_name="anime.png",
            mime="image/png",
        )
    else:
        st.error(resp.text)

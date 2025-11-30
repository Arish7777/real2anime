# Real2Anime - AI Image Transformation

![Real2Anime Banner](frontend-react/public/assets/goku-ui-alt.png)

**Real2Anime** is a cutting-edge AI-powered web application that transforms real-world photos into stunning anime-style artwork. Leveraging the power of **AnimeGANv2** and **Deep Learning**, this project offers a seamless and futuristic user experience for generating high-quality anime images.

## 🚀 Features

-   **AI-Powered Transformation**: Instantly convert photos to anime style using a pre-trained AnimeGANv2 model.
-   **Futuristic UI/UX**: A visually striking interface with neon aesthetics, glassmorphism, and smooth animations.
-   **Real-time Processing**: Fast and efficient image processing via a FastAPI backend.
-   **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
-   **Image Customization**: Adjustable output size for high-resolution results.
-   **Easy Download**: One-click download of transformed images.

## 🛠️ Tech Stack

### Frontend
-   **React.js** (Vite) - Fast and modern UI framework.
-   **Bootstrap 5** & **React-Bootstrap** - Responsive layout and components.
-   **Framer Motion** - Advanced animations and transitions.
-   **Axios** - HTTP client for API communication.
-   **CSS3** - Custom futuristic styling with variables and animations.

### Backend
-   **FastAPI** - High-performance web framework for building APIs.
-   **PyTorch** - Deep learning framework for running the model.
-   **AnimeGANv2** - The core GAN model for image-to-anime translation.
-   **Uvicorn** - ASGI server for production.
-   **Pillow (PIL)** - Python Imaging Library for image processing.

## 📦 Installation & Setup

Follow these steps to set up the project locally.

### Prerequisites
-   Python 3.8+
-   Node.js & npm
-   Git

### 1. Clone the Repository
```bash
git clone https://github.com/Arish7777/real2anime.git
cd real2anime
```

### 2. Backend Setup (FastAPI)
Navigate to the root directory and set up the Python environment.

```bash
# Create a virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
# OR if using conda/environment.yml
# conda env create -f environment.yml
# conda activate real2anime
```

**Start the Backend Server:**
```bash
# Run from the root directory
python -m uvicorn app.server:app --reload
```
The API will be available at `http://localhost:8000`.

### 3. Frontend Setup (React + Vite)
Navigate to the frontend directory.

```bash
cd frontend-react

# Install dependencies
npm install

# Start the development server
npm run dev
```
The application will be accessible at `http://localhost:5173`.

## 👥 Project Team

**Supervisor:**
-   **Omer Qureshi**

**Team Members:**
| Name | Roll Number |
| :--- | :--- |
| **Muhammad Arish** | 22K-4118 |
| **Jahanzaib Irfan** | 22K-4006 |
| **Malaika Raza** | 22K-4047 |
| **Mehreen Saghar** | 22K-4071 |

## 📄 License

This project is licensed under the MIT License.

---
*Built with ❤️ by the Real2Anime Team*

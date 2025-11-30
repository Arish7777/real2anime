import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Spinner, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Hero.css';
import './FileUpload.css';

const Hero = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [transformedImage, setTransformedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [size, setSize] = useState(512);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
            setTransformedImage(null);
        }
    };

    const handleTransform = async () => {
        if (!selectedFile) return;

        setLoading(true);
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
            const response = await axios.post(
                `${apiUrl}/transform?size=${size}`,
                formData,
                {
                    responseType: 'blob',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            const imageUrl = URL.createObjectURL(response.data);
            setTransformedImage(imageUrl);
        } catch (error) {
            console.error('Error transforming image:', error);
            alert('Failed to transform image. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (transformedImage) {
            const link = document.createElement('a');
            link.href = transformedImage;
            link.download = 'anime.png';
            link.click();
        }
    };

    return (
        <div className="hero-section">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content card-container"
                >
                    <Row className="align-items-center">
                        <Col md={12} className="text-center mb-4">
                            <motion.h1
                                className="hero-title"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                BRING YOUR ANIME WORLDS TO LIFE
                            </motion.h1>
                            <motion.p
                                className="hero-subtitle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Transform your photos into stunning anime art with AI
                            </motion.p>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col md={6} className="mb-4">
                            <div className="upload-section">
                                <h3 className="section-title">Upload Your Photo</h3>
                                <Form.Group className="mb-3">
                                    <Form.Label>Choose an image</Form.Label>
                                    <input
                                        type="file"
                                        id="file-upload"
                                        accept="image/jpeg,image/jpg,image/png"
                                        onChange={handleFileChange}
                                        className="file-input"
                                    />
                                    <label htmlFor="file-upload" className="custom-file-upload">
                                        Choose Image File
                                    </label>
                                    {selectedFile && (
                                        <div className="file-name-display">
                                            📷 {selectedFile.name}
                                        </div>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Output Size: {size}px</Form.Label>
                                    <Form.Range
                                        min={256}
                                        max={1024}
                                        value={size}
                                        onChange={(e) => setSize(parseInt(e.target.value))}
                                    />
                                </Form.Group>

                                {previewUrl && (
                                    <div className="preview-container">
                                        <p className="preview-label">Preview:</p>
                                        <Image src={previewUrl} alt="Preview" fluid rounded className="preview-image" />
                                    </div>
                                )}

                                <div className="button-group">
                                    <Button
                                        className="btn-primary-custom"
                                        onClick={handleTransform}
                                        disabled={!selectedFile || loading}
                                    >
                                        {loading ? (
                                            <>
                                                <Spinner animation="border" size="sm" className="me-2" />
                                                Generating...
                                            </>
                                        ) : (
                                            'Start now'
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} className="mb-4">
                            <div className="result-section">
                                <h3 className="section-title">Anime Result</h3>
                                {transformedImage ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="result-container"
                                    >
                                        <Image src={transformedImage} alt="Anime Output" fluid rounded className="result-image glow-shadow" />
                                        <Button
                                            className="btn-secondary-custom mt-3"
                                            onClick={handleDownload}
                                        >
                                            Download
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <div className="placeholder-container">
                                        <p className="placeholder-text">Your anime transformation will appear here</p>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </div>
    );
};

export default Hero;

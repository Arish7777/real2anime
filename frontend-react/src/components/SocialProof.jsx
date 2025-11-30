import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaShare } from 'react-icons/fa';
import './SocialProof.css';

const SocialProof = () => {
    const socialLinks = [
        {
            icon: <FaGithub />,
            label: 'GitHub',
            url: 'https://github.com/yourusername' // Replace with your GitHub URL
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/yourusername' // Replace with your LinkedIn URL
        },
        {
            icon: <FaShare />,
            label: 'Share',
            url: '' // Will be set to current page URL when deployed
        },
    ];

    const handleClick = (link) => {
        if (link.label === 'Share') {
            // Use the current page URL for sharing
            const shareUrl = window.location.href;
            if (navigator.share) {
                navigator.share({
                    title: 'Check out my portfolio',
                    url: shareUrl
                }).catch(err => console.log('Error sharing:', err));
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(shareUrl);
                alert('Link copied to clipboard!');
            }
        } else {
            window.open(link.url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <Container className="social-proof-section">
            <Row className="justify-content-center">
                <Col md={8}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="social-proof-card">
                            <Card.Body>
                                <h3 className="social-proof-title">Connect With Me</h3>
                                <Row className="mt-4">
                                    {socialLinks.map((link, index) => (
                                        <Col key={index} xs={4} className="text-center">
                                            <motion.div
                                                className="stat-item"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                                onClick={() => handleClick(link)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <div className="stat-icon">{link.icon}</div>
                                                <div className="stat-label">{link.label}</div>
                                            </motion.div>
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default SocialProof;
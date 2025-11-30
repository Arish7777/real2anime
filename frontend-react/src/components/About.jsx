import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const teamMembers = [
        { name: 'Muhammad Arish', rollNo: '22K-4118' },
        { name: 'Jahanzaib Irfan', rollNo: '22K-4006' },
        { name: 'Malaika Raza', rollNo: '22K-4047' },
        { name: 'Mehreen Saghar', rollNo: '22K-4071' },
    ];

    return (
        <div className="about-section" id="about">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="about-title">About Our Team</h2>
                    <p className="about-subtitle">Real2Anime - AI-Powered Image Transformation</p>

                    {/* Supervisor Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="supervisor-card-wrapper"
                    >
                        <Card className="supervisor-card">
                            <Card.Body className="text-center">
                                <div className="supervisor-badge">SUPERVISOR</div>
                                <h3 className="supervisor-name">Omer Qureshi</h3>
                                <p className="supervisor-role">Project Supervisor</p>
                            </Card.Body>
                        </Card>
                    </motion.div>

                    {/* Team Members */}
                    <h3 className="team-section-title">Project Team</h3>
                    <Row className="mt-4">
                        {teamMembers.map((member, index) => (
                            <Col key={index} md={6} lg={3} className="mb-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                >
                                    <Card className="team-member-card">
                                        <Card.Body className="text-center">
                                            <div className="member-avatar">
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <h4 className="member-name">{member.name}</h4>
                                            <p className="member-roll">{member.rollNo}</p>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>

                    {/* Project Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="project-info"
                    >
                        <Card className="info-card">
                            <Card.Body>
                                <h4 className="info-title">About the Project</h4>
                                <p className="info-text">
                                    Real2Anime is an AI-powered application that transforms real-world photos into stunning anime-style artwork.
                                    Using advanced deep learning techniques with AnimeGANv2, we bring your images to life with beautiful anime aesthetics.
                                </p>
                                <div className="tech-stack">
                                    <span className="tech-badge">React</span>
                                    <span className="tech-badge">FastAPI</span>
                                    <span className="tech-badge">PyTorch</span>
                                    <span className="tech-badge">AnimeGANv2</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
};

export default About;

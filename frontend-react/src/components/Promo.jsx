import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Promo.css';

const Promo = () => {
    return (
        <Container className="promo-section">
            <Row className="justify-content-center">
                <Col md={5} className="mb-4">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="promo-card">
                            <Card.Body className="text-center">
                                <div className="promo-badge">LIMITED OFFER</div>
                                <h2 className="promo-title">50% OFF</h2>
                                <p className="promo-text">Premium Features</p>
                                <button className="btn-primary-custom mt-3">Enroll Now</button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default Promo;

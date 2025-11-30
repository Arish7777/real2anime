import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <BootstrapNavbar className="custom-navbar">
                <Container>
                    <BootstrapNavbar.Brand href="#home" className="navbar-brand-custom">
                        <span className="brand-text">Real2Anime</span>
                    </BootstrapNavbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
                    </Nav>
                </Container>
            </BootstrapNavbar>
        </motion.div>
    );
};

export default Navbar;

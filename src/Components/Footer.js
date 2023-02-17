import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { MailchimpForm } from './MailchimpForm';

function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <Col sm={6}>
                        <h4>Kevin Leiva</h4>
                        <p>Desarrollador Web FullStack</p>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/kevin-leiva-98208a184/"><img src={navIcon1} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
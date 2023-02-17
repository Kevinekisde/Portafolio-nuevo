import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { ArrowDownCircle, ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/Code Development _Flatline.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cv from './CV.pdf'

function BannerComponent() {
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Fullstack", "Frontend", "Backend"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText)

        if (!isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNumber(loopNumber + 1)
            setDelta(500);
        }
    }
    return (
        <section className='banner' id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className='tagline'>Bienvenido a mi portafolio</span>
                                    <h1>{`Soy un Desarrollador `}<span className='wrap'>{text}</span></h1>
                                    <p>Estudiante de ingeniería civil en informática con mas de 3 años en experiencia en desarrollo, Actualmente trabajando como Semi-senior web developer pero siempre en busca de nuevos desafíos para seguir aumentando mi conocimiento.</p>
                                    <button>Descargar CV<a href={cv} download='CV-KevinLeiva.PDF'><ArrowDownCircle size={25} /></a></button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default BannerComponent
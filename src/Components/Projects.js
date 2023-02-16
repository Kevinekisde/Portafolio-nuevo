import React from 'react'
import { Col, Container, Row, Tab } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import ProjectCardComponent from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import Misimple from '../assets/img/MiSimple.png'
import Movistar from '../assets/img/Movistar.png'
import Simple from '../assets/img/Simple.png'
import Bresh from '../assets/img/Bresh.png'
import Spotify from '../assets/img/Spotify.png'
import Cupcakes from '../assets/img/Cupcakes.png'
import Konabil from '../assets/img/Konabil.png'

function ProjectsComponent() {
    const projects = [
        {
            title: 'Mi Simple',
            description: 'Aplicacion movil para administar lineas de usuario',
            image: Misimple
        },
        {
            title: 'Descuentos Movistar',
            description: 'Diseño de landings para sitio web',
            Tecnologias: 'Angular',
            image: Movistar
        },
        {
            title: 'Simple Moviles',
            description: '',
            image: Simple
        },
        {
            title: 'Fiesta Bresh',
            description: 'Rediseño de sitio web',
            image: Bresh
        },
        {
            title:'Konabil',
            description:'Diseño de landing y funciones para sistema de gestion contable',
            image:Konabil
        }
    ]
    const projects2 = [
        {
            title: 'Spotify',
            description: 'Diseño de sitio web para guardar y buscar albums usando la API de spotify',
            image: Spotify
        },
        {
            title: 'Cupcakes',
            description: 'Aplicacion web para administrar pedidos de cupcakes',
            image: Cupcakes
        },
    ]

    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projectos</h2>
                        <p>Desde componentes web y animaciones UI/UX hasta React.JS, Redux, y Node.JS. Echa un vistazo a mis últimos proyectos de desarrollo web.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Experiencia Profesional</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Projectos autonomo</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >
                                        Tecnologias
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => (
                                                <ProjectCardComponent key={index} {...project} />
                                            ))
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>

                                        {
                                            projects2.map((project, index) => (
                                                <ProjectCardComponent key={index} {...project} />
                                            ))
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h1>Mi stack Principal</h1>
                                    <Row>
                                        <Col xs={12} md={6} lg={4}>
                                            <div className='tech'>
                                                <h3>Frontend</h3>
                                                <ul>
                                                    <li>React</li>
                                                    <li>Angular</li>
                                                    <li>Bootstrap</li>
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>JavaScript</li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6} lg={4}>
                                            <div className='tech'>
                                                <h3>Backend</h3>
                                                <ul>
                                                    <li>Nodejs</li>
                                                    <li>Express</li>
                                                    <li>GO</li>
                                                    <li>MySQL</li>
                                                    <li>MongoDB</li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6} lg={4}>
                                            <div className='tech'>
                                                <h3>DevOps</h3>
                                                <ul>
                                                    <li>Git</li>
                                                    <li>GitHub</li>
                                                    <li>Heroku</li>
                                                    <li>Netlify</li>
                                                    <li>Postman</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='shape' />
        </section>
    )
}

export default ProjectsComponent
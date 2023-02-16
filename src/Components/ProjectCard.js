import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCardComponent({ title, description, image }) {
    return (
        <Col size={12} sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={image} />
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCardComponent
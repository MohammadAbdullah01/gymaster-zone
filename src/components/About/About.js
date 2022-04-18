import React from 'react';
import { Container } from 'react-bootstrap';
import developer from '../../images/developer.PNG'
import './About.css'


const About = () => {
    return (
        <div className='about-container'>
            <Container>
                <div><img className='developer-img' src={developer} alt="" />
                    <h2 style={{ fontWeight: "700", marginBottom: "25px" }}>Hlw !! <br />I'm Abdullah</h2>
                    <div>
                        <p>I'm currently learning MERN development. My goal in this year to become e front ent expart so that I can join any company as a front end developer. After being a front end expart I will start learning advanced technologies, backend also. And within the next year my goal is to become a full stack web developer. In this long journey I'm struggling hard as far as I can. Everyday I spend more than 8 hours in learning.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;
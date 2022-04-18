import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <Container>
                <div className='question-container'>
                    <Row>
                        <Col lg={8}>
                            <div className='answering-sec'>
                                <h1>What is the difference between authorization and authentication?</h1>
                                <p>Authentication is verifying someone who is accessing my application where authorization is giving her more facilities or extra curriculam to do in the application. So in a word authentication and authorization is not same. Authentication is used to be confirmed that the user is really are who they are representing themselves. After confirming the authentication, authorization is used to give him permission of different levels of information and actions to do. Authentication is the first steop of identity and then authorization is applied to take place.</p>
                            </div>
                        </Col>
                        <Col lg={12}>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <div className='answering-sec'>
                                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                                <p>
                                    Currently I'm using firebase authentication system because firebase protects my user's information strongly. For authentication I also can use other popular third party libraries those who are providing high secure authentication like - okta, Auth0, Microsoft Azure Active Directory, CyberArk Identity (formerly Idaptive), OneLogin etc.
                                </p>
                            </div>
                        </Col>
                        <Col lg={12}>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <div className='answering-sec'>
                                <h1> What other services does firebase provide other than authentication?</h1>
                                <p>
                                    Beside authentication firebase provides us-
                                    <ul>
                                        <li>Analytics: Google Analytics for Firebase offers free, unlimited reporting on as many as 500 separate events.</li>
                                        <li>Cloud messaging: By cloud messaging users can receive and deliver messages in real time.</li>
                                        <li>Realtime database: Firebase also provides us realtime datebase and it is a cloud-hosted NoSQL database..</li>
                                        <li>Performance: Firebase performance monitors our web app or other app and feedbacks us where to improve for better performance.</li>
                                    </ul>
                                </p>
                            </div>
                        </Col>
                        <Col lg={12}>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Blog;
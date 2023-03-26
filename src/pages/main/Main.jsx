import React from "react";
import { Row, Col } from "react-bootstrap";
import './Main.css'
import TextBlock from '../../components/TextBlock'
import email from '../../images/Email-logo.png'
import github from '../../images/GitHub-Mark-64px.png'
import instagram from '../../images/Instagram-Logo.png'
import linkedin from '../../images/LinkedIn-logo.png'
import Project from "../../components/Project";
import Profile from "../../components/Profile";
import Form from "../../components/Form";

const Main = () => {
    return (
        <div className="fullBody">
            <header>
                <h1>mckenna k black</h1>
            </header>
            <div className='mainBody'>
                <div className='fun-border'>
                    <div className='textBlock descriptors'>
                        <TextBlock message={['web developer', 'all-season hiker', 'alpine skier', 'wordle-enthusiast']} />
                    </div>
                </div>
                <div className="projectsContainer">
                    <Project projectLink='https://alpine-api.onrender.com/' displayLink='VT Alpine Ski Site' sourceCodeLink='https://github.com/McKB/alpine-api' displaySourceCodeLink='view it on Github'/>
                    <Project projectLink='https://alpine-api.onrender.com/api' displayLink='VT Alpine API' sourceCodeLink='https://github.com/McKB/alpine-api' displaySourceCodeLink='view it on Github' />
                </div>
                <div className='textBlock bio'>
                    <TextBlock message={['web developer & designer open to collaborating on new projects. knowledge base currently includes HTML, CSS, Javascript, React, SQL, Java, Python, & Adobe Illustrator/Photoshop. in case this is relevant, i am one parent to a small beagle, and i can tell you where to find the best hiking trails in northern vermont.']} />
                    <div> <a className="chat" href="mailto:mckennakb@comcast.net?subject=Hello!">{"let's chat >>"}</a></div>
                </div>
            </div>
            <div>
                <div className="form-container">
                    <Row>
                        <Col md={6}>
                            <div className="map-container">
                                <iframe title="map" src="https://maps.google.com/maps?hl=en&amp;q=Burlington,+Vermont&amp;ie=UTF8&amp;t=&amp;z=10&amp;&amp;output=embed"></iframe>
                                <div className="map-text">
                                    <p className="located">Located in the Greater Burlington Area.</p>
                                    <p className="phone">p: 802.595.3995</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <h3>hey there,</h3>
                            <Form/>
                        </Col>
                    </Row>
                </div>
                <div className="outer-profiles-container">
                    <Profile id='github' backLink='https://github.com/McKB' imageSource={github} alt='Github' />
                    <Profile id='linkedin' backLink='https://www.linkedin.com/in/mckennakblack' imageSource={linkedin} alt='LinkedIn' />
                    <Profile id='instagram' backLink='https://www.instagram.com/mckennakblack/' imageSource={instagram} alt='Instagram' />
                    <Profile id='email' backLink='mailto:mckennakb@comcast.net?subject=Hello!' imageSource={email} alt='Email Me' />
                </div>
            </div>
            <footer>
                &copy; 2023 mckenna k black
            </footer>
        </div>
    )
}

export default Main
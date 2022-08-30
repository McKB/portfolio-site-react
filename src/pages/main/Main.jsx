import React from "react";
import './Main.css'
import TextBlock from '../../components/TextBlock'
import email from '../../images/Email-logo.png'
import github from '../../images/GitHub-Mark-Light-64px.png'
import instagram from '../../images/Instagram-Logo.png'
import linkedin from '../../images/LinkedIn-logo.png'

const Main = () => {
    return (
        <div>
            <header>
                <h1>mckenna k black</h1>
            </header>
            <div className='mainBody'>
                <div className='textBlock descriptors'>
                    <TextBlock message={['web developer', 'all-season hiker', 'alpine skier', 'wordle-enthusiast', 'book-lover', 'wheel-thrower']} />
                </div>
                <div className="projectsContainer">
                    <div className="project">
                        <a href="fake/link">fakeprojectlink.com</a>
                        <span>    </span>
                        <a href='source/code'>fakesourcecode</a>
                    </div>
                    <div className="project">
                        <a href="fake/link">fakeprojectlink.com</a>
                        <span>    </span>
                        <a href='source/code'>fakesourcecode</a>
                    </div>
                    <div className="project">
                        <a href="fake/link">fakeprojectlink.com</a>
                        <span>    </span>
                        <a href='source/code'>fakesourcecode</a>
                    </div>
                </div>
                <div className='textBlock bio'>
                    <TextBlock message={['I’m a web developer & designer open to collaborating on new projects and expanding my skillset, which currently includes HTML, CSS, Javascript, React, SQL, Java, Python, & Adobe Illustrator/Photoshop. I have a degree in mathematics, I am one parent to a small beagle, I car-camped in 36 national parks one summer, and I can tell you where the best trails are in northern Vermont.']}/>
                    <div> <a className="chat" href="mailto:mckennakb@comcast.net?subject=Hello!">{"Let's Chat >>"}</a></div>
                </div>
                <div className="contactMeContainer">
                    <div className='profile' id="github"> <a href="https://github.com/McKB" target="_blank" rel="noreferrer"><img src={github} alt="Github"></img></a></div>
                    <div className='profile' id="linkedin"> <a href="https://www.linkedin.com/in/mckennakblack" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"></img></a></div>
                    <div className='profile' id="instagram"> <a href="https://www.instagram.com/mckennakblack/" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram"></img></a></div>
                    <div className='profile' id="email"> <a href="mailto:mckennakb@comcast.net?subject=Hello!"><img src={email} alt="Email Me"></img></a></div>
                </div>
            </div>
            <footer>
                &copy; 2022 mckenna black 
            </footer>
        </div>
    )
}

export default Main
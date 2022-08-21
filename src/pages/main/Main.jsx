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
                    <TextBlock message={['web developer', 'hiker', 'beagle-owner', 'vermonter', 'skier', 'bookworm', 'loner']} />
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
                    <TextBlock message={['I’m a web developer & designer open to collaborating on new projects and expanding my skillset, which currently includes HTML, CSS, Javascript, React, SQL, Github, Git, Github Actions, CI/CD, Agile Software Development, & Adobe Illustrator/Photoshop. I can also tell you where to hike in northern Vermont, spell two words that are over 25 letters long, and communicate effectively. Let’s chat >>']}/>
                </div>
                <div className="contactMeContainer">
                    <ul>
                        <li id="github"> <a href="https://github.com/McKB" target="_blank" rel="noreferrer"><img src={github} alt="Github"></img></a></li>
                        <li id="linkedin"> <a href="https://www.linkedin.com/in/mckennakblack" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"></img></a></li>
                        <li id="instagram"> <a href="https://www.instagram.com/mckennakblack/" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram"></img></a></li>
                        <li id="email"> <a href="mailto:mckennakb@comcast.net?subject=Hello!"><img src={email} alt="Email Me"></img></a></li>
                    </ul>
                </div>
            </div>
            <footer>
                &copy; 2022 mckenna black 
            </footer>
        </div>
    )
}

export default Main
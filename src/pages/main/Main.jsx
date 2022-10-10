import React from "react";
import './Main.css'
import TextBlock from '../../components/TextBlock'
import email from '../../images/Email-logo.png'
import github from '../../images/GitHub-Mark-Light-64px.png'
import instagram from '../../images/Instagram-Logo.png'
import linkedin from '../../images/LinkedIn-logo.png'
import Project from "../../components/Project";
import Profile from "../../components/Profile";

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
                    <Project projectLink='fake/link' displayLink='fakeprojectlink.com' sourceCodeLink='source/code' displaySourceCodeLink='fakesourcecode'/>
                    <Project projectLink='fake/link' displayLink='fakeprojectlink.com' sourceCodeLink='source/code' displaySourceCodeLink='fakesourcecode' />
                    <Project projectLink='fake/link' displayLink='fakeprojectlink.com' sourceCodeLink='source/code' displaySourceCodeLink='fakesourcecode' />
                </div>
                <div className='textBlock bio'>
                    <TextBlock message={['I’m a web developer & designer open to collaborating on new projects and expanding my skillset, which currently includes HTML, CSS, Javascript, React, SQL, Java, Python, & Adobe Illustrator/Photoshop. I have a degree in mathematics, I am one parent to a small beagle, I car-camped in 36 national parks one summer, and I can tell you where to find the best trails in northern Vermont.']} />
                    <div> <a className="chat" href="mailto:mckennakb@comcast.net?subject=Hello!">{"Let's Chat >>"}</a></div>
                </div>
                <div className="contactMeContainer">
                    <Profile id='github' backLink='https://github.com/McKB' imageSource={github} alt='Github' />
                    <Profile id='linkedin' backLink='https://www.linkedin.com/in/mckennakblack' imageSource={linkedin} alt='LinkedIn' />
                    <Profile id='instagram' backLink='https://www.instagram.com/mckennakblack/' imageSource={instagram} alt='Instagram' />
                    <Profile id='email' backLink='mailto:mckennakb@comcast.net?subject=Hello!' imageSource={email} alt='Email Me' />
                </div>
            </div>
            <footer>
                &copy; 2022 mckenna black
            </footer>
        </div>
    )
}

export default Main
import React from "react";
import './Main.css'
import TextBlock from '../../components/TextBlock'

const Main = () => {
    return (
        <div>
            <header>
                <h3>creations by</h3>
                <h1>mcKenna k black</h1>
            </header>
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
            </div>
            <div className='textBlock bio'>
                <TextBlock message={['I’m a web developer & designer open to collaborating on new projects and expanding my skillset, which currently includes HTML, CSS, Javascript, React, SQL, Github, Git, Github Actions, CI/CD, Agile Software Development, & Adobe Illustrator/Photoshop. I can also tell you where to hike in northern Vermont, spell two words that are over 25 letters long, and communicate effectively. Let’s chat >>']}/>
            </div>
            <div className="contactMeContainer">
                <div>Contact me --</div>
            </div>
            <footer>
                copyright @2022
            </footer>
        </div>
    )
}

export default Main
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
            <div className='textBlock'>
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
            <div className='textBlock'>
                <TextBlock message={['"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"']}/>
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
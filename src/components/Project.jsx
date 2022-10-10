import React from "react";

const Project = (props) => {
    const { projectLink, displayLink, sourceCodeLink, displaySourceCodeLink } = props
    return (
        <div className="project">
            <a href={projectLink}>{displayLink}</a>
            <span>    </span>
            <a href={sourceCodeLink}>{displaySourceCodeLink}</a>
        </div>
    )
}

export default Project
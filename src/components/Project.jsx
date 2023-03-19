import React from "react";

const Project = (props) => {
    const { projectLink, displayLink, sourceCodeLink, displaySourceCodeLink } = props
    return (
        <div>
            <a href={projectLink} target='_blank' rel='noreferrer'>
                <button type='button' className="button buttonLeft">
                    {displayLink}
                </button>
            </a>
            <a href={sourceCodeLink} target='_blank' rel='noreferrer'>
                <button type='button' className="button buttonRight">
                    {displaySourceCodeLink}
                </button>
            </a>
        </div>
    )
}

export default Project
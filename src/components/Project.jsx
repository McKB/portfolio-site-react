import React from "react";

const Project = (props) => {
    const { projectLink, displayLink, sourceCodeLink, displaySourceCodeLink } = props
    return (
        <div>
            <a href={projectLink}>
                <button type='button' className="button buttonLeft">
                    {displayLink}
                </button>
            </a>
            <a href={sourceCodeLink}>
                <button type='button' className="button buttonRight">
                    {displaySourceCodeLink}
                </button>
            </a>
        </div>
    )
}

export default Project
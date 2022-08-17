import React from "react";

const TextBlock = (props) => {
    const {message} = props
    return (
        <div>
            {message.map((paragraph) => {
                return (
                    <p>{paragraph}</p>
                )
            })}
        </div>
    )
}

export default TextBlock
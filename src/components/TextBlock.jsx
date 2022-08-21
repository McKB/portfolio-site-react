import React from "react";

const TextBlock = (props) => {
    const {message} = props
    return (
        <div>
            {message.map((paragraph, i) => {
                return (
                    <p key={i}>{paragraph}</p>
                )
            })}
        </div>
    )
}

export default TextBlock
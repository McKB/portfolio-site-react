import React from "react";

const Profile = (props) => {
    const { id, backLink, imageSource, alt } = props
    let linkTarget, relSet
    if (id === 'email') {
        linkTarget = ''
        relSet = ''
    } else {
        linkTarget = '_blank'
        relSet = 'noreferrer'
    }

    return (
        <div className='profile' id={id}> 
            <a href={backLink} target={linkTarget} rel={relSet}>
                <img src={imageSource} alt={alt}></img>
            </a>
        </div>
    )
}

export default Profile
import React from "react";

const Form = (props) => {
    return (
        <div>
            <form>
                <div>
                    <input type="text" placeholder="Name" id="name" name="name" />
                </div>
                <div>
                    <input type="email" id="email" placeholder="Email" name="email" />
                </div>
                <div>
                    <textarea id="message" name="message" placeholder="Message" rows="5"></textarea>
                </div>
                <div>
                    <button type="submit" id="send-button">Send</button>
                </div>
            </form>
        </div>
    )
}

export default Form
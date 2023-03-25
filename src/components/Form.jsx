import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); 
        emailjs.sendForm('service_jj6t6my', 'template_aj73lzo', form.current, 'bZruj8ClypbV-8uwz')
            .then((result) => {
                console.log('success')
            }, (error) => {
                console.log('message failed to send')
            });
    }
    return (
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <input type="text" placeholder="Name" id="name" name="name" required />
                </div>
                <div>
                    <input type="email" id="email" placeholder="Email" name="email" required />
                </div>
                <div>
                    <textarea id="message" name="message" placeholder="Message" rows="5" required></textarea>
                </div>
                <div>
                    <button type="submit" id="send-button">Send</button>
                </div>
            </form>
    )
}

export default Form
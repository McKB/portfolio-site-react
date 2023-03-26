import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('send >>')

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const sendEmail = (e) => {
        e.preventDefault(); 
        setButtonText("sending...");
        emailjs.sendForm('service_jj6t6my', 'template_aj73lzo', form.current, 'bZruj8ClypbV-8uwz')
            .then(() => {
                setButtonText('sent!')
                form.current.reset()
            }, (error) => {
                console.log('message failed to send')
                window.alert('error...' + {error})
            })
            .then(async () => {
                await delay(5000)
                console.log('waiting 3 seconds')
                setButtonText('send another message >>')
            });
    }
    return (
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <input type="text" placeholder="name" id="name" name="name" required />
            </div>
            <div>
                <input type="email" id="email" placeholder="email" name="email" required />
            </div>
            <div>
                <textarea id="message" name="message" placeholder="message" rows="5" required></textarea>
            </div>
            <div>
                <button type="submit" id="send-button">{buttonText}</button>
            </div>
        </form>
    )
}

export default Form
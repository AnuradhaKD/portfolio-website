import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react';
import { themeContext } from '../../context'
import { useContext } from 'react'


const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('anuradha_kd', 'template_4c8ny9k', form.current, '2PpsvQvMXbbE_XJpJ')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact-form" id="contact">
            <div className="c-left">
                <span style = {{color: darkMode ? 'white' : ''}}>Get in Touch</span>
                <span>Contact Me</span>
                <div 
                    className="blur s-blur"
                    style={{background:"#ABF1FF94"}}
                ></div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className='user' placeholder='Name'/>
                    <input type="email" name="user_email" className='user' placeholder='E-mail'/>
                    <textarea name="message" className='user' placeholder='Message'/>
                    <input type="submit" value="Send" className='button'/>
                    <span>{done && "Thanks for contacting me!!"}</span>
                    <div
                        className='blur c-blur1'
                        style={{background: "var(--purple)"}}
                    ></div>
                </form>
            </div>
        </div>
    )
}

export default Contact
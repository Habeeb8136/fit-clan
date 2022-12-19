import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import Logo from '../../assets/logo.svg'

export default function ContactUs() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_68tpdzi', 'template_46iwhlm', form.current, 'eRco774tz1W2vAKbO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        alert("Message Sent")
    };

    return (
        <div className="contactWrapper d-flex flex-column mx-5 my-3">
            <div className="contactInner m-3 d-flex flex-row justify-content-around align-items-center">
                <div className="">
                    <img src={Logo} alt="" className='mt-3' height={250} />
                    <h1 className='fs-bold mt-3 ttl'>CONTACT US</h1>
                </div>
                <div className="links">
                    <article className="contact_option my-3">
                        <MdOutlineEmail className='contact_option-icon' />
                        <h5>Email</h5>
                        <a href="mailto:fitclan@outlook.com">Send a mail</a>
                    </article>
                    <article className="contact_option my-3">
                        <RiMessengerLine className='contact_option-icon' />
                        <h5>Messenger</h5>
                        <a href="https://m.me/AshuEltero" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>
                    <article className="contact_option my-3">
                        <BsWhatsapp className='contact_option-icon' />
                        <h5>WhatsApp</h5>
                        <a href="https://wa.me/918737916531" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>
                </div>
                <form className='form d-flex flex-column align-items-center justify-content-center' ref={form} onSubmit={sendEmail}>
                    <input className='inputBox' type="text" name="name" id="" placeholder='Enter Your Full Name' />
                    <input className='inputBox' type="email" name="email" id="" placeholder='Enter Your Email' />
                    <input className='inputBox' type="text" name="subject" id="" placeholder='Enter Your Subject' />
                    <textarea className='inputBox' name="message" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
                    <button className='btn btn-success w-50' type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

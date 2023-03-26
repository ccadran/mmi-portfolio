import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formMess = document.querySelector(".form-message");

        emailjs
            .sendForm(
                "service_iveepgi",
                "template_dm9faj8",
                form.current,
                process.env.REACT_APP_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    form.current.reset();
                    formMess.innerHTML =
                        "<p className='success'>Message envoyé ! </p>";

                    setTimeout(() => {
                        formMess.innerHTML = "";
                    }, 2500);
                },
                (error) => {
                    console.log(error.text);
                    formMess.innerHTML =
                        "<p className='error'>Une erreur s'est produite, veuillez réessayer </p>";
                    setTimeout(() => {
                        formMess.innerHTML = "";
                    }, 2500);
                }
            );
    };

    return (
        <div className="form-container">
            <h2>Contactez-moi</h2>
            <form ref={form} onSubmit={sendEmail} className="form-content">
                <label>Nom</label>
                <input
                    type="text"
                    name="name"
                    required
                    autoComplete="off"
                    id="name"
                />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    id="email"
                />
                <label>Message</label>
                <textarea
                    name="message"
                    id="mess"
                    required
                    autoComplete="off"
                />
                <input type="submit" value="Send" className="hover button" />
            </form>
            <div className="form-message"></div>
        </div>
    );
};

export default ContactForm;

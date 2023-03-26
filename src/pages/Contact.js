import React from "react";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";

const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>1 rue Jacques Elul</p>
                            <p>33300 Bordeaux</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard
                                text="0601461471"
                                className="hover"
                            >
                                <p
                                    style={{ cursor: "pointer" }}
                                    className="clipboard"
                                    onClick={() => alert("Numéro Copié")}
                                >
                                    06 01 46 14 71
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <div className="h4">email</div>
                            <CopyToClipboard
                                text="clariocadran@mmibordeaux.com"
                                className="hover"
                            >
                                <p
                                    style={{ cursor: "pointer" }}
                                    className="clipboard"
                                    onClick={() => alert("E-mail Copié")}
                                >
                                    clariocadran@mmibordeaux.com
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credis">
                        <p>Clario Cadran - 2023</p>
                    </div>
                </div>
                <Buttons left={"/projet-4"} />
            </div>
        </main>
    );
};

export default Contact;

import React from 'react'
import logo from "../../assets/Images/Onchain-logo-lightpurple.png";
import Form from "../SubscribeForm"
import { Link } from "react-router-dom";



import "./footer.css"



function FooterRouter() {
    return (
        <div  className="footer-router-div">
                    <ul className="footer-li">
                    <li>
                        <Link className="footer-el" to="/contact">Contact</Link>
                    </li>
                      <li>
                        <Link className="footer-el" to="/team">Qui sommes nous</Link>
                    </li>
                    <li>
                        <Link className="footer-el" to="/a-propos">Mentions légales</Link>
                    </li>
                </ul>
        </div>
    );
}

 function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <img
                    src={logo}
                    alt="onchain logo"
                    className="footer-logo"
                    aria-label="footer-logo"
                    onClick={() => {
                        window.location = "/";
                    }}
                />
                <Form />
                <FooterRouter />
            </div>      
        </div>

    )
}

export default Footer
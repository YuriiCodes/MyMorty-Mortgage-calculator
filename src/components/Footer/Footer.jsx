import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
const Footer = (props) => {
    return(
        <footer className="footer py-3 bg-light" >
            <div className="container">
                <span className="text-muted">
                    Made with <FontAwesomeIcon icon={faHeart} /> by <a target="_blank" href="https://github.com/YuriiCodes/MyMorty-Mortgage-calculator" className="text-muted">Yurii Pidlisnyi</a>
                </span>
            </div>
        </footer>
    )
}
export default Footer;
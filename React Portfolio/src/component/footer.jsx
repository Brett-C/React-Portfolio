import React from "react";
import GitHub from '../images/github-logo.png';
import LinkedIn from '../images/linkedin.png';


const Footer = () => {
    return (
        <div class="footer">
            <a href="https://github.com/brett-c">
                <img src={GitHub} alt="GitHub Account" className="footer_image"></img>
            </a>
            <a href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit" >
                <img src={LinkedIn} alt="LinkedIn Account" className="footer_image"></img>
            </a>
        </div>
    )
}

export default Footer;
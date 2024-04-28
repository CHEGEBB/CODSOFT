import React from 'react';
import FacebookIcon from "../images/us/uim--facebook.svg";
import TwitterIcon from "../images/us/fa--twitter-square.svg";
import InstagramIcon from "../images/us/teenyicons--instagram-solid.svg";
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            {/* GlamourGallerie footer */}
            <div className="us">
                <h1>About Us</h1>
                <p>Step into GalmourGallerie, where fashion meets enchantment, and every corner whispers tales of elegance and style.</p>
            </div>
            <div className="contact">
                <h1>Contact Us</h1>
                <p>123-456-7890</p>
                <p>
                    <a href="mailto:info
                    @glamourgallerie.com">
                    </a>
                </p>
            </div>
            <div className="social">
                <h1>Follow Us</h1>
                <div className="icons">
                    <img src={FacebookIcon} alt="Facebook Icon" />
                    <img src={TwitterIcon} alt="Twitter Icon" />
                    <img src={InstagramIcon} alt="Instagram Icon" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;

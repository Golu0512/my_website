import React from 'react';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <>
            <div className="container p-0 gap-lg-4 gap-md-4 gap-2 mb-lg-0 mb-md-0 mb-4 containerIcon">
                <div className="btn fb-btn m-0 btnSocialIcon">
                    <i className="fa fa-facebook d-flex" id="fb"><FaFacebookF /></i>
                </div>
                <div className="btn ig-btn m-0 btnSocialIcon">
                    <i className="fa fa-instagram d-flex" id="ig"><FaInstagram /></i>
                </div>
                <div className="btn tl-btn m-0 btnSocialIcon">
                    <i className="fa fa-telegram d-flex" id="tl"><FaTelegramPlane /></i>
                </div>
            </div>
        </>
    )
}

export default SocialMedia

import React from 'react';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SocialMedia = () => {
    return (
        <>
            <div className="container p-0 gap-lg-4 gap-md-4 gap-2 mb-lg-0 mb-md-0 mb-4 containerIcon">
                <div className="btn fb-btn m-0 btnSocialIcon">
                    <Link to='https://www.facebook.com/profile.php?id=61551036637045' target='_blank'>
                        <i className="fa fa-facebook d-flex" id="fb">
                            <FaFacebookF />
                        </i>
                    </Link>
                </div>
                <div className="btn ig-btn m-0 btnSocialIcon">
                    <Link to='https://www.instagram.com/funkyanimehub/' target='_blank'>
                        <i className="fa fa-instagram d-flex" id="ig">
                            <FaInstagram />
                        </i>
                    </Link>
                </div>
                <div className="btn tl-btn m-0 btnSocialIcon">
                    <Link to='https://t.me/+VKVMIq55Ods3Mjg9' target='_blank'>
                        <i className="fa fa-telegram d-flex" id="tl">
                            <FaTelegramPlane />
                        </i>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SocialMedia

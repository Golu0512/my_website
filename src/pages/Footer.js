import React from 'react';
import { BiLogoGmail, BiLogoWhatsapp } from "react-icons/bi";
import UserRequirement from '../components/UserRequirement';

const Footer = () => {
    return (
        <>
            <div className='mainFooter py-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-2 col-md-2 col-12 d-grid justify-content-center'>
                            <h5 className='text-white text-capitalize'>contact us:</h5>
                            <span className='d-flex justify-content-center align-items-center'>
                                <BiLogoGmail /><p className='m-0 text-white ms-1'>asif.hell111@gmail.com</p>
                            </span>
                            <span className='d-flex align-items-center'>
                            <BiLogoWhatsapp /><p className='m-0 text-white ms-1'>8687654104</p>
                            </span>
                        </div>
                        <div className='col-lg-2 col-md-2 col-12 d-grid justify-content-center'>
                            <h5 className='text-white text-capitalize'>follow us:</h5>
                            <button className='btn px-0'>
                                <img src='/images/telegramicon.png' width='150px' height='40px' style={{objectFit: 'contain'}} />
                            </button>
                        </div>
                        <div className='col-lg-8 col-md-8 col-12 d-grid justify-content-center'>
                            <span className='text-white text-capitalize fw-bold text-center'>submit anime name, we'll provide you within 24 hours</span>
                            <div className='d-flex justify-content-center align-items-center'>
                                <UserRequirement />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

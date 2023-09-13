import React from 'react';
import SocialMedia from '../components/SocialMedia';
import UserRequirement from '../components/UserRequirement';

const Footer = () => {
    return (
        <>
            <div className='mainFooter py-4'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-2 col-md-2 col-12 d-flex align-items-center justify-content-center ps-lg-0 ps-md-5 ps-0'>
                            <div>
                                <h5 className='text-white text-capitalize'>follow us:</h5>
                                <SocialMedia />
                            </div>
                        </div>

                        <div className='col-lg-10 col-md-10 col-12 d-grid justify-content-center'>
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

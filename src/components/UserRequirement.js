import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRequirement = () => {

    const [ requirement, setRequirement ] = useState({
        movie_name:'',
        email:'',
        mobile_number:''
    });
    const notify = (message) => toast.success(message, {
        theme: "colored"
    });

    const handleChangeValue = (e) => {
        const { name, value } = e.target;
        setRequirement({...requirement, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { movie_name, email, mobile_number } = requirement;
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;        
        let response;
        if (!movie_name || !email || !mobile_number) {
            notify('Please fill all fields');
        } else if (regEx.test(email)) {
            response = await axios.post('https://my-website-api.onrender.com/user_requirement', requirement);
        } else if (!regEx.test(email) && email !== "") {
            notify("Invalid email");
        }
        if (response) {
            notify(response?.data.message);
            setRequirement({
                movie_name:'',
                email:'',
                mobile_number:''
            });
        }
    }

    return (
        <>
            <form
                className='d-lg-flex d-md-grid d-grid justify-content-center align-items-center gap-1 gap-lg-1 gap-md-1' 
                onSubmit={handleSubmit}
            >
                <input 
                    type='text' 
                    className='footerInput rounded-pill px-2 p-1' 
                    placeholder='Movie Name'
                    name='movie_name'
                    onChange={handleChangeValue}
                    value={requirement.movie_name}
                />
                <input 
                    type='text' 
                    className='footerInput rounded-pill px-2 p-1'
                    placeholder='Email Address' 
                    name='email'
                    onChange={handleChangeValue}
                    value={requirement.email}
                />
                <input 
                    type='number' 
                    className='footerInput rounded-pill px-2 p-1' 
                    placeholder='Mobile Number'
                    name='mobile_number'
                    onChange={handleChangeValue}
                    value={requirement.mobile_number}
                />
                <button 
                    type='submit'
                    className='btnFooterSubmit-btn btnFooterSubmit btn-7 text-uppercase ms-lg-3 ms-md-0 ms-0'
                >
                    <span>submit</span>
                </button>
            </form>
            <ToastContainer />
        </>
    )
}

export default UserRequirement

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchText } from '../states/reducers/index';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {

    const [ searchMovie, setSearchMovie ] = useState({search:''});
    const navigate = useNavigate();
    const notify = (message) => toast.success(message, {
        theme: "colored"
    });

    // const resetSearch = useSelector(state=> state.string.setSearchText);
    // const searchTerm = useSelector(state=> state.string)
    // const dispatch = useDispatch();

    const setSearchHandle = (e) =>{
        const {name, value} = e.target;
        setSearchMovie({...searchMovie, [name]: value});
        // dispatch(setSearchText(value))
    }

    const getSearchedData = async (e) => {
        e.preventDefault();
        if (searchMovie.search !== '') {
            try {
                notify('Please wait...')
                let result = await axios.get('https://my-website-api.onrender.com/old_movies', {
                    params: {
                        search: searchMovie.search
                    }
                });
                navigate('/searchedmovies', {state:{result: result.data}});
            } catch (error) {
                console.log(error);
            }
        } else {
            notify('Please fill movie name')
        }
    }

    return (
        <>
            <div className='header zIndex1 border-bottom sticky-top'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link to='/'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src='/images/logo.png' height='50px' />
                                <span className="navbar-brand text-capitalize logoNameEffect" >funkyanimehub</span>
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-lg-2 me-md-2 active">
                            <Link to='/'><a className="nav-link text-white" aria-current="page" >Home</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/about'><a className="nav-link text-white" >About</a></Link>
                            </li>
                        </ul>
                        <form onSubmit={getSearchedData} className="d-flex w-75 justify-content-lg-end justify-content-md-end justify-content-center px-lg-5 px-md-5 px-0">
                            <input className="form-control me-4 w-50" value={searchMovie.search} onChange={setSearchHandle} type="search" placeholder="Search" name='search' />
                            <button type='submit' className="search-button text-capitalize"><span>searching!</span><span>click</span></button>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
            <ToastContainer />
        </>
    )
}

export default Header

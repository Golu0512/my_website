import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchText } from '../states/reducers/index';

const Header = () => {
    const resetSearch = useSelector(state=> state.string.setSearchText);
    const searchTerm = useSelector(state=> state.string)
    const dispatch = useDispatch();

    const setSearchHandle = (e) =>{
        const {value} = e.target;
        dispatch(setSearchText(value))
    }

    return (
        <div className='header zIndex1 border-bottom sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/'><span className="navbar-brand text-uppercase" >omnianime</span></Link>
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
                    {/* <form className="d-flex"> */}
                        <input className="form-control me-4 w-50" value={resetSearch} onChange={setSearchHandle} type="search" placeholder="Search" aria-label="Search" />
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    {/* </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header

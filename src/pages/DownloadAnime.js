import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSearchText } from '../states/reducers/index';

const AnimeDetail = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false);
    const [ details, setDetails ] = useState([]);
    const animeId = location.state.id || 1;
    const sendId = {id:animeId}

    const getAboutMovieData = async () => {
        setLoading(true);
        try {
            const res = await axios.post('https://my-website-api.onrender.com/get_single_data', sendId);
            setDetails(res?.data)
            setLoading(false);
            dispatch(setSearchText(''))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(()=>{
        window.scroll(0,0);
        getAboutMovieData();
    },[]);

    return (
        <>
        <LoadingOverlay
            active={loading}
            spinner
            text='Loading your movies...'
        >
            <div className='downloadPage bg-dark d-flex justify-content-center'>
                <div className='container my-5'>
                    <div className='row text-white'>
                        <h2 className='px-lg-5 px-md-5 px-3 text-center'>
                            {details?.movie_name} ({details?.releasing_year}) [{details?.language}] Download | {details?.resolution}
                        </h2>
                    </div>
                    {/* <div className='row text-white mt-5'>
                        <div className='col-12'><p className='px-lg-5 px-md-5 px-3 text-center'>{details?.downloadDetails}</p></div>
                    </div> */}
                    <div className='row text-white mt-3'>
                        <div className='col-12'><p className='px-lg-5 px-md-5 px-3 text-center'><span className='text-info fw-bold'>Omnitheater.com</span> is one of the Best Websites/Platform For Anime, and Series.</p></div>
                    </div>
                    {
                        details?.banner_link != '' ?
                        <div className='row text-white d-flex justify-content-center'>
                            <img className='downloadBannerImg' src={details?.banner_link} width='400px' height='300px' />
                        </div> : ''
                    }
                    <div className='row text-white my-4 d-flex justify-content-center'>
                        <h4 className='w-75 text-center'>{details?.movie_name} ({details?.releasing_year}) [{details?.language}] Download | {details?.resolution}</h4>
                        <span className='text-center mt-4 font-bold fs-4 text-capitalize text-info'>movie information</span>
                        <span className='text-center mt-4 font-bold text-white text-capitalize text-info'>Name: {details?.movie_name}</span>
                        <span className='text-center mt-4 font-bold text-white text-capitalize text-info'>Releasing Year: {details?.releasing_year}</span>
                        <span className='text-center mt-4 font-bold text-white text-capitalize text-info'>Language: {details?.language}</span>
                        <span className='text-center mt-4 font-bold text-white text-capitalize text-info'>Resolution: {details?.resolution}</span>
                        {details?.file_size != '' ? <span className='text-center mt-4 font-bold text-white text-capitalize text-info'>Size: {details?.file_size}</span> : '' }
                        <div className='d-grid w-75'>
                            <span className='text-center mt-4 font-bold fs-4 text-capitalize text-danger'>quick story line</span>
                            <span className='text-center mt-4 font-bold text-white'>{details?.quick_story}</span>
                        </div>
                        <div className='text-center mt-4'>
                        <span className='text-center mt-4 font-bold fs-4 text-capitalize text-success'>download links</span>
                        </div>
                        <div className='w-50 mt-4 d-flex justify-content-center'>
                            {
                                details?.download_low != '' ?
                                <Link to={details?.download_low} target="_blank">
                                    <button className='btn btn-success'>download 480p</button>
                                </Link> : ''
                            }
                            {
                                details?.download_medium != '' ?
                                <Link to={details?.download_medium} target="_blank">
                                    <button className='btn btn-success mx-3'>download 720p</button>
                                </Link> : ''
                            }
                            {
                                details?.download_high != '' ?
                                <Link to={details?.download_high} target="_blank">
                                    <button className='btn btn-success'>download 1080p</button>
                                </Link> : ''
                            }
                        </div>
                        {details?.youtube_trailer != '' ?
                            <div className='w-75 mt-4 text-center'>
                                <span className='text-center font-bold fs-4 text-capitalize text-info'>movie trailer</span>
                                <div className="ratio ratio-16x9 mt-4">
                                    <iframe src={details?.youtube_trailer} title="YouTube video" allowfullscreen></iframe>
                                </div>
                            </div> : ''
                        }

                    </div>
                </div>
            </div>
        </LoadingOverlay>
        </>
    )
}

export default AnimeDetail

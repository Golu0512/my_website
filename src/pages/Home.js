import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import CarouselSlider from '../components/CarouselSlider';
import ToUpButton from '../components/ToUpButton';
import PaginationComponent from '../components/PaginationComponent';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const limit = 24;

    const searchTerm = useSelector(state=> state.string.setSearchText);
    const [ moviess, setMoviess ] = useState([]);
    const [ movies, setMovies ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();
    const [ totalMovies, setTotalMovies ] = useState(0);
    const [ activePage, setActivePage ] = useState(1);

    const getMovieData = async () => {
        setLoading(true);
        await axios.get('https://my-website-api.onrender.com/old_movies', {
            params: {
                page: activePage,
                limit: limit
            }
        })
        .then(({data}) => {
            setMovies(data?.data);
            setTotalMovies(data?.total)
        })
        .catch(err=>console.log(err))
        setLoading(false);
    };

    const filterData = (searchTerm) => {
        const filterdata = movies.filter((items)=>{
            return (
                items.movie_name?.toLowerCase().includes(searchTerm?.toLowerCase())
            );
        });
        setMoviess(filterdata)
    }

    const totalPagesCalc = (total, limit) => {
        let pages = [];
        for (let x = 1; x <= Math.ceil(total/limit); x++) {
            pages.push(x);
        }
        return pages;
    }

    // useEffect(()=>{
    //     getMovieData();
    // },[activePage])

    useEffect(()=>{ 
        getMovieData();
        // navigate('/')
    },[activePage]);

    useEffect(()=>{
        filterData(searchTerm);
        window.scroll(0,0);
    },[searchTerm])

    return (
        <>
        <LoadingOverlay
            active={loading}
            spinner
            text='Loading your movies...'
        >
            <div className='homeContainer bg-dark'>
                {!searchTerm ?
                <div className='mb-lg-2 mb-md-2 mb-2 py-3'>
                    <CarouselSlider />
                </div>
                :
                ''
                }
                <div className='container mt-2'>

                    <div className='row g-lg-3 g-md-3'>
                        <h4 className='text-white text-capitalize text-center bg-warning'>{!searchTerm ? 'latest movies' : 'searched'}</h4>
                        {!searchTerm ?
                            movies.map((val) =>{
                                return (
                                    <div className='col-lg-2 col-md-6 col-sm-6 mb-lg-4 mb-md-4 mb-4 d-flex justify-content-center' key={val._id}>
                                        <MovieCard id={val._id} image={val.cover_image} title={val.title} moviename={val.movie_name} category={val.category} />
                                    </div>
                                )
                            })
                            :
                            moviess.map((val) =>{
                                return (
                                    <div className='col-lg-2 col-md-6 col-sm-6 mb-lg-4 mb-md-4 mb-4 d-flex justify-content-center align-items-center' key={val._id}>
                                        <MovieCard id={val._id} image={val.cover_image} title={val.title} moviename={val.movie_name} category={val.category} />
                                    </div>
                                )
                            })
                        }
                    </div>

                    

                    {/* <div className='row g-lg-3 g-md-3'>
                        <h4 className='text-white text-capitalize text-center bg-warning'>{!searchTerm ? 'latest anime movies' : 'searched'}</h4>
                        {!searchTerm ?
                            movies.map((val, i) =>{
                                return (
                                    <div className='col-lg-2 col-md-6 col-sm-6 mb-lg-4 mb-md-4 mb-4 d-flex justify-content-center align-items-center' key={val.id}>
                                        <MovieCard id={val.id} image={val.image} title={val.title} category={val.category} />
                                    </div>
                                )
                            })
                            :
                            moviess.map((val, i) =>{
                                return (
                                    <div className='col-lg-2 col-md-6 col-sm-6 mb-lg-4 mb-md-4 mb-4 d-flex justify-content-center align-items-center' key={val.id}>
                                        <MovieCard id={val.id} image={val.image} title={val.title} category={val.category} />
                                    </div>
                                )
                            })
                        }
                    </div> */}

                </div>

                {/* <div className='d-flex justify-content-center my-5'>
                    <PaginationComponent total={totalMovies} limit={limit} />
                </div> */}
                {!searchTerm ?
                <div className='d-flex justify-content-center align-items-center py-5 my-lg-5 my-md-5'>
                    <ul className='text-white d-flex justify-content-center align-items-center gap-lg-3 gap-md-3 gap-2 p-0 px-2 paginationUl'>
                        {
                            activePage !== 1 && <li className='pageList' onClick={()=>setActivePage(activePage - 1)}>Previous</li>
                        }
                        {
                            totalPagesCalc(totalMovies, limit).map((val)=>{
                                return <li className={`pageList py-1 px-2 ${val === activePage ? 'activePageList' : ''}`} onClick={()=>setActivePage(val)} key={val}>{val}</li>
                            })
                        }
                        {activePage !== Math.ceil(totalMovies/limit) ? <li className='pageList' onClick={()=>setActivePage(activePage + 1)}>Next</li> : '' }
                    </ul>
                </div>
                : null 
                }
                
                
                <ToUpButton />

            </div>
        </LoadingOverlay>
        </>
    )
}

export default Home

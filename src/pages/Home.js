import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import CarouselSlider from '../components/CarouselSlider';
import ToUpButton from '../components/ToUpButton';
import PaginationComponent from '../components/PaginationComponent';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';

const Home = () => {

    const searchTerm = useSelector(state=> state.string.setSearchText);
    const [ moviess, setMoviess ] = useState([]);
    const [ movies, setMovies ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const getMovieData = async () => {
        setLoading(true);
        await axios.get('https://my-website-api.onrender.com/old_movies')
        .then((response) => setMovies(response.data))
        .catch(err=>console.log(err))
        setLoading(false);
    };

    const filterData = async (searchTerm) => {
        const filterdata = await movies.filter((items)=>{
            return (
                items.movie_name?.toLowerCase().includes(searchTerm?.toLowerCase())
            );
        });
        setMoviess(filterdata)
    }

    useEffect(()=>{ 
        getMovieData();
    },[]);

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
                                    <div className='col-lg-2 col-md-6 col-sm-6 mb-lg-4 mb-md-4 mb-4 d-flex justify-content-center align-items-center' key={val._id}>
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

                <div className='d-flex justify-content-center my-5'>
                    <PaginationComponent />
                </div>
                
                <ToUpButton />

            </div>
        </LoadingOverlay>
        </>
    )
}

export default Home

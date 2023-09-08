import React from 'react';
import MovieCard from '../components/MovieCard';
import { useLocation } from 'react-router-dom';

const SearchedMovies = () => {
    const location = useLocation();
    const movies = location.state.result.data
    return (
        <>
        <div className='homeContainer bg-dark'>
            <div className='container'>
                <div className='row g-lg-3 g-md-3 py-lg-4 py-md-4 py-3'>
                    {
                        movies.map((val) =>{
                            return (
                                <div className='col-lg-2 col-md-6 col-sm-6 mb-lg-4 mb-md-4 mb-4 d-flex justify-content-center' key={val._id}>
                                    <MovieCard id={val._id} image={val.cover_image} title={val.title} moviename={val.movie_name} category={val.category} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default SearchedMovies

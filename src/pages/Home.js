import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from '../components/MovieCard';
import CarouselSlider from '../components/CarouselSlider';
import ToUpButton from '../components/ToUpButton';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';
import { Helmet } from 'react-helmet';
import { pageNumber } from '../states/reducers';

const Home = () => {

    const limit = 24;
    LoadingOverlay.propTypes = undefined;
    const {pNumber} = useSelector(state=> state.pNumber);
    const [ movies, setMovies ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const dispatch = useDispatch();
    const [ totalMovies, setTotalMovies ] = useState(0);
    const [ activePage, setActivePage ] = useState(pNumber);

    const getMovieData = async () => {
        setLoading(true);
        await axios.get('https://funkyanimehubapi.onrender.com/old_movies', {
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

    const totalPagesCalc = (total, limit) => {
        let pages = [];
        for (let x = 1; x <= Math.ceil(total/limit); x++) {
            pages.push(x);
        }
        return pages;
    }

    useEffect(()=>{
        getMovieData();
        window.scroll(0,0);
        dispatch(pageNumber(activePage))
    },[activePage]);

    return (
        <>
        <Helmet>
            <meta charSet='utf-8' />
            <title>funkyanimehub - anime | free anime download | anime movies and series</title>
            <meta name='keywords' content='anime, movies, free download anime movies, cartoons, free movie download, anime free download, anime series' />
            <meta name='description' content='free anime movies download, all types anime movies and series downloaded here and enjoy with adds free environment' />
        </Helmet>
        <LoadingOverlay
            active={loading}
            spinner
            text='Loading your movies...'
        >
            <div className='homeContainer'>
                
                
                <div className='mb-lg-2 mb-md-2 mb-2 py-1'>
                    <CarouselSlider />
                </div>
                
                <div className='container mt-2'>

                    <div className='row g-lg-3 g-md-3'>
                        <h4 className='text-white text-capitalize text-center bg-warning'>latest movies</h4>
                        {
                            movies.map((val) =>{
                                return (
                                    <div className='col-lg-2 col-md-4 col-6 mb-lg-4 mb-md-4 mb-4 d-flex justify-content-center' key={val._id}>
                                        <MovieCard id={val._id} image={val.cover_image} moviename={val.movie_name} />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

                
                <div className='d-flex justify-content-center align-items-center py-5 my-lg-5 my-md-5'>
                    <ul className='text-white d-flex justify-content-center align-items-center gap-lg-3 gap-md-3 gap-2 p-0 px-2 paginationUl'>
                        {
                            activePage !== 1 && <li className='pageList' onClick={()=>setActivePage(activePage - 1)}>Previous</li>
                        }
                        {
                            totalPagesCalc(totalMovies, limit).slice(Math.max(0, activePage - 3), Math.min(totalMovies, activePage + 4)).map((val)=>{
                                return <li className={`pageList py-1 px-2 ${val === activePage ? 'activePageList' : ''}`} onClick={()=>setActivePage(val)} key={val}>{val}</li>
                            })
                        }
                        {activePage !== Math.ceil(totalMovies/limit) ? <li className='pageList' onClick={()=>setActivePage(activePage + 1)}>Next</li> : '' }
                    </ul>
                </div>
                
                <ToUpButton />

            </div>
        </LoadingOverlay>
        </>
    )
}

export default Home

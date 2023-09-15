import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
    } from 'mdb-react-ui-kit';

const CarouselSlider = () => {
    return (
        <>
        <MDBCarousel showIndicators showControls fade className='zIndexn0'>
            <MDBCarouselItem
                className='w-100 d-block cardImage'
                itemId={1}
                src='/images/banner1.webp'
                alt='banner1'
                
            >
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block cardImage'
                itemId={2}
                src='/images/banner2.webp'
                alt='banner2'
                
            >
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block cardImage'
                itemId={3}
                src='/images/banner3.webp'
                alt='banner13'
                
            >
            </MDBCarouselItem>
        </MDBCarousel>
        </>
    )
}

export default CarouselSlider

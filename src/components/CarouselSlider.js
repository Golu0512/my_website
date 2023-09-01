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
                src='/images/banner1.png'
                alt='...'
                
            >
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block cardImage'
                itemId={2}
                src='/images/banner2.png'
                alt='...'
                
            >
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block cardImage'
                itemId={3}
                src='/images/banner3.png'
                alt='...'
                
            >
            </MDBCarouselItem>
        </MDBCarousel>
        </>
    )
}

export default CarouselSlider

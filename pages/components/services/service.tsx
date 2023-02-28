import React, { useRef } from 'react'
import Heading from '../../common/heading';
import Card from './components/card';
import { cardData } from '../../../content/serviceData';

const Service = () => {

    const carouselRef = useRef<HTMLDivElement>(null);

    const handlePrevClick = () => {
        carouselRef.current?.scrollBy({
            left: -320,
            behavior: 'smooth'
        });
    };

    const handleNextClick = () => {
        carouselRef.current?.scrollBy({
            left: 320,
            behavior: 'smooth'
        });
    };

    return (
        <div id='services' className='service'>
            <Heading title='Services' />
            <div className='carousel-wrapper'>
                <div className='carousel' ref={carouselRef} >
                    {
                        cardData.map((item, index) => {
                            return <Card title={item.title} img={item.img} key={index} />
                        })
                    }
                </div>
                <div>
                    <button onClick={handlePrevClick} className='prev'>
                        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                        </svg>
                    </button>
                    <button onClick={handleNextClick} className='next'>
                        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Service
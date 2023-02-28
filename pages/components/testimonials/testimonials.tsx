import React, { useState, useEffect, useRef } from 'react';
import Heading from '../../common/heading';
import TestCard from './components/testCard';
import { data } from '../../../content/testimonialData';


const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === data.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.scrollTo({
                left: container.clientWidth * activeIndex,
                behavior: 'smooth',
            });
        }
    }, [activeIndex]);

    return (
        <div id='testimonials' className="testimonial">
            <Heading title="Testimonials" />
            <div className="testimonials-slider" ref={containerRef}>
                {data.map((itm, ind) => (
                    <div
                        key={ind}
                        className={`black_background`}
                    >
                        <TestCard para={itm.para} name={itm.name} image={itm.img} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

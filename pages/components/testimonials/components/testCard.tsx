import React from 'react';
import { UseSizeContext } from '../../../../context/size_contex';

interface TestCardProp {
    para: string;
    image: any;
    name: string;
}

const TestCard = ({ para, image, name }: TestCardProp) => {
    const { width } = UseSizeContext();
    return (
        <div className='test-card'>
            <div className='test-name-section'>
                <p>{para}</p>
                {width > 820 ? <span>{name}</span> : <></>}
            </div>
            <div className='test-image-section'>
                <img src={image} className='img' alt='hi' />
                {width <= 820 ? <span>{name}</span> : <></>}
            </div>
        </div>
    )
}

export default TestCard
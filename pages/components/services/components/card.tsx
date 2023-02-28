import React from 'react';

interface CardProp {
    title: string;
    img: any;
}

const Card = ({ title, img }: CardProp) => {
    return (
        <div className='card'>
            <img className='img' src={img} alt='card' />
            <h2 className='title'>{title}</h2>
        </div>
    )
}

export default Card
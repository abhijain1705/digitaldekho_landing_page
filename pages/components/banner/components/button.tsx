import React from 'react';

interface ButtonProp {
    title: string;
    place: number
}

const Button = ({ title, place }: ButtonProp) => {
    return (
        <button className={`${place === 1 ? 'btn-start' : 'btn-service'}`}>
            <a href={place === 1 ? '/components/form/form' : '#services'} >{title}</a>
        </button>
    )
}

export default Button
import React from 'react';

interface HeadingProp {
    title: string;
}

const Heading = ({ title }: HeadingProp) => {
    return (
        <h1>{title}</h1>
    )
}

export default Heading
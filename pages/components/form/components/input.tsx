import React from 'react';

interface InputProp {
    placeholder: string;
    value: string;
    onChange: (value: any) => void
}

const Input = ({ placeholder, value, onChange }: InputProp) => {
    return (
        <input autoComplete='none' value={value} onChange={(e) => onChange(e.target.value)} className='input' type={'text'} placeholder={placeholder} />
    )
}

export default Input
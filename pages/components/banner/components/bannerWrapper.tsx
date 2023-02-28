import React from 'react'
import Button from './button'

const BannerWrapper = () => {
    return (
        <div className='banner-content-wrapper'>
            <h1>We provide <p>solutions</p> for your business!</h1>
            <div className='button-wrapper'>
                <Button title='Get Started' place={1} />
                <Button title='Our Services' place={2} />
            </div>
        </div>
    )
}

export default BannerWrapper
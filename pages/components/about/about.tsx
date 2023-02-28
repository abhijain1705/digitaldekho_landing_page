import React from 'react';
import { UseSizeContext } from '../../../context/size_contex';
import Heading from '../../common/heading';
import ImageComponent from './components/image';

const About = () => {

    const { width } = UseSizeContext();

    return (
        <div id='aboutus' className='about'>
            <Heading title='About' />
            <p>Welcome to our Dikho-Digital! At our company, we are dedicated to providing innovative and effective digital marketing solutions for businesses of all sizes. Our team is made up of experienced professionals who are passionate about helping our clients succeed in the digital world.</p>
            <div className='about-content-wrapper'>
                <div className='about-text-wrapper'>
                    <p>Dikho-Digital offers a wide range of digital marketing services including search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, email marketing, content marketing, and more. We use the latest tools and strategies to ensure that our clients receive the best possible results.</p>
                    <p>We understand that each business is unique, and therefore, we tailor our strategies to fit the specific needs of our clients. We work closely with our clients to understand their goals, target audience, and industry, allowing us to create customized solutions that drive results.</p>
                    {width <= 1000 ? <ImageComponent /> : <></>}
                    <p>At Dikho-Digital, we believe in transparency and communication. We provide regular updates and reports to our clients, so they are always aware of their campaign performance. We also encourage our clients to ask questions and provide feedback, as we value their input and strive to continually improve our services.</p>
                    <p>Our agency mission is to help businesses grow and thrive in the digital world. We are committed to delivering exceptional service and results to our clients, and we are dedicated to staying ahead of the curve when it comes to digital marketing trends and techniques.</p>
                    <p>Thank you for considering our agency for your digital marketing needs. We look forward to working with you and helping your business succeed!</p>
                </div>
                {width > 1000 ? <ImageComponent /> : <></>}
            </div>
        </div>
    )
}

export default About;
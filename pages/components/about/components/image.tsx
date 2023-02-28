import { motion } from 'framer-motion'
import React from 'react';

const ImageComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, translateX: 200 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}>
            <img className='about-img' src={'/assets/images/about.png'} alt='about' />
        </motion.div>
    )
}

export default ImageComponent
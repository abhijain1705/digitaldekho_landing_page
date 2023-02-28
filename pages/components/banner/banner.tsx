import React from 'react';
import Curve from './components/curve';
import BannerWrapper from './components/bannerWrapper';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div id='home' className='banner'>
      <div className='banner-content'>
        <motion.div initial={{ opacity: 0, translateX: -200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}>
          <BannerWrapper />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
        >
          <img className='banner-img' src={'/assets/images/banner.png'} alt='banner' />
        </motion.div>
      </div>
      <Curve />
    </div>
  )
}

export default Banner
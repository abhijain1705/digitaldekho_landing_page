import type { NextPage } from 'next'
import Head from 'next/head'
import SizeContextProvider from '../context/size_context_provider';
import About from './components/about/about';
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar'
import Service from './components/services/service';
import TestMonials from './components/testimonials/testimonials';


const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Digital Dekho</title>
        <meta name="description" content="Digital Dekho is a digital marketing agency providing services of various fields, social media marketing, app development, website development, website design, app design, graphic design, animation, video editing and making, google reviews and ratings" />
        <meta name="keywords" content="social media marketing, app development, website development, website design, app design, graphic design, animation, video editing and making, google reviews and ratings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SizeContextProvider>
        <main className='main'>
          <Navbar />
          <Banner />
          <About />
          <Service />
          <TestMonials />
          <Footer />
        </main>
      </SizeContextProvider>
      <footer>

      </footer>
    </div>
  )
}

export default Home

import React, { useEffect } from 'react';
import banner from '../assets/image_downloader_1692703881115.png';
import Social from './Social';
import ScrollReveal from 'scrollreveal';


function Hero() {
  const brands = ['Code.', 'Brand.', 'Crack.']; 
  useEffect(() => {
    // Initialize ScrollReveal with your desired configuration
    ScrollReveal().reveal('.container', {
      delay: 200,
      distance: '20px',
      duration: 1000,
      easing: 'ease-in',
      origin: 'top',
    });

    // Clean up ScrollReveal when the component unmounts
    return () => {
      ScrollReveal().destroy();
    };
  }, []); // The empty array as the second argument ensures that this effect runs only once, similar to componentDidMount 
  return (
    <>
        <div name='home' className='container w-full flex flex-col justify-between pt-20'>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 max-w-[1240px] m-auto'>
                <div>
                    <img className='w-full' src={banner} alt="/" />
                </div>
                <div className='flex flex-col justify-center items-center md:items-center lg:items-start w-full px-2 py-8'>
                    <div className="brand justify-between flex gap-3 md:text-center">
                        {
                            brands.map((brand) => {
                                return (
                                    <h2 className='text-[2.5rem] sm:text-[3rem] md:text-[5rem] lg:text-[4.2rem]  bg-gradient-to-b from-brandText to-[#D7CEA5] bg-clip-text text-transparent font-extrabold '>{brand}</h2>
                                )
                            })
                        }
                    </div>
                    <div className="soon md:text-center md:px-3 lg:px-0">
                        <h2 className='text-[1.9rem] md:text-[2.5rem] lg:text-[2.7rem] text-[#e7d99b] font-extrabold '>Coming Sooooon !</h2>
                    </div>
                    <div className='px-3 md:px-10 lg:px-0 text-center md:text-center lg:text-left'>              
                        <p className='soon text-[#D7CEA5] leading-8'>Please visit our social platform and become a part of the codemarch family!</p>                      
                    </div>
                    <div className="social-media">                        
                        <Social/>                      
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Hero
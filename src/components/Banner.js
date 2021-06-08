import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Banner() {
    return (
        <div className='relative'>
            {/* relative cause we're gonna have something absolutely 
            positioned inside of this container
            we have to make the container reltive otherwise it's 
            gonna fly to the top of the screen  */}

            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
            <Carousel
                autoPlay
                infiniteLoop
                ahowStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loasing="lazy" src="https://links.papareact.com/gi1" alt="" />
                </div>

                <div>
                    <img loasing="lazy" src="https://links.papareact.com/6ff" alt="" />
                </div>

                <div>
                    <img loasing="lazy" src="https://links.papareact.com/7ma" alt="" />
                </div>

            </Carousel>
        </div>
    )
}

export default Banner

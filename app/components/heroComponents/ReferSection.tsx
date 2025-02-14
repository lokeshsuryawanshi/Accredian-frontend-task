import React from 'react';
import Image from 'next/image';
import referheroimage from '../../../public/refer-hero-image.png'
import money from '../../../public/money.png'
import ReferButton from '../referbutton';

const ReferHero = () => {
    return (
        <div className="w-full px-4 md:px-8 py-12 relative overflow-hidden bg-blue-500 bg-opacity-10 shadow-lg rounded-3xl">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between relative">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 z-10 pl-4">
                        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6">
                            Let&apos;s Learn<br />& Earn
                        </h1>
                        <p className="text-3xl text-gray-800 mb-8">
                            Get a chance to win  <br /> up-to{' '}
                            <span className="text-blue-500 font-semibold">Rs. 15,000</span>
                        </p>
                        <ReferButton />

                    </div>

                    {/* Right Content - Mobile App Preview */}
                    <div className="w-full md:w-1/2 mt-12 md:mt-0 relative ">
                        <div className="absolute top-0 left-1/4 w-20 h-20 -rotate-90">
                            <Image src={money} alt='money' />
                        </div>
                        <div className="absolute top-1/4 right-0  lg:w-20 lg:h-20 w-12 h-12 rotate-180">
                            <Image src={money} alt='money' />
                        </div>
                        <div className="absolute bottom-1/4 left-0 w-12 h-12 lg:w-20 lg:h-20 z-10">
                            <Image src={money} alt='money' />
                        </div>
                        {/* <div className="absolute bottom-[130px] right-0  w-12 h-12 lg:w-20 lg:h-20 rotate-180">
              <Image src={money} alt='money'/>
            </div> */}
                        {/* <div className="absolute top-1/2 right-1/4 w-12 h-12 lg:w-20 lg:h-20">
              <Image src={money} alt='money'/>
            </div> */}

                        {/* Phone with people image */}
                        <div className="relative z-0 flex justify-center">
                            <div className="relative w-full max-w-md">

                                <Image
                                    src={referheroimage}
                                    alt="Students using Accredian app"
                                    width={600}
                                    height={800}
                                    className="w-full h-auto -z-0"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferHero;
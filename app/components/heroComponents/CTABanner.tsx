import React from 'react';

const CTABanner = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="relative bg-blue-600 bg-opacity-90 rounded-2xl px-6 py-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute -right-12 -bottom-10 h-full w-1/2 hidden lg:block">
                    <svg width="396" height="188" viewBox="0 0 632 316" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M315.805 631.609C490.219 631.609 631.609 490.219 631.609 315.805C631.609 141.391 490.219 0 315.805 0C141.391 0 0 141.391 0 315.805C0 490.219 141.391 631.609 315.805 631.609Z" fill="#237CF2" />
                        <path d="M317.817 575.287C460.014 575.287 575.288 460.013 575.288 317.816C575.288 175.619 460.014 60.3447 317.817 60.3447C175.619 60.3447 60.3457 175.619 60.3457 317.816C60.3457 460.013 175.619 575.287 317.817 575.287Z" fill="#3289FC" />
                        <path d="M315.805 502.873C419.121 502.873 502.874 419.12 502.874 315.804C502.874 212.489 419.121 128.735 315.805 128.735C212.49 128.735 128.736 212.489 128.736 315.804C128.736 419.12 212.49 502.873 315.805 502.873Z" fill="#4696FF" />
                    </svg>

                </div>

                {/* Content */}
                <div className="relative flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                        {/* Headphone Icon */}
                        <div className="bg-white p-3 rounded-xl ">
                            <svg
                                className="w-8 h-8 text-blue-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                            </svg>
                        </div>

                        <div className="text-white">
                            <h2 className="text-xl md:text-2xl font-semibold mb-1">
                                Want to delve deeper into the program?
                            </h2>
                            <p className="text-sm md:text-base text-blue-50">
                                Share your details to receive expert insights from our program team!
                            </p>
                        </div>
                    </div>

                    <button className="whitespace-nowrap px-6 py-3 lg:mt-0 mt-10 bg-white text-blue-500 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                        Get in touch
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CTABanner;
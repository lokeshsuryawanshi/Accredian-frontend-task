import React from 'react';
import ReferButton from '../referbutton';

const ReferralFlow = () => {
    const steps = [
        {
            icon: (
                <svg className='md:w-10 md:h-10 w-6 h-6' viewBox="0 0 88 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.1156 39.9094H19.2844C8.62812 39.9094 0 48.5376 0 59.1938C0 63.4907 3.47188 66.9625 7.76875 66.9625H51.6312C55.9281 66.9625 59.4 63.4907 59.4 59.1938C59.4 48.5376 50.7719 39.9094 40.1156 39.9094Z" fill="#1A73E8" />
                    <path d="M29.7 34.4094C39.2019 34.4094 46.9047 26.7066 46.9047 17.2047C46.9047 7.7028 39.2019 0 29.7 0C20.1981 0 12.4953 7.7028 12.4953 17.2047C12.4953 26.7066 20.1981 34.4094 29.7 34.4094Z" fill="#1A73E8" />
                    <path d="M82.5688 19.5765H75.5219V12.5296C75.5219 9.52183 73.0985 7.09839 70.0906 7.09839C67.0828 7.09839 64.6594 9.52183 64.6594 12.5296V19.5765H57.6125C54.6219 19.5765 52.1813 22 52.1813 25.0078C52.1813 27.9984 54.6047 30.439 57.6125 30.439H64.6594V37.4859C64.6594 40.4765 67.0828 42.9171 70.0906 42.9171C73.0813 42.9171 75.5219 40.4937 75.5219 37.4859V30.439H82.5688C85.5766 30.439 88 28.0156 88 25.0078C88 22.0171 85.5766 19.5765 82.5688 19.5765Z" fill="#1A73E8" />
                </svg>
            ),
            description: "Submit referrals easily via our website's referral section"
        },
        {
            icon: (
                <svg className='md:w-10 md:h-10 w-6 h-6' viewBox="0 0 66 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.4987 12.5486H18.8049C16.839 12.5486 15.2437 10.9533 15.2437 8.98737V3.56126C15.2437 1.59535 16.839 0 18.8049 0H39.4987C41.4646 0 43.06 1.59535 43.06 3.56126V8.98737C43.06 10.9557 41.4646 12.5486 39.4987 12.5486Z" fill="#1A73E8" />
                    <path d="M63.4289 38.476C61.2151 36.2622 57.6057 36.2622 55.392 38.476L52.7643 41.1181L60.8061 49.1574L63.4289 46.5345C65.6667 44.2991 65.6667 40.7138 63.4289 38.476Z" fill="#1A73E8" />
                    <path d="M50.2186 43.6736L36.1901 57.678C35.9014 57.9908 35.7089 58.3758 35.6367 58.7849L34.5779 65.0171C34.3373 66.3886 35.5404 67.5677 36.912 67.3511L43.1442 66.2924C43.5533 66.2202 43.9383 66.0277 44.227 65.739L58.2555 51.7105L50.2186 43.6736Z" fill="#1A73E8" />
                    <path d="M49.6651 6.28015H46.6693V8.98719C46.6693 12.9407 43.4522 16.1578 39.4987 16.1578H18.8049C14.849 16.1578 11.6342 12.9407 11.6342 8.98719V6.28015H8.59033C3.85001 6.28015 0 10.1302 0 14.8705V58.7847C0 63.525 3.85001 67.375 8.59033 67.375H31.3463C30.9806 66.4342 30.8434 65.4139 31.0215 64.3961L32.0778 58.1807C32.2655 57.0786 32.7708 56.0608 33.5312 55.2306L48.847 39.9365L52.8294 35.9324C54.3092 34.4502 56.2077 33.5719 58.2507 33.3193V14.8945C58.2555 10.1061 54.4295 6.28015 49.6651 6.28015ZM25.4053 41.9722H14.9645C13.7686 41.9722 12.7989 41.0024 12.7989 39.8065C12.7989 38.6106 13.7686 37.6409 14.9645 37.6409H25.4053C26.6012 37.6409 27.5709 38.6106 27.5709 39.8065C27.5709 41.0024 26.6012 41.9722 25.4053 41.9722ZM38.1873 29.681H14.9669C13.771 29.681 12.8013 28.7113 12.8013 27.5154C12.8013 26.3195 13.771 25.3497 14.9669 25.3497H38.1873C39.3832 25.3497 40.3529 26.3195 40.3529 27.5154C40.3529 28.7113 39.3832 29.681 38.1873 29.681Z" fill="#1A73E8" />
                </svg>
            ),
            description: "Earn rewards once your referral joins an Accordion program"
        },
        {
            icon: (
                <svg className='md:w-10 md:h-10 w-6 h-6' viewBox="0 0 65 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.6552 44.1594V38.8025C24.6552 36.5724 22.8397 34.7568 20.6095 34.7568H4.04569C1.81552 34.7568 0 36.5724 0 38.8025V44.1594C0 46.3896 1.81552 48.2051 4.04569 48.2051H20.6095C22.8397 48.2051 24.6552 46.3896 24.6552 44.1594ZM15.6897 44.843C13.8405 44.843 12.3276 43.3301 12.3276 41.481C12.3276 39.6318 13.8405 38.1189 15.6897 38.1189C17.5388 38.1189 19.0517 39.6318 19.0517 41.481C19.0517 43.3301 17.5388 44.843 15.6897 44.843Z" fill="#1A73E8" />
                    <path d="M6.72412 20.8377V32.5153H22.1112C24.7448 32.5153 26.8965 34.936 26.8965 37.9058V45.0446C26.8965 48.0144 24.756 50.4351 22.1112 50.4351H6.72412V62.1127C6.72412 64.9481 9.02153 67.2455 11.8569 67.2455H59.8672C62.7026 67.2455 65 64.9481 65 62.1127V20.8377C65 18.0024 62.7026 15.705 59.8672 15.705H11.8569C9.02153 15.705 6.72412 18.0024 6.72412 20.8377Z" fill="#1A73E8" />
                    <path d="M32.2198 11.5808L31.2672 8.38684C30.5836 8.6446 30.1465 9.04805 29.9784 9.37305C29.9112 9.49632 29.844 9.68684 29.8888 9.85494L30.2586 11.1101C30.3819 11.536 31.256 11.8162 32.2198 11.592V11.5808Z" fill="#1A73E8" />
                    <path d="M35.0216 13.1052L35.1337 13.4638H36.9268C36.6914 13.1052 35.8957 12.9034 35.0216 13.1052Z" fill="#1A73E8" />
                    <path d="M39.4706 1.48351C36.5793 -0.0854523 33.2396 -0.421659 30.0793 0.530927C26.9301 1.48351 24.3301 3.60162 22.7612 6.493C21.5956 8.65593 21.1137 11.0654 21.3379 13.4637H29.631C28.9025 13.0939 28.3422 12.5223 28.1068 11.749L27.737 10.4939C27.5241 9.79903 27.6137 9.01455 27.9948 8.30851C28.4991 7.36713 29.4517 6.63869 30.6172 6.23524L29.9672 4.07231L32.1189 3.43351L32.7577 5.57403L35.9741 4.59903L36.6129 6.75075L33.3965 7.72575L34.3715 10.9533C36.5456 10.393 38.6077 11.2223 39.1232 12.9258L39.2801 13.4525H45.881C46.0267 11.8947 45.881 10.3033 45.4215 8.79041C44.4689 5.64127 42.3508 3.04127 39.4594 1.47231L39.4706 1.48351Z" fill="#1A73E8" />
                    <path d="M61.7837 13.4638C62.1199 13.4638 62.4337 13.5087 62.7587 13.5647V11.3121C62.7587 8.90264 61.0553 6.95264 58.9484 6.95264H46.8337C47.1139 7.55781 47.3717 8.1854 47.5734 8.8354C48.0329 10.3483 48.2234 11.9061 48.1674 13.4638H61.7949H61.7837Z" fill="#1A73E8" />
                    <path d="M20.4078 6.94102H12.4733C10.3776 6.94102 8.96558 8.5436 8.96558 10.9531V13.5531C9.27937 13.4971 9.60437 13.4522 9.94058 13.4522H19.0742C18.9957 11.2221 19.444 9.00309 20.4078 6.92981V6.94102Z" fill="#1A73E8" />
                </svg>
            ),
            description: "Referrer receives a bonus 30 days after program enrollment"
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 ">
            <h1 className="text-2xl font-bold text-center lg:mb-16 ">
                How Do I <span className="text-blue-500">Refer?</span>
            </h1>

            <div className="relative w-full">
                {/* Container for background and content */}
                <div className="relative md:h-[300px] h-[600px]">
                    {/* Background Image Container */}
                    <div className="absolute inset-0">
                        <img
                            src="/flow-bg.png"
                            alt=""
                            className="w-full h-full object-contain scale-150 lg:scale-125 md:rotate-0 rotate-90 transition-transform duration-300"
                        />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex md:flex-row flex-col items-center justify-center">
                        <div className="flex md:flex-row flex-col md:gap-32 gap-16 items-center">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center -space-y-5 md:space-y-0"
                                >
                                    <div className="mb-4 text-blue-500">
                                        {step.icon}
                                    </div>
                                    <p className="text-gray-600 md:max-w-[170px] max-w-[80px]  md:text-sm text-[10px]">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-16">
                <ReferButton/>
            </div>
        </div>
    );
};

export default ReferralFlow;
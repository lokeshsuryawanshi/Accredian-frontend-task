import React, { useState, useEffect } from 'react';
import ReferHero from './heroComponents/ReferSection';
import ReferralFlow from './heroComponents/ReferSection2';
import ReferralBenefits from './heroComponents/BenefitsSection';
import FAQComponent from './heroComponents/FaqSection';
import CTABanner from './heroComponents/CTABanner';

const ScrollNavigation = () => {
    const [activeTab, setActiveTab] = useState('refer');

    // Update active tab based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['refer', 'benefits', 'faqs', 'support'];
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveTab(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
            setActiveTab(sectionId);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-white font-sans">
                {/* Fixed Navigation */}
                <div className="sticky top-0 bg-white z-20 flex justify-center pb-6">
                    <div className="text-sm font-medium text-center text-gray-600 bg-blue-500 rounded-full bg-opacity-20 max-w-fit mt-4">
                        <ul className="flex flex-wrap justify-center -mb-px lg:space-x-16 lg:px-10 ">
                            {[
                                { id: 'refer', label: 'Refer' },
                                { id: 'benefits', label: 'Benefits' },
                                { id: 'faqs', label: 'FAQs' },
                                { id: 'support', label: 'Support' }
                            ].map(({ id, label }) => (
                                <li key={id} className="me-2">
                                    <button
                                        onClick={() => scrollToSection(id)}
                                        className={`inline-block p-4 border-b-2 border-x-0 rounded-t-lg transition-colors ${activeTab === id
                                            ? 'text-blue-600 border-blue-600 border-spacing-x-1'
                                            : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                                            }`}
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="mx-auto px-4 text-gray-700 ">
                    {/* Refer Section */}
                    <section id="refer" className="py-8">
                        <div className='max-w-4xl mx-auto'>
                            <ReferHero />
                        </div>
                        <div className=' bg-blue-500 bg-opacity-10 mt-10'>
                            <ReferralFlow />
                        </div>
                    </section>
                    {/* Benefits Section */}
                    <section id="benefits" className="py-5 max-w-4xl mx-auto">
                        <ReferralBenefits />
                    </section>
                    {/* FAQs Section */}
                    <section id="faqs" className="py-16 max-w-4xl mx-auto">
                        <FAQComponent />
                        <CTABanner />
                    </section>
                  
                </div>
            </div>
        </>
    );
};

export default ScrollNavigation;







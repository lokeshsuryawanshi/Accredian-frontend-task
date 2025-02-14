import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const programsList = [
    "Data Science & AI",
    "Product Management",
    "Business Analytics",
    "Digital Transformation",
    "Business Management",
    "Project Management",
    "Strategy & Leadership",
    "Senior Management",
    "Fintech"
];

const Footer = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <footer className="bg-[#1C1C1C] text-white px-4 md:px-8 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="flex justify-between items-start mb-8">
                    <div className='flex flex-col space-y-[-4px]'>
                        <Link href="/" className="flex items-center text-white font-extrabold text-3xl"> accredian
                        </Link>
                        <p className='text-white font-thin text-xs pl-1'>credentials that matters</p>
                    </div>
                    <div className="pr-60">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                            Schedule 1-on-1 Call Now
                        </button>
                        <p className="text-sm mt-2 text-gray-300 text-center">Speak with our Learning Advisor</p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-[30%_40%_30%] gap-5 border-t pt-10">
                    {/* Programs Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Programs</h3>
                        <div className="space-y-3">
                            {programsList.map((program) => (
                                <div
                                    key={program}
                                    className="flex justify-between items-center cursor-pointer hover:text-gray-300"
                                    onClick={() => toggleSection(program)}
                                >
                                    <span>{program}</span>
                                    {expandedSection === program ?
                                        <ChevronUp size={20} /> :
                                        <ChevronDown size={20} />
                                    }
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3 text-gray-300 text-sm">
                            <p>Email us (For Data Science Queries): admissions@accredian.com</p>
                            <p>Email us (For Product Management Queries):pm@accredian.com</p>
                            <p>Data Science Admission Helpline:+91 9079653292 (9 AM- 7 PM)</p>
                            <p>Product Management Admission Helpline:+91 9625811095</p>
                            <p>Enrolled Student Helpline: +91 7969322507</p>
                            <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
                        </div>
                        <h3 className="text-lg font-semibold mt-6 mb-4">Why Accredian</h3>
                        <h3 className="text-lg font-semibold mt-6 mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-blue-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-blue-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-blue-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-blue-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-blue-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Accredian Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Accredian</h3>
                        <div className="space-y-2">
                            <p className="hover:text-gray-300 cursor-pointer">About</p>
                            <p className="hover:text-gray-300 cursor-pointer">Career</p>
                            <p className="hover:text-gray-300 cursor-pointer">Blog</p>
                            <p className="hover:text-gray-300 cursor-pointer">Admission Policy</p>
                            <p className="hover:text-gray-300 cursor-pointer">Referral Policy</p>
                            <p className="hover:text-gray-300 cursor-pointer">Privacy Policy</p>
                            <p className="hover:text-gray-300 cursor-pointer">Terms Of Service</p>
                            <p className="hover:text-gray-300 cursor-pointer">Master FAQs</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 border-gray-700 text-sm text-gray-400">
                    © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
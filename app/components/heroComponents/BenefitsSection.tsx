import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import ReferButton from '../referbutton';

type Program = {
    name: string;
    referrerBonus: number;
    refereeBonus: number;
};

type Category = {
    name: string;
    programs: Program[];
};

const categories: Category[] = [
    {
        name: "PRODUCT MANAGEMENT",
        programs: [
            {
                name: "Professional Certificate Program in Product Management",
                referrerBonus: 7000,
                refereeBonus: 9000
            },
            {
                name: "PG Certificate Program in Strategic Product Management",
                referrerBonus: 9000,
                refereeBonus: 11000
            },
            {
                name: "Executive Program in Data Driven Product Management",
                referrerBonus: 10000,
                refereeBonus: 10000
            },
            {
                name: "Executive Program in Product Management and Digital Transformation",
                referrerBonus: 10000,
                refereeBonus: 10000
            },
            {
                name: "Executive Program in Product Management",
                referrerBonus: 10000,
                refereeBonus: 10000
            },
            {
                name: "Advanced Certification in Product Management",
                referrerBonus: 10000,
                refereeBonus: 10000
            },
            {
                name: "Executive Program in Product Management and Project Management",
                referrerBonus: 10000,
                refereeBonus: 10000
            }
        ]
    },
    {
        name: "STRATEGY & LEADERSHIP",
        programs: [
            {
                name: "Strategic Leadership Certificate",
                referrerBonus: 8000,
                refereeBonus: 9000
            },
            {
                name: "Executive Leadership Program",
                referrerBonus: 9000,
                refereeBonus: 10000
            }
        ]
    },
    // Add dummy data for other categories
    {
        name: "BUSINESS MANAGEMENT",
        programs: [
            {
                name: "Business Administration Certificate",
                referrerBonus: 7500,
                refereeBonus: 8500
            }
        ]
    },
    {
        name: "FINTECH",
        programs: [
            {
                name: "Financial Technology Fundamentals",
                referrerBonus: 8000,
                refereeBonus: 9000
            }
        ]
    },
    {
        name: "SENIOR MANAGEMENT",
        programs: [
            {
                name: "Executive Management Program",
                referrerBonus: 12000,
                refereeBonus: 13000
            }
        ]
    },
    {
        name: "DATA SCIENCE",
        programs: [
            {
                name: "Data Science Certification",
                referrerBonus: 9000,
                refereeBonus: 10000
            }
        ]
    },
    {
        name: "DIGITAL TRANSFORMATION",
        programs: [
            {
                name: "Digital Business Transformation",
                referrerBonus: 8500,
                refereeBonus: 9500
            }
        ]
    },
    {
        name: "BUSINESS ANALYTICS",
        programs: [
            {
                name: "Business Analytics Foundation",
                referrerBonus: 7500,
                refereeBonus: 8500
            }
        ]
    }
];

const ReferralBenefits = () => {
    const [activeCategory, setActiveCategory] = useState("PRODUCT MANAGEMENT");
    const [isEnrolled, setIsEnrolled] = useState(true);

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold mx-auto">
                    What Are The <span className="text-blue-500">Referral Benefits</span>?</h1>
            </div>
            <div className="flex items-center gap-2 justify-end py-4 pr-2">
                <span className="text-sm">Enrolled</span>
                <button
                    onClick={() => setIsEnrolled(!isEnrolled)}
                    className={` w-12 h-6 rounded-full p-1 transition-colors duration-200 ${isEnrolled ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                >
                    <div
                        className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${isEnrolled ? 'translate-x-6' : 'translate-x-0'
                            }`}
                    />
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Sidebar */}
                <div className="w-full md:w-64 space-y-1 text-gray-500 ">
                    <button className="w-full px-4 py-2 text-left bg-blue-600 text-white rounded-lg flex justify-between items-center">
                        ALL PROGRAMS
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => setActiveCategory(category.name)}
                            className={`w-full px-4 py-5 text-left text-sm font-semibold flex justify-between items-center ${activeCategory === category.name
                                ? 'bg-blue-50 text-blue-500'
                                : 'hover:bg-gray-50'
                                }`}
                        >
                            {category.name}
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="bg-blue-500 bg-opacity-5 rounded-2xl overflow-x-auto shadow-xl">
                        <table className="w-full min-w-[600px]">
                            <thead className="bg-[#1A73E8] bg-opacity-40">
                                <tr className="border-b border-blue-100 text-[#1350A0]">
                                    <th className="px-4 text-left ">Programs</th>
                                    <th className="py-2 px-4 border-l-2 border-gray-400">Referee Bonus</th>
                                    <th className="py-2 px-4 border-l-2 border-gray-400">Referrer Bonus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories
                                    .find((cat) => cat.name === activeCategory)
                                    ?.programs.map((program, index) => (
                                        <tr
                                            key={index}
                                            className="last:border-none"
                                        >
                                            <td className="p-4 flex items-center gap-2">
                                                <span className="text-blue-500 pr-1"><svg width="20" height="15" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0235 12.0904L11.4957 11.8926L6.01172 9.83594V11.9882C6.01172 13.6483 8.7032 14.9941 12.0235 14.9941C15.3438 14.9941 18.0353 13.6483 18.0353 11.9882V9.83594L12.5514 11.8926L12.0235 12.0904Z" fill="url(#paint0_linear_1201_324)" />
                                                    <path d="M22.5443 6.53999L23.7093 6.10313C23.9125 6.02689 24.0472 5.83255 24.0472 5.61544V4.83439C24.0472 4.61727 23.9125 4.42293 23.7093 4.3467L12.2065 0.0331629C12.0886 -0.0110543 11.9586 -0.0110543 11.8407 0.0331629L0.337968 4.3467C0.134678 4.42293 0 4.61727 0 4.83439V5.61544C0 5.83255 0.134678 6.02689 0.337968 6.10313L12.0236 10.4852L21.0413 7.1036V8.70875V11.4453C20.594 11.7056 20.2898 12.1848 20.2898 12.7397C20.2898 13.2946 20.594 13.7737 21.0413 14.034L19.7068 16.8882C19.594 17.1295 19.6802 17.4173 19.908 17.5555C20.3643 17.8323 21.0512 18 21.7928 18C22.5344 18 23.2213 17.8323 23.6776 17.5555C23.9054 17.4173 23.9916 17.1295 23.8788 16.8882L22.5443 14.034C22.9916 13.7737 23.2958 13.2946 23.2958 12.7397C23.2958 12.1848 22.9916 11.7056 22.5443 11.4453V8.14515V6.53999Z" fill="url(#paint1_linear_1201_324)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_1201_324" x1="-2.35216" y1="-3.50636" x2="24.0881" y2="23.6511" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0.184358" stopColor="#29ABE2" />
                                                            <stop offset="0.821198" stopColor="#6200D2" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_1201_324" x1="0.664209" y1="-6.44287" x2="27.1043" y2="20.7148" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0.184358" stopColor="#29ABE2" />
                                                            <stop offset="0.821198" stopColor="#6200D2" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                </span>
                                                {program.name}
                                            </td>
                                            <td className="px-7 border-l-2 border-gray-400">₹ {program.referrerBonus}</td>
                                            <td className="px-7 border-l-2 border-gray-400">₹ {program.refereeBonus}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 border border-gray-300 px-4 py-2 rounded-xl">
                            Show More <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <ReferButton/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReferralBenefits;
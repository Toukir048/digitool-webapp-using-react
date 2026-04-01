import React from 'react';
import icon01 from '../../assets/user.png';
import icon02 from '../../assets/package.png';
import icon03 from '../../assets/rocket.png';

const process = [
    {
        number: "01",
        icon: icon01,
        title: "Create Account",
        description:
            "Sign up for free in seconds. No credit card required to get started.",
    },
    {
        number: "02",
        icon: icon02,
        title: "Choose Products",
        description:
            "Browse our catalog and select the tools that fit your needs.",
    },
    {
        number: "03",
        icon: icon03,
        title: "Start Creating",
        description:
            "Download and start using your premium tools immediately.",
    },
];

const Process = () => {
    return (
        <section id="process" className="bg-gray-50 py-16 lg:py-24">
            <div className="w-full mx-auto px-6 lg:px-20">
                <div className="text-center mb-14">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-sm text-gray-500 mt-3">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mx-10 md:gap-0">
                    {process.map((pro, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center text-center bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-95 w-95 mx-auto justify-center"
                        >
                            <span className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full text-xs font-bold text-white bg-gradient-to-l from-[#9514FA] to-[#4F39F6]">
                                {pro.number}
                            </span>

                            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                                <img src={pro.icon} alt="icon" className="w-9 h-9 object-contain" />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900">
                                {pro.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-2 leading-relaxed max-w-xs">
                                {pro.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
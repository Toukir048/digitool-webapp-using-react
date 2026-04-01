import React from 'react';
import bannerImg from "../../assets/banner.png";
import circleIcon from "../../assets/circle.png";
import playBtnIcon from '../../assets/Play.png';

const Banner = () => {
    return (
        <section className="flex gap-20 flex-col md:flex-row md:justify-center items-center py-6 px-6 lg:px-20">

            <div className="space-y-6 text-center md:text-start md:basis-1/2">
                <div className="py-2 px-4 bg-[#E1E7FF] rounded-full flex items-center gap-2.5 w-fit mx-auto md:mx-0">
                    <div>
                        <img className=" animate-pulse" src={circleIcon} alt="Circle Icon" />
                    </div>
                    <p className="text-base font-medium bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent">
                        New: AI-Powered Tools Available
                    </p>
                </div>

                <div className="space-y-6">
                    <h1 className="text-5xl lg:text-6xl font-bold lg:font-extrabold text-[#101727] leading-snug">
                        Supercharge Your <br />{" "}
                        <span className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent">
                            Digital Workflow
                        </span>
                    </h1>
                    <p className="text-lg text-[#627382] w-9/12 mx-auto md:mx-0">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today. Explore
                        Products
                    </p>
                </div>

                <div className="flex items-center gap-6 justify-center md:justify-start">
                    <button className="text-sm font-semibold text-white px-5 py-2 rounded-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 active:scale-95">
                        Explore Products
                    </button>

                    <div className="p-px rounded-full bg-linear-to-r from-purple-500 to-indigo-500 w-fit transition duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                        <button className="flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full bg-white transition duration-300 hover:scale-105 active:scale-95">
                            <img
                                src={playBtnIcon}
                                alt="Play button"
                                className="transition duration-300 group-hover:scale-110"
                            />
                            <span className="bg-linear-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                                Watch Demo
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <img className="w-full" src={bannerImg} alt="Banner image" />
            </div>
        </section >
    );
}

export default Banner;
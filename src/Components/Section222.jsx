"use client";
import Image from "next/image";
import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import TopBankCard from "./TopBankCard";
export default function Section222() {
    const [activeSlide, setActiveSlide] = useState(0);

    const handlePrev = () => {
        setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    };

    const handleNext = () => {
        setActiveSlide((prev) => (prev === 1 ? 0 : 1));
    };

    return (
        <div className="relative  pb-[700px] sm:pb-[650px] md:pb-[340px]">
            <div className="px-4 sm:px-6 md:px-10 py-8 sm:py-12">
                <div className="bg-[#E7F4EF] rounded-[25px] w-full px-4 sm:px-6 md:px-10 py-8 sm:py-10 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-10 gap-4 sm:gap-0">
                        <h1 className="font-semibold text-[28px] sm:text-[38px] text-[#1E2A3B] text-center sm:text-left">
                            Best in Travel Insurance Company
                        </h1>

                        <div className="flex gap-3 shrink-0">
                            <button
                                onClick={handlePrev}
                                className={`w-10 h-10 flex   items-center justify-center rounded-full text-white transition-colors duration-300 ${activeSlide === 0 ? "bg-[#22C55E]" : "bg-[#1E2A3B]"
                                    }`}
                            >
                                <Image
                                    src="/Images/home444.svg"
                                    alt=""
                                    height={40}
                                    width={40}
                                    className="bg-white rounded-full"
                                />
                            </button>

                            <button
                                onClick={handleNext}
                                className={`w-10 h-10 flex items-center justify-center rounded-full text-white transition-colors duration-300 ${activeSlide === 1 ? "bg-[#22C55E]" : "bg-[#1E2A3B]"
                                    }`}
                            >
                                 <Image
                                    src="/Images/home555.svg"
                                    alt=""
                                    height={40}
                                    width={40}
                                    className="bg-white rounded-full"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${activeSlide * 100}%)`,
                            }}
                        >
                            <div className="w-full shrink-0">
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 xl:gap-6 place-items-center">
                                    <TopBankCard />
                                    <TopBankCard />
                                    <TopBankCard />
                                    <TopBankCard />
                                </div>
                            </div>

                            <div className="w-full shrink-0">
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 xl:gap-6 place-items-center">
                                    <TopBankCard />
                                    <TopBankCard />
                                    <TopBankCard />
                                    <TopBankCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="font-semibold text-[28px] sm:text-[38px] text-center mt-12 sm:mt-20 mb-8 sm:mb-12">
                        Top Verified Banks
                    </h1>

                    <Marquee
                        direction="left"
                        speed={50}
                        className="pb-[160px] mb-8 md:pb-[180px]"
                    >
                        <div className="flex gap-6">

                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex gap-6">
                                    <TopBankCard />
                                    <TopBankCard />
                                    <TopBankCard />
                                    <TopBankCard />
                                    <TopBankCard />
                                </div>
                            ))}

                        </div>
                    </Marquee>
                </div>
            </div>

            <div className="absolute left-1/2 bottom-[100px] w-[92%]  sm:w-[90%] max-w-7xl px-4 sm:px-10  -translate-x-1/2">
                <div className="bg-[#0B4F3A] rounded-[25px] px-5  py-8 sm:px-8 sm:py-10 md:px-12 lg:px-16 lg:py-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
                    <div className="text-white w-full md:w-1/2">
                        <h2 className="text-[30px] sm:text-[34px] md:text-[40px] text-white font-semibold leading-tight mb-4 text-center md:text-left max-w-[520px]">
                            We Provide Trusty Feedback You Can Rely On
                        </h2>

                        <p className="text-white font-light mb-6 text-sm sm:text-base text-center md:text-left max-w-[520px]">
                            We’re a review platform accessible to all. Our vision is to become
                            a global symbol of trust, empowering consumers to shop confidently
                            while helping businesses grow and improve.
                        </p>

                        <div className="flex justify-center md:justify-start">
                            <button className="bg-[#04DA8D] text-[#17253F] px-6 py-3 rounded-full font-medium">
                                More About Us
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full md:w-1/2 flex justify-center md:justify-end min-h-[260px] sm:min-h-[300px] md:min-h-[340px]">
                        <div className="absolute top-20 bottom-0 right-1/2 translate-x-1/2 md:right-[10px] md:translate-x-0 h-[220px] w-[220px] sm:h-[270px] sm:w-[270px] lg:h-[320px] lg:w-[320px] rounded-full bg-[#0F7A56] z-0" />

                        <Image
                            src="/Images/ReviewCrad4.svg"
                            alt=""
                            height={350}
                            width={350}
                            className="absolute bottom-0 right-1/2 translate-x-1/2 md:right-0 md:translate-x-0 z-10 w-[320px] sm:w-[390px] md:w-[390px] lg:w-[390px] top-20 object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
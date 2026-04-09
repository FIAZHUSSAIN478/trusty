import Image from "next/image";
import Link from "next/link";
export default function LoginSection1() {
    return (
        <div>
            <div className="bg-[url('/images/Hero-bg.svg')] bg-cover bg-start pb-5 pt-20 sm:pb-[70px] lg:pb-15">
                <div className="max-w-7xl  mx-auto px-10 mb-[40px] sm:mb-[52px] lg:mb-[68px]">
                    <div className="text-center mb-10">
                        <p className="text-[#17253F] font-normal text-[30px]  text-center">
                            Log In Now
                        </p>
                        <h2 className="text-[#17253F] font-semibold text-[30px] leading-[1.15] sm:text-[40px] lg:text-[50px] ">
                            Read.Write.Discover
                        </h2>


                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className=" mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.03fr] rounded-[28px] overflow-hidden">


                            <div className=" px-10 bg-[#005732]  px-[28px] pt-20 pb-0 flex flex-col items-center overflow-hidden">


                                <h2 className="text-white text-center mb-10 font-bold leading-[40px] text-[28px] max-w-[470px] z-10 tracking-normal">
                                    Be Part of the Millions Giving Feedback Daily!
                                </h2>


                                <div className=" w-full flex-1 flex items-end justify-center md:justify-end ">
                                    <Image
                                        src="/Images/ReviewCrad4.svg"
                                        alt="person"
                                        height={350}
                                        width={350}
                                        className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[500px] h-auto object-contain object-bottom"
                                    />
                                </div>

                            </div>


                            <div className="bg-[#EFF3F7] py-10  lg:px-10 sm:min-h-[720px] flex items-center justify-center px-5">
                                <div className="w-full max-w-[760px] mx-auto">
                                    <h1 className="text-[#17253F] font-semibold text-[22px] sm:text-[26px] lg:text-[30px] mb-10 text-center">
                                        Log in or sign up below
                                    </h1>

                                    <div className="flex gap-4 sm:gap-6 mb-10 flex-wrap">
                                        <div
                                            className="flex items-center justify-center
                                              w-[120px] h-[60px]
                                               md:w-[130px] md:h-[78px]
                                                 rounded-2xl bg-white shadow-sm"
                                        >
                                            <Image
                                                src="Images/logimg1.svg"
                                                alt="google"
                                                height={30}
                                                width={30}
                                                className="w-6 sm:w-8 md:w-10"
                                            />
                                        </div>

                                        <div
                                            className="flex items-center justify-center
                                             w-[120px] h-[60px]
                                               md:w-[130px] md:h-[78px]
                                                rounded-2xl bg-[#1877F2] shadow-sm"
                                        >
                                            <Image
                                                src="Images/logimg3.svg"
                                                alt="google"
                                                height={30}
                                                width={30}
                                                className="w-6 sm:w-8 md:w-10"
                                            />
                                        </div>

                                        <div
                                            className="flex items-center justify-center
                                             w-[120px] h-[60px]
                                                  md:w-[130px] md:h-[78px]
                                                  rounded-2xl bg-black shadow-sm"
                                        >
                                            <Image
                                                src="Images/logimg2.svg"
                                                alt="google"
                                                height={30}
                                                width={30}
                                                className="w-6 sm:w-8 md:w-10"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center w-full mb-[22px]">
                                        <div className="flex-1 h-px bg-[#D9DEE5]" />

                                        <span className="px-4 text-[#17253F] text-[16px] font-normal text-center">
                                            OR
                                        </span>

                                        <div className="flex-1 h-px bg-[#D9DEE5]" />
                                    </div>

                                    <div className="mb-[20px]">
                                        <label className="block text-[#1D2746] text-[16px] font-normal mb-4 leading-none">
                                            Enter Email Address<span className="text-[#FF0000]">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter Your Email Address"
                                            className="w-full h-[64px] rounded-full border border-[#D6DDE5] bg-white px-[28px] text-[16px] text-[#1D2746] placeholder:text-[#A3ACB9] outline-none"
                                        />
                                    </div>

                                    <Link href="/SignleReviewPage">
                                    <button className="w-full h-[70px] rounded-full bg-[#17253F] text-white text-[17px] font-semibold flex items-center justify-center gap-3">
                                        Continue with email
                                        <span className="text-[24px] leading-none">→</span>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
            {/* <BusinessCard /> */}

        </div>

    );
}

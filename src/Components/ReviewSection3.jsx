// import TextField from "../cards/textField/textField";
import Image from "next/image";
export default function ReviewSection3() {
    return (
        <div className="bg-[url('/images/Hero-bg.svg')] bg-cover bg-start pb-5 sm:pb-[70px] lg:pb-15">
            <div className="max-w-[69rem] mx-auto px-10 mb-[40px] sm:mb-[52px] lg:mb-[68px]">

                <div className="w-full">
                    <div className=" mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.03fr] rounded-[28px] overflow-hidden">


                        <div className=" bg-[#005732] min-h-[520px] md:min-h-[720px] px-[28px] pt-20 pb-0 flex flex-col items-center overflow-hidden">

                            <p className="text-white text-[16px]  font-normal mb-4 text-center ">
                                Can't Wait to Read Your Thoughts!
                            </p>

                            <h2 className="text-white text-center mb-10 font-bold leading-[40px] text-[28px] max-w-[470px] z-10 tracking-normal">
                                Select a Company & Contribute Your Feedback Today!
                            </h2>
                            <div className="w-full flex-1 flex items-end justify-center md:justify-end">
                                
                                <Image
                                    src="/Images/ReviewCrad4.svg"
                                    alt="person"
                                    height={350}
                                    width={350}
                                    className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[500px] h-auto object-contain object-bottom"
                                />
                              
                            </div>
                          

                        </div>


                        <div className="bg-[#EFF3F7] min-h-[720px] px-[28px] md:px-5 lg:px-[28px] xl:px-[34px] pt-20 pb-[34px] ">
                            <div className="mb-[20px]">
                                <label className="block text-[#1D2746] text-[16px] font-normal mb-5 leading-none tracking-normal">
                                    Title of your review<span className="text-[#FF0000]">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Summarize your review in few words"
                                    className="w-full h-[64px] rounded-[22px] border border-[#D6DDE5] bg-white px-[28px] text-[16px] text-[#1D2746] placeholder:text-[#A3ACB9] "
                                />
                            </div>

                            <div className="mb-5">
                                <label className="block text-[#1D2746] text-[16px] font-normal mb-5 leading-none tracking-normal">
                                    Write Review<span className="text-[#FF0000]">*</span>
                                </label>
                                <textarea
                                    placeholder="Enter comments"
                                    className="w-full h-[132px] rounded-[22px] border border-[#17253F26] bg-white px-[28px] py-[20px] text-[16px] text-[#1D2746] placeholder:text-[#A3ACB9] placeholder:font-poppins placeholder:font-normal outline-none resize-none leading-none tracking-normal"
                                />
                            </div>

                            <div className="flex  flex-col md:flex-row md:items-center gap-5 lg:gap-[22px] mb-6">
                                <p className="text-[#17253F] text-[16px] font-normal mb-3 md:mb-0  leading-none tracking-normal">
                                    How do you rate?
                                </p>

                                <div className="flex items-center gap-[2px] md:gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Image
                                            key={i}
                                            src="/Images/ReviewCard6.svg"
                                            alt="star"
                                            height={28}
                                            width={28}
                                            className="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] lg:w-[45px] lg:h-[45px] object-contain"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#D9DEE5] mb-[22px]" />

                            <div className="mb-7.5">
                                <p className="text-[#1D2746] text-[16px] font-normal mb-[14px] leading-none tracking-normal">
                                    Add Photos <span className="text-[#A3ACB9] font-normal">(Optional)</span>
                                    <span className="text-[#FF4D4F]">*</span>
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-[10px] sm:gap-[14px]">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-[80px] sm:h-[80px] lg:h-[100px] rounded-[18px] sm:rounded-[20px] lg:rounded-[22px] border border-dashed border-[#C7CED8] bg-white flex items-center justify-center"
                                        >
                                            <Image
                                                src="/Images/ReviewCard5.svg"
                                                alt="camera"
                                                height={28}
                                                width={28}
                                                className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px] object-contain opacity-70"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full h-[70px] rounded-full bg-[#17253F] text-white text-[17px] font-semibold flex items-center justify-center gap-3">
                                Submit Review
                                <span className="text-[24px] leading-none">→</span>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

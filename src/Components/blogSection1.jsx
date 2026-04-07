import Image from "next/image";

export default function BolgSection1() {
    const sideBlogs = [
        {
            id: 1,
            image: "/Images/blogimg2.svg",
            title: "Romance scams: Spot the signs",
            desc: "The prevalence of influencers in our",
        },
        {
            id: 2,
            image: "/Images/blogimg3.svg",
            title: "Holiday hoaxes: How scammers take advantage of the holiday.",
            desc: "The prevalence of influencers in our",
        },
        {
            id: 3,
            image: "/Images/blogimg4.svg",
            title: "Gift card scams: What to look out for and how to avoid them",
            desc: "The prevalence of influencers in our",
        },
    ];

    return (
        <div className=" bg-[url('/images/Hero-bg.svg')] bg-cover lg:px-20 bg-start">
            <div className="max-w-7xl px-10 mx-auto h-full">
                <div className="pt-[50px] sm:pt-[60px] lg:pt-[72px] pb-[55px] sm:pb-[70px] lg:pb-[90px]">

                    <div className="text-center mb-[40px] sm:mb-[52px] lg:mb-[68px]">
                        <p className="text-[12px] sm:text-[16px] font-light leading-[1.4] text-[#17253F] mb-7.5">
                            Homepage <span className="mx-1">{">"}</span>{" "}
                            <span className="text-[#17253F] font-light">Blogs</span>
                        </p>

                        <h2 className="text-[#17253F] font-semibold text-[30px] leading-[1.15] sm:text-[40px] lg:text-[50px]">
                            Fresh Perspectives & Expert Advice
                        </h2>
                    </div>


                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10 lg:mb-12">
                        <h1
                            className="
    font-semibold
    text-[22px]
    sm:text-[26px]
    md:text-[32px]
    lg:text-[40px]

    max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-full
  "
                        >
                            Trends in Trust
                        </h1>
                        <button
                            className="
            flex items-center justify-center
            border-[1.5px] border-[#04DA8D]
            rounded-full
            gap-1
            font-medium text-center
            
            text-[14px] sm:text-[16px] lg:text-[18px]
            w-[120px] sm:w-[135px] lg:w-[150px]
            h-[36px] sm:h-[40px] lg:h-[43px]
          "
                        >
                            See More
                            <span className="ml-2">→</span>
                        </button>
                    </div>


                    <div className="  grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-6.25 items-stretch">

                        <div className="bg-[#EFF3F7] rounded-[24px] p-[12px] sm:p-[14px] lg:p-[15px] ">
                            <div className="relative w-full aspect-[556/290] rounded-[16px] overflow-hidden">
                                <Image
                                    src="/Images/blogimg1.svg"
                                    alt="Main blog"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="pt-4  ">
                                <div className="inline-flex items-center justify-center h-[34px] px-4 rounded-full border border-[#17253F26] bg-white text-[#17253F] text-[16px] font-normal  text-center capitalize mb-4.5">
                                    Trends In Trust
                                </div>

                                <h4 className="text-[#17253F] font-semibold text-[18px] sm:text-[24px] leading-[1.25] mb-2.5">
                                    Quarterly bug fixes and feature releases
                                </h4>

                                <p className="text-[#17253F] font-light text-[13px] sm:text-[14px] leading-[1.55] max-w-[92%] mb-2.5">
                                    At Trustpilot we’re committed to continually improving our
                                    platform to better serve your needs. As part of our wider
                                </p>

                                <button className="text-[#17253F] font-semibold text-[16px] leading-[1.2] flex items-center gap-1 mb-1.5">
                                    Read Article <span>→</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 sm:gap-8.5">
                            {sideBlogs.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-[#EFF2F6] rounded-[24px] p-2  flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 "
                                >
                                    <div className="relative w-full sm:w-[160px] lg:w-[157px] h-[180px] sm:h-[140px] lg:h-[132px] xl:h-[138px] rounded-[16px] overflow-hidden shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h5 className="text-[#17253F] font-semibold text-[22px] sm:text-[20px] lg:text-[18px]  leading-[1.28] mb-2">
                                            {item.title}
                                        </h5>

                                        <p className="text-[#252525CC] font-normal text-[15px] sm:text-[16px] leading-[1.5] mb-2">
                                            {item.desc}
                                        </p>

                                        <button className="text-[#17253F] mb-5 md:mb-0 font-semibold text-[16px] leading-[1.2] flex items-center gap-2">
                                            Read Article <span>→</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
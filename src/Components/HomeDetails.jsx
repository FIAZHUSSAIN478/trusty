"use client";
import Image from "next/image";
import Link from "next/link";

const reviewerAvatar = "/Images/company8.svg";

const reviews = [
  {
    id: 1,
    name: "Jhon William",
    role: "Web Designer",
    title: "'Good ole' Days' Hometown Credit Union Service",
    text: "Unbeatable customer service on every visit. This branch brings back memories of the 'good old days' when hometown Credit Union service was first class.",
    date: "October 15, 2024",
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    role: "Project of Solios",
    title: "Seamless Refinancing with Exceptional Service",
    text: "Fantastic experience from start to finish! The team at Horizon Bank made refinancing our home a breeze. Special thanks to Mark Stevens and Jennifer Carter for their professionalism and attention to detail. We couldn't be happier with the service and will definitely recommend Horizon to all our friends and family!",
    date: "October 15, 2024",
  },
  {
    id: 3,
    name: "Albert Flores",
    role: "Marketing Coordinator",
    title: "'Good ole' Days' Hometown Credit Union Service",
    text: "Unbeatable customer service on every visit. This branch brings back memories of the 'good old days' when hometown Credit Union service was first class.",
    date: "October 15, 2024",
  },
  {
    id: 4,
    name: "Courtney Henry",
    role: "Nursing Assistant",
    title: "'Good ole' Days' Hometown Credit Union Service",
    text: "Absolutely outstanding service! The process of opening a new account at Valley Credit Union was seamless thanks to Sarah Michaels and Robert Davis. They went above and beyond to ensure everything was handled efficiently. We highly recommend them to anyone looking for reliable banking services!",
    date: "October 15, 2024",
  },
];

const sideCompanies = [
  { id: 1, name: "Cloudly", rating: "4.8" },
  { id: 2, name: "Camera", rating: "4.8" },
  { id: 3, name: "Cloudly", rating: "4.8" },
];



export default function HomeDetails() {
  return (
    <>
      <section className="bg-white py-8  ">
        <div className="mx-auto  max-w-[69rem]  px-10 ">
          <p className="text-[12px] sm:text-[16px] font-light leading-[1.4] mb-10">
            <span className="text-gray-400">Homepage</span>
            <span className="mx-1 text-gray-400">›</span>
            <span className="text-[#17253F] font-medium">Top Listing</span>
          </p>


          <div className="mt-4 rounded-[18px] border border-[#E6EAF0] bg-white px-5 py-4 shadow-sm sm:px-6 sm:py-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">


              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 lg:gap-4 w-full">
                <Image
                  className="w-[80px] sm:w-[120px] lg:w-[179px] h-auto flex-shrink-0"
                  src="/Images/company1.svg"
                  alt="Brand logo"
                  height={45}
                  width={45}
                />
                <div className="flex-1 flex flex-col gap-2 mt-2 sm:mt-0">

                  <h2 className="text-[18px] font-bold leading-none text-[#1A202C] sm:text-[20px]">
                    Cloudly
                  </h2>


                  <div className="flex flex-wrap items-center gap-1 text-[12px] sm:text-[14px]">
                    <span className="font-light text-[#1A202C]">4.9/5.0</span>
                    <span className="text-[#9AA5B1] font-light">(7891)</span>
                    <span className="text-[#9AA5B1]">•</span>
                    <span className="text-[#1A202C] font-light">Excellent</span>
                  </div>


                  <div className="flex flex-wrap gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src="/Images/company2.svg"
                        alt="star"
                        height={36}
                        width={36}
                        className="h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7"
                      />
                    ))}
                  </div>


                  <div className="inline-flex flex-wrap max-w-[150px] items-center gap-1.5 rounded-full border border-[#D9E0E8] bg-[#F7F9FB] px-2.5 py-1 text-[11px] font-medium text-[#1A202C]">
                    <Image src="/Images/company3.svg" alt="verified" height={20}
                    width={20} className="h-3 w-3" />
                    Verified Company
                  </div>
                </div>
              </div>


              <a
                href="https://www.Cloudly.com"
                className="flex items-center justify-between gap-4 rounded-[16px] border-2 border-[#2F6FED] px-5 py-4 hover:bg-[#F5F8FF] transition"
              >

                <div className="flex items-center gap-3">


                  <div className="flex flex-col">


                    <p className="flex items-center gap-2 text-[16px] font-semibold text-[#2F6FED]">
                      <Image
                        src="/Images/company4.svg"
                        alt="link"
                        height={14}
                        width={15}
                        className="w-5 h-5 shrink-0"
                      />
                      <span>www.Cloudly.com</span>
                    </p>


                    <p className="text-[14px] text-[#1A202C]">
                      Visit this website
                    </p>
                  </div>
                </div>


                <span className="text-[#2F6FED] text-[22px] font-semibold flex items-center">
                  →
                </span>
              </a>
            </div>
          </div>








          <div className="mt-4 grid gap-4  lg:grid-cols-[1fr_290px]">
            <div>
              <div className="rounded-full border border-[#E7ECF2] bg-[#F3F6F8] px-3 py-2.5">
                <div className="flex items-center gap-3">

                  <Image className="w-[42px]" src="/Images/company6.svg" alt="" height={56} width={56} />


                  <span className=" text-[12px] sm:text-[16px] font-medium text-[#000000]">
                    Write a review
                  </span>

                  <div className="ml-auto ">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Image key={i} src="/Images/company7.svg" alt="star" height={36} width={36} className="h-3 w-3 sm:h-7 sm:w-7 md:h-9 md:w-9" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 space-y-3">
                {reviews.map((review) => (
                 <Link  key={review.id} href="SignleReviewPage">
                  <article
                   
                    className="rounded-[14px] mt-3 border border-[#E7ECF2] bg-[#F3F6F8] px-4 py-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex gap-3 items-start justify-start">
                        <div className="h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={reviewerAvatar}
                            alt={review.name}
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="my-auto">
                          <p className="text-[16px] font-semibold leading-none text-[#000000]">
                            {review.name}
                          </p>
                          <p className="mt-1 text-[13px] text-[#000000]">{review.role}</p>
                        </div>
                      </div>

                      <div className="flex gap-1  my-auto">
                        {[...Array(5)].map((_, i) => (
                          <Image
                            key={i}
                            src="/Images/company9.svg"
                            alt="star"
                            width={28}
                            height={28}
                            className="sm:w-6 sm:h-6 md:w-7 md:h-7"
                          />
                        ))}
                      </div>

                    </div>

                    <h3 className="mt-3 text-[16px] font-bold leading-[18px] text-black">
                      {review.title}
                    </h3>

                    <p className="mt-2 text-[16px] font-light leading-[18px] text-[#3F4A59]">
                      {review.text}
                    </p>

                    <p className="mt-3 text-[14px] text-[#7B8794]">
                      <span className="font-semibold text-[#4A4A4A]">
                        Date of experience:
                      </span>{" "}
                      <span className="font-normal">
                        {review.date}
                      </span>
                    </p>

                    <div className="mt-3 border-t border-[#E3E8EE] pt-3">
                      <div className="flex items-center gap-4 text-[#7B8794]">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 hover:text-[#1A202C]"
                        >
                          <Image
                            src="/Images/company10.svg"
                            alt="Useful"
                            width={17}
                            height={16}
                            className="h-4 w-4 sm:h-5 sm:w-5"
                          />
                          <span className="font-medium text-[16px] leading-[100%] font-poppins">
                            Useful
                          </span>
                        </button>

                        <button
                          type="button"
                          className="inline-flex items-center gap-1 hover:text-[#1A202C]"
                        >
                          <Image
                            src="/Images/company11.svg"
                            alt="Share"
                            width={17}
                            height={16}
                            className="h-4 w-4 sm:h-5 sm:w-5"
                          />
                          <span className="font-medium text-[16px] leading-[100%] font-poppins">
                            Share
                          </span>
                        </button>
                      </div>
                    </div>
                  </article>
                 </Link>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-[14px]">
                <button className="w-8 h-8 flex items-center justify-center text-[#98A2B3]">
                  ‹
                </button>

                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-medium ${n === 1
                      ? "bg-[#00B57A] text-white"
                      : "text-[#344054] hover:text-black"
                      }`}
                  >
                    {n}
                  </button>
                ))}

                <span className="text-[#98A2B3] px-1">...</span>

                <button className="w-8 h-8 flex items-center justify-center text-[#344054]">
                  12
                </button>

                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#F2F4F7] text-[#98A2B3]">
                  ›
                </button>
              </div>
            </div>

            <aside className="space-y-3">

              <div className="rounded-[14px] border border-[#E7ECF2] bg-white px-4 py-4">


                <h3 className="text-[20px] font-semibold leading-[23px] text-[#1A202C]">
                  About Cloudly
                </h3>

                <p className="mt-2 text-[15px] leading-[23px] text-[#5B6472] font-normal">
                  We’re on a mission at Cloudly to do good for Southeast Texas by helping our
                  members achieve their hopes and dreams. We believe you matter most and
                  deserve 5-star service.
                </p>


                <div className="my-4 border-t border-[#E7ECF2]" />


                <h3 className="text-[20px] leading-[23px] text-[#1A202C] font-semibold">
                  Contact Info
                </h3>

                <ul className="mt-3 space-y-3 text-[11px] text-[#4B5563]">
                  <li className="flex gap-2 items-center">
                    <Image src="/Images/company12.svg" alt="Call" height={24} width={24} className="w-4 h-4 mt-0.5" />
                    <span className=" font-light text-[15px] leading-[23px] ">
                      (629) 555-0129
                    </span>
                  </li>

                  <li className="flex gap-2 items-center">
                    <Image src="/Images/company13.svg" alt="Email" height={24}
                    width={24} className="w-4 h-4 mt-0.5" />
                    <span className=" font-light text-[15px] leading-[23px] ">
                      debbie.baker@example.com
                    </span>
                  </li>

                  <li className="flex gap-2 items-center">
                    <Image src="/Images/company14.svg" alt="Location" height={24} width={24} className="w-4 h-4 mt-0.5" />
                    <span className=" font-light text-[15px] leading-[23px] ">
                      2972 Westheimer Rd. Santa Ana, Illinois 85486
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-[14px] border border-[#E7ECF2] bg-white px-4 py-4">
                <h3 className=" font-semibold text-[20px] leading-[23px] text-[#1A202C]">
                  People who looked at this company also looked at:
                </h3>

                <ul className="mt-4 space-y-4">
                  {sideCompanies.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <Image className="h-[88px]" src="/Images/company1.svg" alt="" width={50} height={32} />

                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] font-semibold text-[#1A202C]">{item.name}</p>

                        <div className="mt-1 flex items-center gap-1.5">
                          <div className="flex gap-[2]  my-auto">
                            {[...Array(5)].map((_, i) => (
                              <Image
                                key={i}
                                src="/Images/company2.svg"
                                alt="star"
                                width={28}
                                height={28}
                                className="w-4 h-4"
                              />
                            ))}
                          </div>
                          <span className=" font-light text-[15px] leading-[100%] text-center text-[#7B8794]">
                            {item.rating}
                          </span>
                        </div>
                        <p className="mt-1 flex items-center gap-1.5 font-normal text-[15px] leading-[23px] text-black">
                          <Image
                            src="/Images/company3.svg"
                            alt="tick"
                            height={7}
                            width={6}
                            className="h-3 w-3"
                          />
                          Asking for reviews
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
"use client";
import { useState } from "react";
import Image from "next/image";

const testimonialAvatars = {
  elizabeth: "/Images/aboutsection31.svg",
  hayley: "/Images/aboutsection32.svg",
};

export default function AboutSection3() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Elizabeth Olsen",
      image: testimonialAvatars.elizabeth,
      text: `Trustyfeedback has completely transformed our business! The reviews are genuine, and the insights have
      helped us grow immensely. Thanks to Trustyfeedback, we've built stronger customer relationships and
      gained valuable feedback. Highly recommend!`,
    },
    {
      name: "Hayley Marshall",
      image: testimonialAvatars.hayley,
      text: `Trustyfeedback gave us the tools we needed to improve. We've seen a noticeable boost in our reputation!
      This platform makes collecting and responding to reviews seamless. Our customers love the engagement,
      and so do we heloo how are you mr fiaz hussain hello mr!`,
    },
  ];

  return (
    <section className="mx-4 mb-4 sm:mx-6 lg:mx-auto lg:max-w-6xl">
      <div className="rounded-3xl bg-[rgba(231,244,239,1)] px-6 py-14 sm:px-10 md:px-14">

        <h2 className="text-center text-xl sm:text-2xl font-'Poppins' font-semibold lg:text-[38px] md:text-[38px] text-[30px] leading-[1.2] tracking-[0%] text-[rgba(23,37,63,1)]">
          What people says about Trusty Feedback
        </h2>
        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {[...Array(4)].map((_, index) => {
              const item = testimonials[index % 2];
              return (
                <div
                  key={index}
                  className="w-full shrink-0 grid gap-8 md:grid-cols-2 md:gap-10 px-1"
                >
                  <div>
                    <div className="inline-flex lg:w-80 items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-sm">
                      <div className="h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="object-cover"
                          unoptimized={true}
                        />
                      </div>

                      <span className="text-sm font-semibold text-[#1a202c]">
                        {item.name}
                      </span>

                      <span className="ml-auto flex items-center gap-1 text-sm text-[#1a202c]">
                        5/5 <span className="text-[#04DA8D]">★</span>
                      </span>
                    </div>

                    <div className="relative mt-4 rounded-2xl bg-white p-6 shadow-sm">
                      <span className="absolute left-4 top-3 text-3xl font-serif text-[#04DA8D]">
                        “
                      </span>

                      <p className="relative z-1 pt-6 text-[rgba(23,37,63,1)] font-'Poppins' font-normal text-[16px] leading-[178%]">
                        {item.text}
                      </p>

                      <span className="absolute bottom-4 right-4 text-3xl font-serif text-[#04DA8D]">
                        ”
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="inline-flex lg:w-80 items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-sm">
                      <div className="h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="object-cover"
                          unoptimized={true}
                        />
                      </div>

                      <span className="text-sm font-semibold text-[#1a202c]">
                        {item.name}
                      </span>

                      <span className="ml-auto flex items-center gap-1 text-sm text-[#1a202c]">
                        5/5 <span className="text-[#04DA8D]">★</span>
                      </span>
                    </div>

                    <div className="relative mt-4 rounded-2xl bg-white p-6 shadow-sm">
                      <span className="absolute left-4 top-3 text-3xl font-serif text-[#04DA8D]">
                        “
                      </span>

                      <p className="relative z-1 pt-6 text-[rgba(23,37,63,1)] font-'Poppins' font-normal text-[16px] leading-[178%]">
                        {item.text}
                      </p>

                      <span className="absolute bottom-4 right-4 text-3xl font-serif text-[#04DA8D]">
                        ”
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-12 flex justify-center gap-2">
          {[0, 1, 2, 3].map((dot) => (
            <span
              key={dot}
              onClick={() => setActiveIndex(dot)}
              className={`cursor-pointer h-2 ${
                activeIndex === dot ? "w-8 bg-[#1a202c]" : "w-2 border border-[#cbd5e1]"
              } rounded-full`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
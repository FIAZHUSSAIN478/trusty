import Image from "next/image";

const testimonialAvatars = {
  elizabeth: "/Images/aboutsection31.svg",
  hayley: "/Images/aboutsection32.svg",
};

export default function AboutSection3() {
  return (
    <section className="mx-4 mb-4  sm:mx-6 lg:mx-auto lg:max-w-6xl">
      <div className="rounded-[24px] bg-[rgba(231,244,239,1)] px-6 py-14 sm:px-10 md:px-14">
        
        <h2 className="text-center text-xl font-bold  sm:text-2xl font-'Poppins' font-semibold text-[38px] leading-[100%] tracking-[0%] text-center text-[rgba(23,37,63,1)]">
          What people says about Trusty Feedback
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
          
         
          <div>
            <div className="inline-flex w-80 items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-sm">
              <div className="h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={testimonialAvatars.elizabeth}
                  alt="Elizabeth Olsen"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              <span className="text-sm font-semibold text-[#1a202c]">
                Elizabeth Olsen
              </span>

              <span className="ml-auto flex items-center gap-1 text-sm text-[#1a202c]">
                5/5
                <span className="text-[#2ecc71]">★</span>
              </span>
            </div>

            <div className="relative mt-4 rounded-2xl bg-white p-6 shadow-sm">
              <span className="absolute left-4 top-3 text-3xl font-serif text-[#2ecc71]">
                “
              </span>

              <p className="relative z-[1] pt-6 text-[15px] leading-relaxed text-[rgba(23,37,63,1)] font-'Poppins' font-normal text-[16px] leading-[178%] tracking-[0%] [leading-trim:cap-height]">
                Trustyfeedback has completely transformed our business! The reviews are genuine, and the insights have
                helped us grow immensely. Thanks to Trustyfeedback, we&apos;ve built stronger customer relationships and
                gained valuable feedback. Highly recommend!
              </p>

              <span className="absolute bottom-4 right-4 text-3xl font-serif text-[#2ecc71]">
                ”
              </span>
            </div>
          </div>

         
          <div>
            <div className="inline-flex w-80 items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-sm">
              <div className="h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={testimonialAvatars.hayley}
                  alt="Hayley Marshall"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              <span className="text-sm font-semibold text-[#1a202c]">
                Hayley Marshall
              </span>

              <span className="ml-auto flex items-center gap-1 text-sm text-[#1a202c]">
                5/5
                <span className="text-[#2ecc71]">★</span>
              </span>
            </div>

            <div className="relative mt-4 rounded-2xl bg-white p-6 shadow-sm">
              <span className="absolute left-4 top-3 text-3xl font-serif text-[#2ecc71]">
                “
              </span>

              <p className="relative z-[1] pt-6 text-[15px] leading-relaxed text-[rgba(23,37,63,1)]font-['Poppins'] font-normal text-[16px] leading-[178%] tracking-[0%] [leading-trim:cap-height]">
                Trustyfeedback gave us the tools we needed to improve. We&apos;ve seen a noticeable boost in our reputation!
                This platform makes collecting and responding to reviews seamless. Our customers love the engagement,
                and so do we heloo how are you mr fiaz hussain hello mr!
              </p>

              <span className="absolute bottom-4 right-4 text-3xl font-serif text-[#2ecc71]">
                ”
              </span>
            </div>
          </div>

        </div>
        <div className="mt-12 flex justify-center gap-2">
          <span className="h-2 w-8 rounded-full bg-[#1a202c]" />
          <span className="h-2 w-2 rounded-full border border-[#cbd5e1]" />
          <span className="h-2 w-2 rounded-full border border-[#cbd5e1]" />
          <span className="h-2 w-2 rounded-full border border-[#cbd5e1]" />
        </div>

      </div>
    </section>
  );
}

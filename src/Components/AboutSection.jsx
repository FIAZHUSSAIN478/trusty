import Image from "next/image";
const aboutImages = {
  founder: "/Images/about1.svg",
  orbit1: "/Images/aboutorbit1.svg",
  orbit2: "/Images/aboutorbit2.svg",
  orbit3: "/Images/aboutorbit3.svg",
  orbit4: "/Images/aboutorbit4.svg",
  orbit5: "/Images/aboutorbit5.svg",
};

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-6 pt-10">
      <div className="mx-auto max-w-300 px-5 sm:px-6 lg:px-8">
        <div className="relative z-10 rounded-none">
          <p className="text-center text-[11px] font-medium  text-[#7b8794]">
            Homepage &gt; <span className="text-[rgba(23,37,63,1)]">About Us</span>
          </p>

          <h1 className="mx-auto mt-3 max-w-190   font-'Poppins' font-semibold text-[50px] leading-17.5 text-center  tracking-[-0.02em] text-[#22304a] md:text-[42px]">
            Trusty Feedback connects people with great local businesses.
          </h1>

          <div className="mx-auto mt-8 grid max-w-232.5 gap-6 md:grid-cols-[1.05fr_1fr] md:items-start">
            <h2 className=" font-'Poppins' font-semibold text-[38px] mt-8 leading-none tracking-normal text-[rgba(23,37,63,1)] md:text-[26px]">
              Meet Our Founder &amp; CEO
            </h2>

            <p className="font-poppins font-normal text-[14px] leading-5 tracking-normal [leading-trim:cap-height] text-[rgba(23,37,63,1)] md:justify-self-end">
              Our vision is to become the universal symbol of trust, empowering
              consumers to make confident, informed buying decisions while
              allowing businesses to credibly signal the quality of their
              services and to gain actionable insights to improve them.
            </p>
          </div>

          <div className="mx-auto mt-6 max-w-232.5 overflow-hidden rounded-[18px]">
            <img
              src={aboutImages.founder}
              alt="Founder"
              width={1200}
              height={640}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-0 -mt-23.75 rounded-[14px] bg-[rgba(5,68,46,1)] px-6 pb-10 pt-32.5 sm:px-8 md:px-12 lg:px-14">
          <div className="mx-auto flex max-w-260 flex-col items-center justify-center gap-30 lg:flex-row lg:items-center">
            <div className="relative  flex h-75 w-75 shrink-0 items-center justify-center sm:h-82.5 sm:w-82.5">
              <div className="absolute  h-60.25 w-60.25 rounded-full border border-[#10b981]/60" />
              <div className="absolute h-80.5 w-80.5 rounded-full border border-[#10b981]/60" />

              <span className="relative z-10 font-sans font-bold text-[30px] leading-[1.2] tracking-[0%] text-center  text-white">
                YOUR
                <br />
                BUSINESS
              </span>

              <div className="absolute left-1/2 top-6 z-10 -translate-x-1/2">
                <div className="h-10.5 w-10.5 overflow-hidden rounded-full ">
                  <Image
                    src={aboutImages.orbit1}
                    alt="Orbit image 1"
                    width={42}
                    height={42}
                    className="h-full w-full object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>

              <div className="absolute right-2.5 top-12 z-10">
                <div className="h-10.5 w-10.5 overflow-hidden rounded-full">
                  <Image
                    src={aboutImages.orbit2}
                    alt="Orbit image 2"
                    width={42}
                    height={42}
                    className="h-full w-full object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>

              <div className="absolute bottom-5 right-10 z-10">
                <div className="h-10.5 w-10.5 overflow-hidden rounded-full">
                  <Image
                    src={aboutImages.orbit3}
                    alt="Orbit image 3"
                    width={42}
                    height={42}
                    className="h-full w-full object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>

              <div className="absolute bottom-16.5 left-13.5 z-10">
                <div className="h-10.5 w-10.5 overflow-hidden rounded-full">
                  <Image
                    src={aboutImages.orbit4}
                    alt="Orbit image 4"
                    width={42}
                    height={42}
                    className="h-full w-full object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>

              <div className="absolute left-[-16] top-26.5 z-10">
                <div className="h-10.5 w-10.5 overflow-hidden rounded-full">
                  <Image
                    src={aboutImages.orbit5}
                    alt="Orbit image 5"
                    width={42}
                    height={42}
                    className="h-full w-full object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>

            <div className="max-w-107.5 text-white">
              <h3 className="font-poppins  font-semibold text-[38px] leading-11.25 tracking-[1.2.02em] sm:text-[34px]">
                We&apos;re Trustyfeedback,
                <br />
                Committed to Growing
                <br />
                Your Business!
              </h3>

              <p className="mt-4 max-w-97.5 text-[12px] font-poppins font-normal not-italic text-base leading-5 tracking-normal [leading-trim:cap-height] text-white">
                At Trustyfeedback, our mission is to help your business thrive
                through genuine, trusted reviews from real customers. We connect
                you with authentic feedback that builds credibility, drives
                improvement, and enhances your reputation.
              </p>

              <button
                type="button"
                className="mt-5 inline-flex h-9.5 items-center justify-center rounded-full bg-[rgba(4,218,141,1)] px-6 text-[12px] font-bold text-[rgba(23,37,63,1)] cursor-pointer transition hover:brightness-95"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

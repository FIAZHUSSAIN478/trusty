import Image from "next/image";
const aboutImages = {
  founder: "/Images/about11.svg",
  orbit1: "/Images/Circleimg.svg",
};

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden  bg-white pb-6 pt-10">
      <div className="mx-auto max-w-300  px-5 sm:px-6 lg:px-8">
        <div className="relative z-10 rounded-none">
          <p className="text-center text-[11px] font-medium  text-[#7b8794]">
            Homepage &gt; <span className="text-[rgba(23,37,63,1)]">About Us</span>
          </p>

          <h1 className="mx-auto mt-3 max-w-190   font-'Poppins' font-semibold  lg:text-[49px] lg:leading-17.5  md:leading-17.5 text-center   tracking-[-0.02em] text-[#22304a] md:text-[42px] text-[22px]">
            Trusty Feedback connects people with great local businesses.
          </h1>

          <div className="mx-auto  mt-8 grid max-w-255 gap-6 md:grid-cols-[1.05fr_1fr] md:items-start">
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

          <div className="mx-auto mt-6 max-w-255 overflow-hidden rounded-[18px]">
            <Image
              src={aboutImages.founder}
              alt="Founder"
              width={1200}
              height={640}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-0 -mt-23.75  rounded-[14px] bg-[rgba(5,68,46,1)] px-6 pb-10 pt-32.5 sm:px-8 md:px-12 lg:px-14">
          <div className="mx-auto flex max-w-260 flex-col items-center justify-center  lg:gap-30    md:gap-15 gap-10 lg:flex-row lg:items-center">
            <div className="relative  flex h-75 w-75 shrink-0 items-center justify-center sm:h-82.5 sm:w-82.5">
              <Image
              src={aboutImages.orbit1}
              alt="Founder"
              width={1200}
              height={640}
              className="h-auto w-full object-cover"
            />
            </div>

            <div className="max-w-107.5 text-white">
              <h3 className="font-poppins  font-semibold lg:text-[38px] md:text-7 text-7 leading-11.25 tracking-[1.2.02em] sm:text-[34px]">
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

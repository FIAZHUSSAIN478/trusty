import Image from "next/image";

const teamImages = {
  team1: "/Images/about2.svg",
  team2: "/Images/about3.svg",
  team3: "/Images/about4.svg",
  team4: "/Images/about5.svg",
  connectHero: "/Images/about6.svg",
};

export default function AboutSection2() {
  return (
    <section className="bg-white py-16  md:pt-20  pb-0">
      <div className="mx-auto max-w-[67rem] px-6">
        <h2 className="text-center text-2xl font-bold text-[#0f172a] sm:text-[1.75rem]">
          Trusty Feedback’s Team
        </h2>

        <div
          className="mt-10 flex gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {[teamImages.team1, teamImages.team2, teamImages.team3, teamImages.team4].map((src, i) => (
            <div
              key={i}
              className="relative h-85 w-72.5 shrink-0 overflow-hidden rounded-[28px] shadow-sm"
            >
              <Image
                src={src}
                alt={`Team member ${i + 1}`}
                fill
                className="object-cover"
                sizes="290px"
                unoptimized={true}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className=" font-'Poppins' font-semibold lg:text-[38px] text-[30px]leading-11.75 tracking-normal text-[rgba(23,37,63,1)] sm:text-4xl md:text-[2.65rem] md:leading-[1.15]">
              Connecting Consumers and Businesses Through Authentic Reviews
            </h2>

            <p className="mt-4 font-poppins font-normal not-italic text-base leading-6.25 tracking-normal text-[15px]  text-[rgba(23,37,63,1)]">
              At Trustyfeedback, our mission is to help your business thrive through genuine, trusted reviews from real
              customers. We connect you with authentic feedback that builds credibility, drives improvement, and enhances
              your reputation.
            </p>

            <button
              type="button"
              className="mt-4 h-13.25 w-38.25 rounded-full bg-[rgba(4,218,141,1)]   text-sm font-semibold text-[rgba(23,37,63,1)] shadow-sm transition hover:opacity-95"
            >
              Get Started
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-95 w-full max-w-110">
              <div className="absolute left-1/2 top-1/2 h-[min(100%,360px)] w-[min(100%,360px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200/80" />

              <div className="relative z-1 flex h-full items-end justify-center">
                <Image
                  src={teamImages.connectHero}
                  alt="People using phones"
                  width={440}
                  height={380}
                  className="h-auto max-h-95 w-auto object-contain"
                />
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

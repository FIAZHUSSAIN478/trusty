"use client";

export default function Section4() {
  return (
    <section className="w-full bg-white px-5 py-0 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px] rounded-[22px] bg-[#16284A] px-8 py-10 md:px-12 md:py-14 lg:px-[60px]">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row lg:px-10">
          
          <div className="max-w-[470px]">
            <h2 className="mb-5 text-[34px] font-semibold leading-[1.08] text-white lg:text-[40px]">
              Own a Business? Sign Up Now
             
           Gain Genuine Reviews!
            </h2>

            <p className="mb-8 max-w-[460px] text-[15px] leading-[1.6] text-[#D7DFEC]">
              Register with us to build trust through authentic reviews.
              Showcase your services, engage with your audience, and grow your
              reputation with real feedback.
            </p>

            <button className="rounded-full bg-[#12D98E] px-8 py-4 text-[16px] font-semibold leading-none text-[#0B2340] transition hover:opacity-95">
              Get Started
            </button>
          </div>


          <div className="relative hidden h-[290px] w-[470px] md:block">
            
            <div className="absolute right-[55px] top-[10px] w-[300px] rounded-[16px] bg-[#F7F7F5] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
             
              <div className="flex h-[16px] items-center justify-end rounded-t-[16px] bg-[#12D98E] px-4">
                <div className="flex items-center gap-[4px]">
                  <span className="h-[4px] w-[4px] rounded-full bg-[#F97316]" />
                  <span className="h-[4px] w-[4px] rounded-full bg-[#EF4444]" />
                  <span className="h-[4px] w-[4px] rounded-full bg-[#10B981]" />
                </div>
              </div>

              <div className="px-6 pb-6 pt-3">
                <h3 className="mb-4 text-center text-[16px] font-semibold text-[#1E2B4A]">
                  Top Business
                </h3>

                <div className="grid grid-cols-3 gap-[10px]">
                  {Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i}>
                        <div className="h-[56px] rounded-[8px] bg-[#D9E4E0]" />
                        <div className="mt-[8px] h-[5px] w-[46px] rounded-full bg-[#DCE7E4]" />
                        <div className="mt-[5px] h-[5px] w-[30px] rounded-full bg-[#DCE7E4]" />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-[54px] w-[126px] rounded-[10px] bg-white p-[10px] shadow-[0_16px_30px_rgba(0,0,0,0.16)]">
              <div className="mb-2 h-[44px] w-full rounded-[6px] bg-[#E6EAEE]" />

              <div className="mb-[2px] flex items-center gap-[5px]">
                <p className="text-[10px] font-semibold leading-none text-[#1F2A44]">
                  Your Business
                </p>
                <span className="h-[8px] w-[8px] rounded-full bg-[#22C55E]" />
              </div>

              <p className="mb-[6px] text-[7px] leading-none text-[#98A2B3]">
                www.business.com
              </p>

              <div className="mb-[7px] flex items-center gap-[3px]">
                <div className="flex items-center gap-[1px]">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        key={i}
                        className="flex h-[8px] w-[8px] items-center justify-center bg-[#00B67A] text-[5px] text-white"
                      >
                        ★
                      </span>
                    ))}
                </div>
                <span className="text-[6px] text-[#98A2B3]">4.9/5.0 (7891)</span>
              </div>

              <p className="text-[9px] font-semibold leading-none text-[#1F2A44]">
                Register Now →
              </p>
            </div>

          
            <div className="absolute left-[30px] top-[190px] flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-[0_16px_30px_rgba(0,0,0,0.16)]">
              <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#FFF7E8] text-[16px]">
                🏆
              </div>

              <div>
                <p className="text-[14px] font-semibold leading-none text-[#12D98E]">
                  Top Rated
                </p>
                <p className="mt-[5px] text-[12px] leading-none text-[#4B5563]">
                  10k+ Real Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

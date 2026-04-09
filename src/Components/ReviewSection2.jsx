import { Camera, ArrowRight } from "lucide-react";

export default function ReviewSection2() {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="mx-auto max-w-[67rem] px-4">
        <div className="grid overflow-hidden rounded-[24px] bg-[#eef2f5] md:grid-cols-2">
          <div className="relative min-h-[580px] overflow-hidden bg-[#005636] px-8 py-10 text-white md:px-10">
            <p className="mb-4 text-center text-sm text-white/90">
              Can&apos;t Wait to Read Your Thoughts!
            </p>

            <h2 className="mx-auto max-w-[360px] text-center text-[28px] font-bold leading-[1.3]">
              Select a Company &amp; Contribute Your Feedback Today!
            </h2>

          

            <div className="absolute left-12 top-[275px] text-white/90">
             
            </div>

            

            <div className="absolute bottom-0 left-1/2 w-[280px] -translate-x-1/2 md:w-[300px]">
              <img
                src="images/section2person.svg"
                alt="Man using phone"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-[#eef2f5] px-5 py-7 md:px-8 md:py-8">
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-[15px] font-medium text-[#24324a]">
                  Title of your review<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Summarize your review in few words"
                  className="h-[52px] w-full rounded-[16px] border border-[#dfe5ea] bg-white px-5 text-sm text-[#24324a] placeholder:text-[#a5adb8] outline-none transition focus:border-[#cfd8df]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[15px] font-medium text-[#24324a]">
                  Write Review<span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="5"
                  placeholder="Enter comments"
                  className="w-full rounded-[18px] border border-[#dfe5ea] bg-white px-5 py-4 text-sm text-[#24324a] placeholder:text-[#a5adb8] outline-none transition focus:border-[#cfd8df]"
                ></textarea>
              </div>

              <div className="flex flex-col gap-3 border-b border-[#d9dee5] pb-5 md:flex-row md:items-center md:justify-between">
                <p className="text-[15px] font-medium text-[#24324a]">
                  How do you rate?
                </p>

                <div className="flex gap-[4px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className="flex h-8 w-8 items-center justify-center bg-[#9be8d7] text-lg text-white"
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 text-[15px] font-medium text-[#24324a]">
                  Add Photos <span className="text-[#98a2b3]">(Optional)</span>
                  <span className="text-red-500">*</span>
                </p>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <label
                      key={i}
                      className="flex h-[72px] cursor-pointer items-center justify-center rounded-[18px] border border-dashed border-[#cfd6de] bg-white/40 text-[#98a2b3] transition hover:bg-white"
                    >
                      <input type="file" className="hidden" />
                      <Camera size={22} strokeWidth={1.8} />
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="flex h-[54px] w-full items-center justify-center gap-2 rounded-full bg-[#17284a] text-sm font-semibold text-white transition hover:opacity-95"
              >
                Submit Review
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

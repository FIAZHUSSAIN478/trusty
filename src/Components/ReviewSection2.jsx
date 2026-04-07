import { Camera, ArrowRight } from "lucide-react";

export default function ReviewSection2() {
  return (
    <section className="w-full bg-[#f3f4f6] py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid overflow-hidden rounded-[24px] bg-[#eef2f5] md:grid-cols-2">
          {/* Left Side */}
          <div className="relative min-h-[580px] overflow-hidden bg-[#005636] px-8 py-10 text-white md:px-10">
            <p className="mb-4 text-center text-sm text-white/90">
              Can&apos;t Wait to Read Your Thoughts!
            </p>

            <h2 className="mx-auto max-w-[360px] text-center text-[28px] font-bold leading-[1.3]">
              Select a Company &amp; Contribute Your Feedback Today!
            </h2>

            <div className="absolute left-6 top-[165px] w-[126px] rounded-[18px] bg-white p-3 text-[#1f2937] shadow-lg">
              <div className="mb-2 flex items-start gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff9f2f] text-xs font-bold text-black">
                  😊
                </div>
                <div className="text-[13px] font-medium leading-[1.15]">
                  How was your
                  <br />
                  order?
                </div>
              </div>

              <p className="mb-2 text-[11px] text-[#9ca3af]">Give us a review</p>

              <div className="flex gap-[2px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex h-5 w-5 items-center justify-center bg-[#bdeee2] text-[10px] text-white"
                  >
                    ★
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute left-12 top-[275px] text-white/90">
              <svg
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C10 22 15 42 31 42C47 42 49 19 37 18C24 17 19 36 28 48C37 60 53 71 73 73"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <path
                  d="M65 66L74 73L66 81"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="absolute right-6 top-[285px] rounded-full bg-[#18e0a0] px-3 py-2 text-[10px] font-semibold text-[#083b2d] shadow">
              <p className="mb-1 leading-none">It was Delicious!</p>
              <div className="flex gap-[2px] rounded bg-[#17335c] px-1.5 py-1 text-[9px] text-white">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 w-[280px] -translate-x-1/2 md:w-[300px]">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80"
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
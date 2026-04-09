"use client";

import Image from "next/image";

const reviewerAvatar = "/Images/blogimg3.svg";

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

function StarBoxes({ count = 5, small = false, empty = false }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`flex items-center justify-center rounded-[2px] ${
            small ? "h-4 w-4 text-[10px]" : "h-5 w-5 text-[11px]"
          } ${
            empty
              ? "border border-[#BFC7D1] bg-white text-[#BFC7D1]"
              : "bg-[#00B67A] text-white"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function BrandIcon({ small = false }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl bg-[#12D68A] ${
        small ? "h-10 w-10 rounded-xl" : "h-16 w-16"
      }`}
    >
      <span className={`relative flex items-center justify-center ${small ? "h-5 w-5" : "h-8 w-8"}`}>
        <span
          className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-[#0F172A] ${
            small ? "h-3.5 w-3.5" : "h-5 w-5"
          }`}
        />
        <span
          className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-white bg-white ${
            small ? "h-3.5 w-3.5" : "h-5 w-5 border-2"
          }`}
        />
      </span>
    </div>
  );
}

export default function HomeDetails() {
  return (
    <section className="bg-white py-8 md:py-10">
      <div className="mx-auto max-w-[67rem] px-4 sm:px-6">
        <p className="text-[11px] text-[#8A94A6]">
          Homepage &gt; <span className="text-[#1A202C]">Top Listing</span>
        </p>

        <div className="mt-4 rounded-[18px] border border-[#E6EAF0] bg-white px-5 py-4 shadow-sm sm:px-6 sm:py-5">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <BrandIcon />

              <div>
                <h2 className="text-[18px] font-bold leading-none text-[#1A202C] sm:text-[20px]">
                  Cloudly
                </h2>

                <p className="mt-1 text-[11px] text-[#7B8794]">
                  4.9/5.0 (7891) • Excellent
                </p>

                <div className="mt-2">
                  <StarBoxes />
                </div>

                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#D9E0E8] bg-[#F7F9FB] px-2.5 py-1 text-[11px] font-medium text-[#1A202C]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#00B67A]">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Verified Company
                </div>
              </div>
            </div>

            <a
              href="https://www.Cloudly.com"
              className="flex w-full max-w-[340px] items-center gap-3 rounded-[10px] border border-[#A9C1FF] px-4 py-3 transition hover:bg-[#F8FAFF]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5FF] text-[#4F7BFF]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
                </svg>
              </span>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold text-[#3461FF]">
                  www.Cloudly.com
                </p>
                <p className="text-[11px] text-[#6B7280]">Visit this website</p>
              </div>

              <span className="text-[#3461FF]">→</span>
            </a>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_290px]">
          <div>
            <div className="rounded-[14px] border border-[#E7ECF2] bg-[#F3F6F8] px-3 py-2.5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDE5EC] text-[#8FA0AF]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
                  </svg>
                </div>

                <span className="text-[12px] font-medium text-[#445164]">
                  Write a review
                </span>

                <div className="ml-auto">
                  <StarBoxes small empty />
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-3">
              {reviews.map((review) => (
                <article
                  key={review.id}
                  className="rounded-[14px] border border-[#E7ECF2] bg-[#F3F6F8] px-4 py-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={reviewerAvatar}
                          alt={review.name}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div>
                        <p className="text-[12px] font-semibold leading-none text-[#1A202C]">
                          {review.name}
                        </p>
                        <p className="mt-1 text-[10px] text-[#7B8794]">{review.role}</p>
                      </div>
                    </div>

                    <StarBoxes small />
                  </div>

                  <h3 className="mt-3 text-[13px] font-bold leading-[18px] text-[#111827]">
                    {review.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-[18px] text-[#3F4A59]">
                    {review.text}
                  </p>

                  <p className="mt-3 text-[10px] text-[#7B8794]">
                    Date of experience: {review.date}
                  </p>

                  <div className="mt-3 border-t border-[#E3E8EE] pt-3">
                    <div className="flex items-center gap-4 text-[10px] text-[#7B8794]">
                      <button type="button" className="inline-flex items-center gap-1 hover:text-[#1A202C]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
                        </svg>
                        Useful
                      </button>

                      <button type="button" className="inline-flex items-center gap-1 hover:text-[#1A202C]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
                        </svg>
                        Share
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px]">
              <button type="button" className="text-[#AAB4C0]">
                ‹
              </button>

              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`flex h-5 w-5 items-center justify-center rounded-full ${
                    n === 1
                      ? "bg-[#12D68A] text-white"
                      : "text-[#6B7280] hover:text-[#111827]"
                  }`}
                >
                  {n}
                </button>
              ))}

              <span className="text-[#98A2B3]">...</span>
              <button type="button" className="text-[#6B7280]">
                12
              </button>
              <button type="button" className="text-[#AAB4C0]">
                ›
              </button>
            </div>
          </div>

          <aside className="space-y-3">
            <div className="rounded-[14px] border border-[#E7ECF2] bg-white px-4 py-4">
              <h3 className="text-[14px] font-bold text-[#1A202C]">About Cloudly</h3>
              <p className="mt-2 text-[11px] leading-[18px] text-[#5B6472]">
                We’re on a mission at Cloudly to do good for Southeast Texas by helping our
                members achieve their hopes and dreams. We value your matter most and
                deserves 5 Star service.
              </p>
            </div>

            <div className="rounded-[14px] border border-[#E7ECF2] bg-white px-4 py-4">
              <h3 className="text-[14px] font-bold text-[#1A202C]">Contact Info</h3>

              <ul className="mt-3 space-y-3 text-[11px] text-[#4B5563]">
                <li className="flex gap-2">
                  <span className="mt-0.5 text-[#6B7280]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <span>(629) 555-0129</span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-0.5 text-[#6B7280]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </span>
                  <span>debbie.baker@example.com</span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-0.5 text-[#6B7280]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[14px] border border-[#E7ECF2] bg-white px-4 py-4">
              <h3 className="text-[14px] font-bold text-[#1A202C]">
                People who looked at this company also looked at:
              </h3>

              <ul className="mt-4 space-y-4">
                {sideCompanies.map((item) => (
                  <li key={item.id} className="flex items-center gap-3">
                    <BrandIcon small />

                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-semibold text-[#1A202C]">{item.name}</p>

                      <div className="mt-1 flex items-center gap-1.5">
                        <StarBoxes small />
                        <span className="text-[10px] text-[#7B8794]">{item.rating}</span>
                      </div>

                      <p className="mt-1 flex items-center gap-1 text-[10px] text-[#00B67A]">
                        Asking for reviews
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
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
  );
}

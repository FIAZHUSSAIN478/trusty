"use client";

import { useState } from "react";

function IconArrowUp({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${className}`}
    >
      <path d="M12 19V5" />
      <path d="M6 11l6-6 6 6" />
    </svg>
  );
}

function IconArrowRight({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${className}`}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

const faqItems = [
  {
    q: "What types of loans do you offering us?",
    a: "We offer a variety of loans, including personal loans, business loans, foreigner loans, payday loans, and debt consolidation loans, tailored to meet your specific needs.",
  },
  {
    q: "How quickly can I get my loan approved?",
    a: "Approval timelines vary by product and your profile; many applicants receive a decision quickly after submitting complete information.",
  },
  {
    q: "What documents do I need to apply for a loan?",
    a: "Typically you will need identification, proof of income, and address verification. Exact requirements depend on the loan type you choose.",
  },
  {
    q: "Can I apply for a loan if I have bad credit?",
    a: "We consider multiple factors beyond credit score. Eligibility depends on your full application and the product you select.",
  },
  {
    q: "How do I make repayments on my loan?",
    a: "Repayments can be scheduled through the options shown in your agreement, including automatic debits where available.",
  },
  {
    q: "Is there a penalty for early repayment?",
    a: "Terms vary by loan. Review your agreement or contact support for details specific to your plan.",
  },
];

export default function AboutSection4() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="w-full px-6 py-16 md:px-35 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="font-poppins font-semibold lg:text-[38px] md:text-[38px] leading-tight tracking-normal text-center text-[rgba(23,37,63,1)] sm:text-[1.65rem]">
          Frequently Asked Questions
        </h2>

        <p className="mx-auto font-'Open_Sans' font-normal not-italic text-base leading-[1.6] tracking-normal [leading-trim:cap-height] mt-4 max-w-xl text-center text-[15px] text-[rgba(23,37,63,1)]">
          Here are some common questions about our Reviews and their answers.
        </p>

        <div className="mt-12 w-full divide-y divide-[#e2e8f0] border-t border-[#e2e8f0]">
          {faqItems.map((item, index) => {
            const open = openFaq === index;

            return (
              <div key={item.q} className="py-5">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 text-left"
                  onClick={() => setOpenFaq(open ? -1 : index)}
                  aria-expanded={open}
                >
                  <span className="flex-1 font-'Open_Sans' font-bold lg:text-[22px] md:text-[22px] text-4 leading-[120%] tracking-normal  text-[rgba(23,37,63,1)]">
                    {item.q}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      open
                        ? "bg-[rgba(214,214,214,1)] text-[#4a5568]"
                        : "bg-[rgba(4,218,141,1)] text-white"
                    }`}
                  >
                    {open ? (
                      <IconArrowUp className="text-[#4a5568]" />
                    ) : (
                      <IconArrowRight className="text-white" />
                    )}
                  </span>
                </button>

                {open && (
                  <p className="mt-3 pr-14 font-'Open_Sans' font-normal lg:text-[16px] md:text-[16px] text-3 leading-[160%] tracking-normal [leading-trim:cap_height] text-[rgba(23,37,63,1)]">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

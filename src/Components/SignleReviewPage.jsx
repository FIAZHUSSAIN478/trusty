import Image from "next/image";

function RatingBoxes() {
  return (
    <Image
      src="/Images/singlereview4.svg"
      alt="Diana S"
      width={72}
      height={17}
      className="h-full w-full object-cover"
      priority
    />
  );
}

function ActionIcon({ type }) {
  if (type === "share") {
    return (
      <Image
      src="/Images/singlereview3.svg"
      alt="Diana S"
      width={72}
      height={17}
      className="h-full w-full object-cover"
      priority
    />
    );
  }

  return (
    <Image
      src="/Images/singlereview2.svg"
      alt="Diana S"
      width={72}
      height={17}
      className="h-full w-full object-cover"
      priority
    />
  );
}

export default function SingleReviewPage() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto  bg-white px-4 py-5 sm:px-6 lg:px-30 md:px-[20px] md:py-[60px]">
        <p className="text-[16px] font-medium text-[#7C8798]">
          Review of <span className="text-[#17253f]">Remixshop.com</span>
        </p>

        <div className="mt-5 rounded-[18px] bg-[#eff3f7] p-4 sm:p-5 md:p-[16px] shadow-[0_0_0_1px_rgba(15,23,42,0.02)]">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                <Image
                  src="/Images/singlereviewimg1.svg"
                  alt="Diana S"
                  width={50}
                  height={50}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div>
                <h3 className="text-[16px] mt-2 font-semibold leading-none text-black">
                  Diana S
                </h3>
                <p className="mt-[5px] text-[15px] leading-none text-black">
                  1 Review
                </p>
              </div>
            </div>

            <div className="pt-[6px]">
              <RatingBoxes />
            </div>
          </div>

          <h2 className="mt-5  font-sans font-bold text-[16px] leading-none  capitalize text-black">
            Orders Never Received
          </h2>

          <p className="mt-4 max-w-[690px] leading-[21px] font-poppins font-normal text-base  tracking-normal text-black">
            I never receive the orders from remix. First two times I ordered only the
            cleanup bag. I only found out that they were returned after I installed
            the Fan Courier app for an unrelated order and saw the history. Third
            time I double/triple checked that the delivery address and phone number
            are correct. Once again, in the Fan Courier app I could see the package
            on its way. Fan Courier is taking forever to respond, Remix same. The
            order was paid in advance, hope I’ll someday see either my money back or
            my order but until then I am highly disappointed by the services. Hoping
            that they will respond to my email after this review because it seems
            they are more active here than on customer support.
          </p>

          <p className="mt-5 text-[14px] text-black">
            <span className="font-light">Date of experience:</span>{" "}
            <span className="font-normal text-[#6B7280]">October 13, 2024</span>
          </p>

          <div className="mt-4 border-t border-[#D8E0E7] pt-4">
            <div className="flex items-center gap-5 text-[13px] text-[#667085]">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 hover:text-[#111827]"
              >
                <ActionIcon type="useful" />
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-1.5 hover:text-[#111827]"
              >
                <ActionIcon type="share" />
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-[20px] bg-white p-0">
            <div className="rounded-[14px] border-l-[3px] border-[#04DA8D] px-4 py-4 sm:px-5 sm:py-5">
              <h4 className="font-sans font-bold text-[16px] leading-none text-black">
                Reply From Remixshop.Com
              </h4>

              <p className="mt-4 max-w-[650px]  leading-[21px] font-poppins font-normal text-base  tracking-normal [leading-trim:cap-height] text-black">
                Thank you for your review. We&apos;ll continue working on improving
                our products and services and we apologize for any inconvenience
                caused.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
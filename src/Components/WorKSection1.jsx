import Image from "next/image";

function ConsumerIcon() {
  return (
    <Image
        src="/Images/wrokcard1.svg"
        alt="person"
        height={40}
        width={40}
      />
  );
}

function BusinessIcon() {
  return (
      <Image
        src="/Images/workcard2.svg"
        alt="person"
        height={30}
        width={30}
      />
  );
}

function InfoCard({ type = "consumer", title, text }) {
  return (
    <div className="rounded-[18px] border border-[#DCE3EA] bg-[rgba(239,243,247,1)] p-5 shadow-[0_1px_0_rgba(16,24,40,0.02)]">
      <div className="flex items-center gap-3 rounded-[14px] border border-[#D7DEE6] bg-white px-5 py-4">
        {type === "business" ? <BusinessIcon /> : <ConsumerIcon />}
        <h3 className="text-[20px] font-semibold text-[rgba(23,37,63,1)]">{title}</h3>
      </div>

      <p className="mt-5 text-[15px] leading-[22px] text-black">
        {text}
      </p>

      <button className="mt-5 inline-flex items-center gap-1 text-[16px] font-semibold text-[rgba(23,37,63,1)]">
        View Details <span>→</span>
      </button>
    </div>
  );
}

export default function WorkSection1() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl   px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[11px] text-[rgba(23,37,63,1)]">
            Homepage <span className="mx-1">{">"}</span> how its  Works
          </p>

          <h1 className="mt-3 font-sans font-semibold text-[50px] leading-[70px] text-center text-[rgba(23,37,63,1)] md:text-[48px]">
            We&apos;re open to all.
          </h1>

          <p className="mx-auto mt-4 max-w-[760px] text-[18px] leading-[32px] font-poppins font-normal not-italic text-2xl  tracking-normal text-center text-[rgba(23,37,63,1)] md:text-[20px]">
            A platform where customers rate businesses, sharing reviews to guide
            others and help companies improve.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-[50rem] overflow-hidden rounded-[14px]">
          <Image
            src="/images/workimg1.svg"
            alt="People working together"
            width={900}
            height={520}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
        <div className="mx-auto mt-8 max-w-[50rem]">
          <h2 className="font-'Poppins' font-bold text-[24px] leading-[159%] tracking-[0px] text-[#252525] md:text-[21px]">
            How do reviews get on Trusty Feedback?
          </h2>

          <div className="mt-4 space-y-4 leading-[24px] font-poppins font-normal not-italic text-[17px] tracking-normal [leading-trim:cap-height] text-[rgba(23,37,63,1)]">
            <p>
              Reviews on Trusty Feedback are written by consumers from across
              the globe. Anyone who has had a recent buying or service
              experience can write a review, for free, as long as they have a
              Trusty Feedback user account, follow our Guidelines for Reviewers,
              and don’t have a conflict of interest with the business
              they&apos;re reviewing. A user account must be connected to an
              email address so we can get in touch for account- and service-
              related issues.
            </p>

            <p>
              All reviews about a business are shown on their profile page. This
              is where consumers can read and write reviews, and find other
              relevant information about the business, such as the overall
              TrustScore and star rating.
            </p>

            <p>A Trusty Feedback review can start in two ways:</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <InfoCard
              type="consumer"
              title="Consumers"
              text="Consumers who've had an experience with a business can create a Trustpilot account and write an unsolicited review. We call these “organic reviews”."
            />

            <InfoCard
              type="business"
              title="Businesses"
              text="Consumers who've had an experience with a business can create a Trustpilot account and write an unsolicited review. We call these “organic reviews”."
            />

            <InfoCard
              type="consumer"
              title="Consumers"
              text="Consumers who've had an experience with a business can create a Trustpilot account and write an unsolicited review. We call these “organic reviews”."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
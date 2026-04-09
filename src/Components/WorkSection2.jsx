import Image from "next/image";
function CardIcon() {
  return (
   <Image
           src="/Images/workcard3.svg"
           alt="person"
           height={40}
           width={40}
         />
  );
}

function InfoCard({ title, description }) {
  return (
    <div className="rounded-[24px] bg-white px-7 py-6 shadow-[0_0_0_1px_rgba(15,23,42,0.03)]">
      <div className="flex items-center gap-3">
        <CardIcon />
        <h3 className="text-[22px] font-semibold leading-[24px]  text-[rgba(23,37,63,1)]">
          {title}
        </h3>
      </div>

      <p className="mt-5 font-sans font-normal text-[15px] leading-[27px] tracking-[0] ... text-black">
        {description}
      </p>
    </div>
  );
}

export default function WorkSection2() {
  const cardText1 =
    "Trustpilot was created in 2007 as an independent, open platform that sits between businesses and consumers, and empowers both by enabling collaboration. We allow anyone to post a review, which prevents businesses from pre-screening or moderating what can publish the reviews they like and ‘unpublish’ those they don’t (either after the fact or by pre-screening). This is never the case on Trustpilot. We welcome all reviews from consumers who’ve had a genuine experience.";

  const cardText2 =
    "We consider reviews to be user-generated content owned by their author, and they are the only one who can edit or permanently delete their reviews. This can be done through their user account. Unless a user permanently deletes their individual  outlined in the How long do we store your personal data? section of our Privacy Policy. This can be done through their user account. Unless a user permanently deletes their individual reviews, we keep reviews for as long as the user has a Trustpilot account.";

  const cardText3 =
    "Trustpilot was created in 2007 as an independent, open platform that sits between businesses and consumers, and empowers both by enabling collaboration. We allow anyone to post a review, which prevents businesses from pre-screening or moderating what  can publish the reviews they like and ‘unpublish’ those they don’t (either after the fact or by pre-screening). This is never the case on Trustpilot. We welcome all reviews from consumers who’ve had a genuine experience.";

  const cardText4 =
    "Trustpilot was created in 2007 as an independent, open platform that sits between businesses and consumers, and empowers both by enabling collaboration. We allow anyone to post a review, which prevents businesses from pre-screening or moderating what can publish the reviews they like and ‘unpublish’ those they don’t (either after the fact or by pre-screening). This is never the case on Trustpilot. We welcome all reviews from consumers who’ve had a genuine experience.";

  return (
    <section className="w-full bg-[#e7f4ef] py-5">
      <div className="mx-auto max-w-[67rem] rounded-[6px]  px-[18px] py-[38px] sm:px-[26px] md:px-[34px] md:py-[40px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-14 md:gap-y-10">
          <InfoCard title="Being open is in our DNA" description={cardText1} />
          <InfoCard title="Consumers own their reviews" description={cardText2} />
          <InfoCard title="Fighting fake reviews" description={cardText3} />
          <InfoCard title="Flagging reviews" description={cardText4} />
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

export default function WorkSection3() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[63rem] lg:p-0 md:px-10 px-5">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_412px] md:gap-[38px]">
          <div className="max-w-[490px]">
            <h2 className="font-poppins font-semibold lg:text-[34px] md:text-[23px] text-[20px] leading-[47px] tracking-[0%] text-[rgba(23,37,63,1)]">
              A neutral space for dialogue and collaboration
            </h2>

            <p className="mt-3 text-[12px] font-poppins font-normal text-base leading-[25px] tracking-normal [leading-trim:cap-height] text-[rgba(23,37,63,1)]">
              &quot;We&apos;re open to all. We believe this is the best way to help
              consumers make informed decisions when buying products and
              services.&quot;
            </p>

            <p className="mt-4 text-[16px] font-'Poppins' font-semibold text-base leading-6.25 tracking-normal [leading-trim:cap-height] text-[rgba(23,37,63,1)]">
              Ben Martin Director of Privacy
            </p>
          </div>
          <div className="overflow-hidden  rounded-lg">
            <Image
              src="/Images/workcard4.svg"
              alt="Woman speaking into a microphone with headphones"
              width={400}
              height={500}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
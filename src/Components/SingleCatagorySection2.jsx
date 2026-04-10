import Image from "next/image";

const reviews = [
  {
    id: 1,
    company: "Tech Wizards",
    website: "techwizards.com",
    rating: "5.0",
    review:
      "Had a great experience with Tech Wizards when my laptop crashed. They were able to recover all my files and had my computer running like new again......",
    author: "Courtney Henry",
    role: "Top Contributor",
    time: "15 mins ago",
    avatar: "/images/avatar1.png",
  },
  {
    id: 2,
    company: "Tech Wizards",
    website: "techwizards.com",
    rating: "5.0",
    review:
      "Had a great experience with Tech Wizards when my laptop crashed. They were able to recover all my files and had my computer running like new again......",
    author: "Courtney Henry",
    role: "Top Contributor",
    time: "15 mins ago",
    avatar: "/images/avatar1.png",
  },
  {
    id: 3,
    company: "Tech Wizards",
    website: "techwizards.com",
    rating: "5.0",
    review:
      "Had a great experience with Tech Wizards when my laptop crashed. They were able to recover all my files and had my computer running like new again......",
    author: "Courtney Henry",
    role: "Top Contributor",
    time: "15 mins ago",
    avatar: "/images/avatar1.png",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((item) => (
        <span
          key={item}
          className="flex h-[14px] w-[14px] items-center justify-center bg-[#01a870] text-[10px] leading-none text-white"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ item }) {
  return (
    <div className="w-full max-w-[300px]  rounded-[16px] bg-white px-[14px] pb-[10px] pt-[12px] shadow-none">
      <div className="flex  items-start gap-4">
        <div className="relative  h-[48px] w-[48px] shrink-0 rounded-[10px] border border-[#D9D9D9] bg-white">
          <span className="absolute right-[-4px] top-[-4px] h-[10px] w-[10px] rounded-full bg-[#10B981] ring-2 ring-white"></span>
        </div>

        <div className="pt-[4px]">
          <h3 className="font-Poppins font-semibold text-[16.92px] leading-[12.05px] tracking-[0%] text-black  ">
            {item.company}
          </h3>
          <p className="mt-2 font-Poppins font-normal text-[12.69px] leading-[12.05px] tracking-[0%] text-black">
            {item.website}
          </p>
        </div>
      </div>

      <div className="mt-[14px] flex items-center gap-2">
        <Stars />
        <span className="text-[10px] font-medium text-[#4B5563]">{item.rating}</span>
      </div>

      <p className="mt-2.5  font-Poppins font-normal text-[13.54px] leading-[21.15px] tracking-[0%] text-black">
        {item.review}
      </p>

      <button className="mt-2.5 text-[11px] font-semibold text-[#00B67A]">
        Read Review →
      </button>

      <div className="mt-[12px] h-px w-full bg-[#E6E6E6]" />

      <div className="mt-[12px] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="h-[34px] w-[34px] overflow-hidden rounded-full bg-[#E5C7A3]">
            <Image
              src="/Images/catagory222.svg"
              alt={item.author}
              width={34}
              height={34}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-1">
              <p className="font-Poppins font-semibold text-[13.54px] leading-[20.1px] tracking-[0%] text-black">
                {item.author}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <p className="font-Poppins font-normal text-[12.69px] leading-[20.1px] tracking-[0%] text-black">{item.role}</p>
              <Image
              src="/Images/catagory333.svg"
              alt={item.author}
              width={11}
              height={12}
              
            />
            </div>
          </div>
        </div>

        <p className="text-[11px] text-[#A1A1AA]">{item.time}</p>
      </div>
    </div>
  );
}

export default function SingleCatagorySection2() {
  return (
    <section className="w-full bg-white px-4  md:px-6">
      <div className="mx-auto max-w-[75rem]  rounded-[25px] bg-[#EAF5F1]  py-10  md:py-10">
        <h2 className="text-center text-[20px] font-semibold tracking-[-0.02em] text-[#1D2B4F] md:text-[21px]">
          Recently reviewed companies
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {reviews.map((item) => (
            <ReviewCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
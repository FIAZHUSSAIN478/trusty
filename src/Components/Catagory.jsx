import Image from "next/image";
import Link from "next/link";
export default function Catagory() {
  const categories = [
    {
      title: 'Beauty & Well-Being',
      theme: {
        header: 'bg-[#97e0c2]',
        iconWrap: 'bg-[#5CC497]',
        body: 'bg-[#eefbf6]',
        text: 'text-black',
        dot: 'bg-[#19C76A]',
      },
      items: [
        'African & Pacific Cuisine',
        'Bars & Cafes',
        'Chinese & Korean Cuisine',
        'European Cuisine',
        'General Restaurants',
        'Japanese Cuisine',
      ],
    },
    {
      title: 'Home Services',
      theme: {
        header: 'bg-[#17253f]',
        iconWrap: 'bg-[#0E1F3B]',
        body: 'bg-[#eff3f7]',
        text: 'text-black',
        dot: 'bg-[#1CCB6D]',
      },
      items: [
        'Cleaning Service Providers',
        'Craftsman',
        'House Services',
        'House Sitting & Security',
        'Moving & Storage',
        'Plumbing & Sanitation',
      ],
    },
    {
      title: 'Shopping & Fashion',
      theme: {
        header: 'bg-[#05442e]',
        iconWrap: 'bg-[#004A32]',
        body: 'bg-[#eefbf6]',
        text: 'text-blck',
        dot: 'bg-[#18C56A]',
      },
      items: [
        'Accessories',
        'Cultural Goods',
        'Clothing Rental & Repair',
        'Costumes Wedding',
        'Jewelry & Watches',
        'Malls & Marketplaces',
      ],
    },
    {
      title: 'Business Services',
      theme: {
        header: 'bg-[#97e0c2]',
        iconWrap: 'bg-[#5CC497]',
        body: 'bg-[#eefbf6]',
        text: 'text-black',
        dot: 'bg-[#19C76A]',
      },
      items: [
        'Administration & Services',
        'Associations & Centers',
        'HR & Recruiting',
        'IT & Communication',
        'Office Space & Supplies',
        'Sales & Marketing',
      ],
    },
    {
      title: 'Sports',
      theme: {
        header: 'bg-[#17253f]',
        iconWrap: 'bg-[#0E1F3B]',
        body: 'bg-[#eff3f7]',
        text: 'text-black',
        dot: 'bg-[#1CCB6D]',
      },
      items: [
        'Ball Games',
        'Bat-and-ball Games',
        'Bowl & Lawn Sports',
        'Dancing & Gymnastics',
        'Extreme Sports',
        'Ord & Ultimate',
      ],
    },
    {
      title: 'Health Medical',
      theme: {
        header: 'bg-[#05442e]',
        iconWrap: 'bg-[#004A32]',
        body: 'bg-[#eefbf6]',
        text: 'text-blck',
        dot: 'bg-[#18C56A]',
      },
      items: [
        'Clinics',
        'Dental Services',
        'Diagnostics & Testing',
        'Health Equipment',
        'Mental Health',
        'Physical Aids',
      ],
    },
    {
      title: 'Animal & Pets',
      theme: {
        header: 'bg-[#97e0c2]',
        iconWrap: 'bg-[#5CC497]',
        body: 'bg-[#eefbf6]',
        text: 'text-black',
        dot: 'bg-[#19C76A]',
      },
      items: [
        'Animal Health',
        'Animal Parks & Zoo',
        'Cats & Dogs',
        'Horses & Riding',
        'Pet Services',
        'Pet Stores',
      ],
    },
    {
      title: 'Events & Entertainment',
      theme: {
        header: 'bg-[#17253f]',
        iconWrap: 'bg-[#0E1F3B]',
        body: 'bg-[#eff3f7]',
        text: 'text-black',
        dot: 'bg-[#1CCB6D]',
      },
      items: [
        'Adult Entertainment',
        "Children's Entertainment",
        'Clubbing & Nightlife',
        'Gaming',
        'Museums & Exhibits',
        'Music & Movies',
      ],
    },
    {
      title: 'Home & Garden',
      theme: {
        header: 'bg-[#05442e]',
        iconWrap: 'bg-[#004A32]',
        body: 'bg-[#eefbf6]',
        text: 'text-blck',
        dot: 'bg-[#18C56A]',
      },
      items: [
        'Bathroom & Kitchen',
        'Cultural Goods',
        'Decoration & Interior',
        'Fabric & Stationery',
        'Furniture Store',
        'Garden & Pond',
      ],
    },
  ];

  return (
    <main className=" bg-white  px-6 pb-20 md:px-10 lg:px-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-'Poppins' font-semibold lg:text-[38px]  leading-[100%] tracking-[0%] text-[rgba(23,37,63,1)]] md:text-[30px] text-26px">
            Explore companies by category
          </h1>
          <Link href="/SingleCatagoryPage">
            <button className="inline-flex h-[43px]  items-center gap-2 rounded-full border border-[#04da8d]  bg-white px-4 lg:text-[18px] md:text-[16px] text-[12px] font-medium text-[#17253f] shadow-[0_1px_0_rgba(0,0,0,0.03)] transition hover:bg-[#F8FFFC]">
              <span>See More</span>
              <span className="text-[14px]">→</span>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="overflow-hidden   rounded-[14px]  bg-transparent shadow-none"
            >
              <div
                className={`flex h-[52px]  items-center gap-3 rounded-t-[14px] px-4 text-white ${category.theme.header}`}
              >

                <Image
                  src="/Images/catagorydetail2.svg"
                  alt="star"
                  width={28}
                  height={28}
                  className="sm:w-6 sm:h-6  md:w-7 md:h-7"
                />


                <h2 className="text-[14px] font-semibold leading-none tracking-[-0.01em]">
                  {category.title}
                </h2>
              </div>

              <div className={`${category.theme.body}  rounded-b-[14px]`}>
                {category.items.map((item, index) => (
                  <div
                    key={item}
                    className={`flex h-[42px] items-center  px-4 ${index !== category.items.length - 1
                      ? 'border-b border-[#DDE7E3]'
                      : ''
                      }`}
                  >
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span
                        className={`h-[5px] w-[5px] flex-shrink-0 rounded-full ${category.theme.dot}`}
                      />
                      <span
                        className={`truncate text-[12.5px] font-medium ${category.theme.text}`}
                      >
                        {item}
                      </span>
                    </div>
                    <span className="ml-3  flex-shrink-0 text-[14px] text-[#17304C]">→</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-[12px] font-medium text-[#6D7A8B]">
          <button className="leading-none">‹</button>
          <div className="flex items-center gap-2">
            <button className="flex h-5 w-5 items-center justify-center rounded-full bg-[#19C76A] text-[11px] font-semibold text-white">
              1
            </button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <span>...</span>
            <button>12</button>
          </div>
          <button className="leading-none">›</button>
        </div>
      </div>
    </main>
  );
}

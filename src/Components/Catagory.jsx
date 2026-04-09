export default function Catagory() {
  const categories = [
    {
      title: 'Beauty & Well-Being',
      theme: {
        header: 'bg-[#79D6AF]',
        iconWrap: 'bg-[#5CC497]',
        body: 'bg-[#E9F7EF]',
        text: 'text-[#163B2A]',
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
        header: 'bg-[#16284C]',
        iconWrap: 'bg-[#0E1F3B]',
        body: 'bg-[#F1F5F9]',
        text: 'text-[#17304C]',
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
        header: 'bg-[#00563A]',
        iconWrap: 'bg-[#004A32]',
        body: 'bg-[#E9F4EF]',
        text: 'text-[#14382E]',
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
        header: 'bg-[#9ADBC2]',
        iconWrap: 'bg-[#7BC9AC]',
        body: 'bg-[#EDF9F2]',
        text: 'text-[#173C31]',
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
        header: 'bg-[#16284C]',
        iconWrap: 'bg-[#0E1F3B]',
        body: 'bg-[#F1F5F9]',
        text: 'text-[#17304C]',
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
        header: 'bg-[#00563A]',
        iconWrap: 'bg-[#004A32]',
        body: 'bg-[#E9F4EF]',
        text: 'text-[#14382E]',
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
        header: 'bg-[#9ADBC2]',
        iconWrap: 'bg-[#7BC9AC]',
        body: 'bg-[#EDF9F2]',
        text: 'text-[#173C31]',
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
        header: 'bg-[#16284C]',
        iconWrap: 'bg-[#0E1F3B]',
        body: 'bg-[#F1F5F9]',
        text: 'text-[#17304C]',
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
        header: 'bg-[#00563A]',
        iconWrap: 'bg-[#004A32]',
        body: 'bg-[#E9F4EF]',
        text: 'text-[#14382E]',
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
    <main className="min-h-screen bg-[#F3F5F4] px-6 py-5 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-[26px] font-semibold tracking-[-0.02em] text-[#142B43] md:text-[30px]">
            Explore companies by category
          </h1>

          <button className="inline-flex h-[38px] items-center gap-2 rounded-full border border-[#44D6A2] bg-white px-4 text-[13px] font-medium text-[#17304C] shadow-[0_1px_0_rgba(0,0,0,0.03)] transition hover:bg-[#F8FFFC]">
            <span>See More</span>
            <span className="text-[14px]">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="overflow-hidden rounded-[14px] bg-transparent shadow-none"
            >
              <div
                className={`flex h-[52px] items-center gap-3 rounded-t-[14px] px-4 text-white ${category.theme.header}`}
              >
                <div
                  className={`flex h-[24px] w-[24px] items-center justify-center rounded-md ${category.theme.iconWrap}`}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-95"
                  >
                    <path
                      d="M3 5.25A2.25 2.25 0 0 1 5.25 3h8.5A2.25 2.25 0 0 1 16 5.25v13.5A2.25 2.25 0 0 1 13.75 21h-8.5A2.25 2.25 0 0 1 3 18.75V5.25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M16 7h2.75A2.25 2.25 0 0 1 21 9.25v6.5A2.25 2.25 0 0 1 18.75 18H16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path d="M6.5 7.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6.5 11.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6.5 15.5h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h2 className="text-[14px] font-semibold leading-none tracking-[-0.01em]">
                  {category.title}
                </h2>
              </div>

              <div className={`${category.theme.body} rounded-b-[14px]`}>
                {category.items.map((item, index) => (
                  <div
                    key={item}
                    className={`flex h-[42px] items-center justify-between px-4 ${
                      index !== category.items.length - 1
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
                    <span className="ml-3 flex-shrink-0 text-[14px] text-[#17304C]">→</span>
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

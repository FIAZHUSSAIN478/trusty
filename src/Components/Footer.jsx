import Image from "next/image";
export default function Footer() {
  const quickLinks = [
    'About Us',
    'Contact us',
    'How it works',
    'Blog',
    'Categories',
  ]

  const communityLinks = [
    'Write a review',
    'Help Centre',
    'Log In',
    'Sign Up',
  ]

  const businessLinks = [
    'Own a business',
    'Products',
    'Plan & Pricing',
    'Business Login',
    'Blog for Business',
  ]

  const otherLinks = [
    'Legal',
    'Privacy Policy',
    'Terms & Condition',
    'Guidelines',
    'System Status',
  ]

  return (
    <footer className="w-full bg-white px-0 py-4 md:py-0">
      <div className="mx-auto max-w-[1200] rounded-[25px] bg-[#9BDFC4] px-7 py-10 md:px-10 md:py-9 lg:px-14">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr_0.9fr] lg:gap-x-10">
          <div>
            <div className="flex items-center gap-3">
             

              <div className="leading-none">
                <Image
                  src="/Images/logoimg.svg"
                  alt="trusty logo"
                  width={168}
                  height={51}
                  className="h-auto w-[168px] md:w-[140px] lg:w-[168px]"
                />
              </div>
            </div>

            <p className="mt-5 max-w-[230px] text-[14px] leading-[24px] text-[#31435F]">
              Our vision is to become a global symbol of trust, empowering
              consumers to shop confidently.
            </p>

            <div className="mt-6">
              <h3 className="text-[18px] font-bold text-[#162544]">
                Follow Us:
              </h3>

              <div className="mt-3 flex items-center gap-2.5">
                <a
                  href="#"
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#3B5998] text-white transition hover:scale-105"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 21V13.8H16L16.4 11H13.5V9.2C13.5 8.4 13.8 7.8 15 7.8H16.5V5.2C15.8 5.1 15.1 5 14.4 5C11.9 5 10.2 6.5 10.2 9.3V11H7.8V13.8H10.2V21H13.5Z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#2DAAE1] text-white transition hover:scale-105"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.2 5H20.9L15 11.8L22 21H16.5L12.2 15.4L7.2 21H4.5L10.8 13.9L4 5H9.6L13.5 10.1L18.2 5ZM17.3 19.4H18.8L8.8 6.5H7.2L17.3 19.4Z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] text-white transition hover:scale-105"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8A4.8 4.8 0 1 0 12 7.2ZM12 15.1A3.1 3.1 0 1 1 12 8.9A3.1 3.1 0 0 1 12 15.1ZM18.1 7A1.1 1.1 0 1 0 18.1 9.2A1.1 1.1 0 1 0 18.1 7Z" />
                    <path d="M12 2.8C9.5 2.8 9.2 2.8 8.2 2.9C7.1 3 6.4 3.2 5.8 3.5C5.2 3.8 4.7 4.2 4.2 4.7C3.7 5.2 3.3 5.7 3 6.3C2.7 6.9 2.5 7.6 2.4 8.7C2.3 9.7 2.3 10 2.3 12.5C2.3 15 2.3 15.3 2.4 16.3C2.5 17.4 2.7 18.1 3 18.7C3.3 19.3 3.7 19.8 4.2 20.3C4.7 20.8 5.2 21.2 5.8 21.5C6.4 21.8 7.1 22 8.2 22.1C9.2 22.2 9.5 22.2 12 22.2C14.5 22.2 14.8 22.2 15.8 22.1C16.9 22 17.6 21.8 18.2 21.5C18.8 21.2 19.3 20.8 19.8 20.3C20.3 19.8 20.7 19.3 21 18.7C21.3 18.1 21.5 17.4 21.6 16.3C21.7 15.3 21.7 15 21.7 12.5C21.7 10 21.7 9.7 21.6 8.7C21.5 7.6 21.3 6.9 21 6.3C20.7 5.7 20.3 5.2 19.8 4.7C19.3 4.2 18.8 3.8 18.2 3.5C17.6 3.2 16.9 3 15.8 2.9C14.8 2.8 14.5 2.8 12 2.8Z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0077B5] text-white transition hover:scale-105"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.9 8.4A1.95 1.95 0 1 1 6.9 4.5A1.95 1.95 0 0 1 6.9 8.4ZM8.4 20.2H5.3V10.2H8.4V20.2ZM20.2 20.2H17.1V15.3C17.1 14.1 17.1 12.5 15.4 12.5C13.7 12.5 13.5 13.8 13.5 15.2V20.2H10.4V10.2H13.4V11.6H13.4C13.8 10.8 14.8 10 16.3 10C19.4 10 20.2 12 20.2 14.7V20.2Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold text-[#162544]">Quick Links</h3>
            <ul className="mt-4 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[15px] text-[#31435F] transition hover:text-[#162544]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold text-[#162544]">Community</h3>
            <ul className="mt-4 space-y-3.5">
              {communityLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[15px] text-[#31435F] transition hover:text-[#162544]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold text-[#162544]">Businesses</h3>
            <ul className="mt-4 space-y-3.5">
              {businessLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[15px] text-[#31435F] transition hover:text-[#162544]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold text-[#162544]">Other Links</h3>
            <ul className="mt-4 space-y-3.5">
              {otherLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[15px] text-[#31435F] transition hover:text-[#162544]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[#85D0B3] pt-5 text-center">
          <p className="text-[16px] text-[#162544]">
            © Copyright 2024 All Right Reserved by Trusty Feedback
          </p>
        </div>
      </div>
    </footer>
  )
}

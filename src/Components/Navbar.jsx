"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export default function Navbar() {
  const [active, setActive] = useState("business");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Write a review", href: "Review" },
    { name: "How it Works", href: "WorkPage" },
    { name: "About Us", href: "About" },
    { name: "Blog", href: "Blogs" },
    { name: "Login", href: "LogInPage" },
  ];

  return (
    <div className="h-[105px] border-b border-[#17253F26] bg-[url('/Images/Hero-bg.svg')] bg-cover bg-start ">
      <div className="max-w-7xl  lg:px-30 md:px-5 px-7  mx-auto flex items-center justify-between h-full">

        <Link href="/">
        <Image
          src="/Images/logoimg.svg"
          alt="trusty logo"
          width={168}
          height={51}
          className="w-[168px] h-auto md:w-[140px] lg:w-[168px]"
        />
        </Link>

        <div className="flex items-center  gap-6 ">
          <nav className="flex items-center gap-6 hidden  lg:flex text-[#17253F] font-normal text-[15px] leading-none tracking-normal font-poppins">
            {navItems.map((item) => (
              <Link key={item.name} className="hover:font-bold" href={item.href}>
                {item.name}
              </Link>
            ))}
          </nav>


          <div className="hidden md:flex items-center justify-between border border-[#17253F26] rounded-full p-[6px] lg:w-[353.3px] lg:h-[65px] ">
            <button
              onClick={() => setActive("business")}
              className={`lg:py-[21px] lg:px-[25px] py-[10px] px-[15px] lg:w-[170px] lg:h-[53px] flex items-center justify-center rounded-[100px] text-sm font-medium transition ${active === "business"
                  ? "bg-[#17253F]  text-white"
                  : "text-[#17253F]"
                }`}
            >

              For Businesses
            </button>

            <button
              onClick={() => setActive("consumer")}
              className={`lg:py-[21px] lg:px-[25px] py-[10px] px-[15px] lg:w-[170px] lg:h-[53px] flex items-center justify-center rounded-full text-sm font-medium transition ${active === "consumer"
                  ? "bg-[#17253F] text-white"
                  : "text-[#17253F]"
                }`}
            >
              For Consumer
            </button>

          </div>
          {
            <button className="lg:hidden flex  flex-col  gap-1"

              onClick={() => setMenuOpen(!menuOpen)}>
              <span className="w-6 h-[2px] bg-[#17253F]"></span>

              <span className="w-6 h-[2px] bg-[#17253F]"></span>

              <span className="w-6 h-[2px] bg-[#17253F]"></span>
            </button>
          }

        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden  flex mx-auto  border-[#17253F26] rounded-full p-[6px] mt-4 mx-10 max-w-[267px] ">
          <button
            onClick={() => setActive("business")}
            className={`py-[10px] px-[15px] flex items-center justify-center rounded-[100px] text-sm font-medium transition ${active === "business" ? "bg-[#17253F] text-white" : "text-[#17253F]"
              }`}
          >
            For Businesses
          </button>

          <button
            onClick={() => setActive("consumer")}
            className={`py-[10px] px-[15px] flex items-center justify-center rounded-full text-sm font-medium transition ${active === "consumer" ? "bg-[#17253F] text-white" : "text-[#17253F]"
              }`}
          >
            For Consumer
          </button>
        </div>
      )}
      {menuOpen && (
        <div className="lg:hidden absolute left-0 right-0 md:top-26 top-43 bg-white shadow-xl border-t border-[#17253F26] z-[1000]">
          <div className="max-w-7xl mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#17253F] font-medium border-b border-[#17253F26] w-full flex items-center justify-center md:items-start p-4 gap-4 bg-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}


    </div>

  );
}

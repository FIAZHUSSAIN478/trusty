"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState("business");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Write a review", href: "Review" },
    { name: "How it Works", href: "#" },
    { name: "About Us", href: "About" },
    { name: "Blog", href: "/" },
    { name: "Login", href: "/" },
  ];

  return (
    <div className="h-[105px] border-b border-[#17253F26] bg-[url('/Images/Hero-bg.svg')] bg-cover bg-start ">
      <div className="max-w-7xl lg:px-30  mx-auto flex items-center justify-between h-full">

        <Image
          src="/Images/logo1.svg"
          alt="trusty logo"
          width={168}
          height={51}
          className="w-[168px] h-auto md:w-[140px] lg:w-[168px]"
          unoptimized={true}
        />

        <div className="flex items-center gap-6 ">
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
                  ? "bg-[#17253F] text-white"
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
            <button className="lg:hidden flex flex-col gap-1"

              onClick={() => setMenuOpen(!menuOpen)}>
              <span className="w-6 h-[2px] bg-[#17253F]"></span>

              <span className="w-6 h-[2px] bg-[#17253F]"></span>

              <span className="w-6 h-[2px] bg-[#17253F]"></span>
            </button>
          }

        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex mx-auto border border-[#17253F26] rounded-full p-[6px] mt-4 mx-10 max-w-[267px] ">
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
        <div className="lg:hidden bg-[url('/Images/Hero-bg.svg')] bg-cover bg-start   ">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-[#17253F] font-medium border-b border-[#17253F26] w-full flex flex-col justify-center items-center md:items-start p-2 px-4 w-full gap-4">
              {item.name}
            </Link>

          ))

          }

        </div>

      )}


    </div>

  );
}

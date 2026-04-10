"use client";
import Image from "next/image";
export default function TopBankCard() {
  return (
    <div className="w-full max-w-[280px] min-w-0 bg-white rounded-2xl p-4">
      <div className="h-[100px] bg-[#EFF3F7] flex items-center justify-center gap-3 rounded-xl border border-gray-200">
        <Image src="/Images/home111.svg" alt="logo" width={34} height={36} className="h-10 w-10" />
        <h1 className="font-bold text-2xl text-[#17253F]">
          Cloudly
        </h1>
      </div>

      <div className="mt-4">
        <h2 className="flex items-center gap-2 font-semibold text-lg text-[#17253F]">
          Trip Insure
          <Image src="/Images/company3.svg" alt="tick" height={18} width={18} className="h-5 w-5" />
        </h2>

        <p className="text-sm mt-2 text-gray-400">
          www.businesstoolkit.com
        </p>

        <div className="flex items-center gap-2 mt-3">
          <Image
            className="h-4"
            src="/Images/home222.svg"
            height={18}
            width={99}
            alt="rating"
          />
          <span className="text-sm">4.9/5.0</span>
          <span className="text-sm text-gray-400">(7891)</span>
        </div>

        <div className="flex items-center  gap-2 mt-4 cursor-pointer">
          <span className="font-semibold  text-[#17253F]">
            View Details
          </span>
          <Image src="/Images/home333.svg" alt="arrow" height={1} width={11} className="h-4 w-4"/>
        </div>
      </div>
    </div>
  );
}
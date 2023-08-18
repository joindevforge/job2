import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
function Card3({ title, desc }) {
  return (
    <div className=" max-w-[515px] w-full md:p-[2.5rem]  p-[1.5rem] px-[28px] border rounded-[8px] border-[#e5e5e5] flex  flex-col md:flex-row md:h-[225px] h-fit md:mt-[56px] mt-[26px] ">
     
      <div className="text-left mt-5 md:mt-0 w-full">
        <p className="md:pb-[8px] pb-[4px] text-[1.5rem]  font-bold font-Domine">
          {title}
        </p>
        <p className="text-[#595959] font-Inter font-[400]">{desc}</p>
        <Link href="#" className="flex  font-Founders text-[1.1875rem] font-[500] text-bluee items-center mt-1">
          Learn more <FiArrowRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default Card3;

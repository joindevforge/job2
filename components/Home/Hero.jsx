import React from "react";
import Header from "../Header";

function Hero() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="w-full h-full">
        <div className="w-full h-full flex justify-center ">
          <div className="lg:w-[1280px] w-full h-[809px] overflow-hidden  relative ">
            <div className=" absolute top-[85px] left-[137px]">
              <h1 className=" font-domine leading-normal text-[6rem] font-[700]  tracking-[-4.32px] text-[#1C04AD] ">
                A new
                <br />
                <span className="text-[#FC6142]">LinkedIn</span> for the
              </h1>
            </div>
            <div className=" absolute top-[352px] left-[526px] z-10 ">
              <h1 className="font-domine text-[6rem] font-[700] leading-normal  tracking-[-4.32px] text-[#1C04AD]">
                <span className="text-[#FC6142]">teenagers</span> of <br />
                new India
              </h1>
            </div>
            <div className=" absolute left-[526px] top-[629px]">
              <p className="w-[575px]  h-full leading-normal text-[#000] font-Inter text-[1.25rem] font-[400]  tracking-[-0.3%] ">
                A cutting-edge networking platform designed specifically for
                high school students set to revolutionize the way teenagers
                connect, collaborate, and grow in the digital age
              </p>
            </div>
            <div className=" absolute top-[395px]  left-[94px] ">
              <div className="img1">
                <img
                  src="/linked/img1.jpg"
                  className="rounded-[24px] z-20 w-[363px] "
                />
              </div>
            </div>
            <div className=" absolute top-[145px]  left-[1058px]  ">
              <div className="img2">
                <img
                  src="/linked/img2.jpg"
                  className=" z-20 w-[225px]  rounded-[20px] w-[225px]"
                />
              </div>
            </div>
            <div className=" absolute top-[115px] right-[300px]">
              <div className="img3 z-20">
                <img
                  src="/linked/img3.jpg"
                  className=" z-20  rounded-[20px] w-[127px]"
                />
              </div>
            </div>
            <div className="absolute top-[57px] left-[448px]">
               <div className="img4">
               <img
                src="/linked/img4.jpg"
                alt="as"
                className="z-20 w-[134px] rounded-[20px]"
                />
               </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

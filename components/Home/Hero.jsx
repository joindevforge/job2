import React from "react";
import Header from "../Header";

function Hero() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="w-full h-full">
        <div className="w-full h-full flex justify-center ">
          <div className="lg:w-[1280px] w-full md:h-[809px]  h-[350px] overflow-hidden lg:overflow-visible  relative ">
            <div className=" absolute md:top-[10.5%] top-[15%] left-[10%]">
              <h1 className=" font-domine md:leading-normal leading-[30px] md3:text-[6rem] md:text-[5rem] text-[1.5rem] font-[700] tracking-normal  md:tracking-[-4.32px] text-[#1C04AD] ">
                A new
                <br />
                <span className="text-[#FC6142]">LinkedIn</span> for the
              </h1>
            </div>
            <div className=" absolute md:top-[43.5%] top-[35%] left-[41%] z-10 ">
              <h1 className="font-dominemd3:text-[6rem] md:text-[5rem] text-[1.5rem] font-[700] md:leading-normal leading-[30px] tracking-normal  md:tracking-[-4.32px] text-[#1C04AD]">
                <span className="text-[#FC6142]">teenagers</span> of <br />
                new India
              </h1>
            </div>
            <div className=" absolute left-[41%] md:top-[77.7%] top-[55%]">
              <p className="md:w-[575px]  h-full leading-normal text-[#000] font-Inter md:text-[1.25rem] text-[12px] font-[400]  tracking-[-0.3%] ">
                A cutting-edge networking platform designed specifically for
                high school students set to revolutionize the way teenagers
                connect, collaborate, and grow in the digital age
              </p>
            </div>
            <div className=" absolute md:top-[48.5%] top-[38%]  left-[7.3%] ">
              <div className="img1">
                <img
                  src="/linked/img1.jpg"
                  className="rounded-[24px] z-20 md3:w-[363px] md:w-[320px] sm2:w-[150px] w-[100px] "
                />
              </div>
            </div>
            <div className=" absolute top-[18%]  left-[82.6%]  ">
              <div className="img2">
                <img
                  src="/linked/img2.jpg"
                  className=" z-20 w-[225px]  rounded-[20px] md:w-[225px] w-[70px]"
                />
              </div>
            </div>
            <div className=" absolute md:top-[14.2%] top-[10%] left-[65.3%]">
              <div className="img3 z-20">
                <img
                  src="/linked/img3.jpg"
                  className=" z-20  rounded-[20px] md:w-[127px] w-[50px]"
                />
              </div>
            </div>
            <div className="absolute top-[7%] left-[35%]">
               <div className="img4">
               <img
                src="/linked/img4.jpg"
                alt="as"
                className="z-20 md:w-[134px] w-[45px] rounded-[20px]"
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

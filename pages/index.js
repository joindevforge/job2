import Carousel from "@/components/Home/Carousel";
import Chips2 from "@/components/Home/Chips2";
import Chips3 from "@/components/Home/Chips3";
import Hero from "@/components/Home/Hero";
import Tags from "@/components/Home/Tags";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";


const images = [
  "/images/landingPage/b1.svg",
  "/images/landingPage/b2.svg",
  "/images/landingPage/b3.svg",
  "/images/landingPage/b4.svg",
  "/images/landingPage/b5.svg",
  "/images/landingPage/b6.svg",
];

const resources = [
  "Tips to get hired",
  "Job search strategies",
  "Work from home",
  "Avoiding scams",
  "Popular places to work",
  "Career discovery",
  "Building your network"
];

const search2 = [
  {
    title: "hiringevents",
    followers: "450k",
  },
  {
    title: "Hiringnews",
    followers: "5.6m",
  },
  {
    title: "motivation",
    followers: "5.6m",
  },
  {
    title: "jobsearch",
    followers: "6.6m",
  },
  {
    title: "interview",
    followers: "6.2m",
  },
  {
    title: "resume",
    followers: "5.8m",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="wrapper bg-[#DBEFFE] md:mt-[12.19rem] mt-0">
        <div className="wrapper-item py-[100px]">
          <div className="w-full h-full flex flex-col items-center">
            <h1 className="md:w-[45%]  w-[95%] h-full md:text-[2rem] text-[1.75rem] font-[700] text-center font-domine">
              Helping teens get ahead whether it is college or career
            </h1>
            <p className="md:mt-[40px] mt-[20px] md:w-[57%]  w-[90%] md:text-center text-left font-Inter text-[1.25rem] font-[400]">
              From a young age, school has taught us that our academic success
              will be essential to getting jobs in the future. However, school
              often fails to teach us that many other factors, the most
              important being networking, can make or break our careers.
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper bg-[#FAFAFA]">
        <div className="wrapper-item md:py-[124px] py-[60px]">
          <h1 className=" text-center font-domine md:text-[2rem] text-[1.75rem] font-[700] px-4">
            Explore opportunities that help you get ahead
          </h1>
          <div className="md:mt-[50px] mt-[30px]  w-full h-full flex flex-col items-center">
            <div className="md:w-[50%] w-full flex md:flex-row flex-col items-center justify-between">
              <Tags title="Volunteering" />
              <Tags title="Internships" />
            </div>
            <div className="md:w-[60%] w-full flex md:flex-row flex-col items-center md:justify-between">
              <Tags title="Fellowships" />
              <Tags title="Scholarships" />
            </div>
            <div className="md:w-[80%] w-full flex items-center justify-center">
              <Tags title="Mentorships" />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper-item">
          <div className="pt-[3rem] flex flex-col items-center">
            <h3 className="  text-[1.75rem] pb-[10px] text-center lg:text-[3rem] w-[80%] md:w-full font-[500] px-4">
              See what millions of workers are saying
            </h3>
            <div className="pt-[1rem] w-full h-full flex flex-col items-center">
              <div className="max-w-[1296px] w-full">
                <Carousel />
              </div>

              <div className="w-full h-full flex justify-center py-8">
                <button className=" h-[50px] rounded-[8px] mx-4 px-[2rem] w-full md:w-[350px] border-2 border-bluee font-[500]  text-bluee hover:bg-indigo text-[1.1875rem]">
                  Explore the jobcase community
                </button>
              </div>
            </div>
          </div>
          </div>
      </div>
          {/*  */}
          <div className="pt-[2rem]">
        <h3 className="w-full   pb-[10px] font-FoundersA text-center md:text-[3rem] text-[2rem] leading-[38px] font-[500] px-4">
          Work with top employers & local businesses
        </h3>
        <div className="my-10 pb-[2rem] md:pb-[4rem] flex justify-center  ">
          <div className="grid md2:grid-cols-6  grid-cols-3 gap-5 items-center justify-center mx-4 w-full max-w-[1280px]  ">
            {images.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex items-center justify-center"
                >
                  <div className="md:w-[150px]   max-w-full max-h-full flex justify-center overflow-hidden md:h-[48px]">
                    <img src={item} alt="as" className="flex justify-center" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" bg-bluee ass  p-0 px-8  py-[3rem]  md:max-h-[162px] md:p-[3.5rem] flex items-center  justify-center flex-wrap">
        <p className="lg:text-[3.5rem] text-[3.5rem]   leading-[3.125rem] mt-4 mr-6 font-[700] font-cond   as text-white text-center">
          GET TOGETHER. GET AHEAD.
        </p>
        <button className="md:w-[160px] w-full h-[50px] bg-[#FC6142] mt-2 lg:mt-0 text-white font-Inter font-[700] rounded-[12px]">
          Join for free
        </button>
      </div>
      <div className="w-full h-full flex items-center justify-center md:p-[5rem] p-0 pt-[2rem] ">
        <div className="max-w-[1280px] w-full px-4 md:px-0 h-full ">
          <div className="w-full flex  ">
            <div className="md2:flex-[50%]   flex-[100%]">
              <h3 className="md2:text-[2.25rem] text-[1.5rem] font-[500] md:pb-[2.25rem] pb-[1rem] ">
                Discover free resources
              </h3>
              <div className=" w-full md:w-[660px] resources md:flex grid grid-cols-1 resources   flex-wrap ">
                {resources.map((item, index) => {
                 return(<>
                 <div key={index} className="mr-[1rem]">
                 <Chips2  title={item} />
                 </div>
                 </>)
                })}
              </div>
            </div>
            <div className="hidden md2:block w-full">
              <img src="/images/landingPage/last.svg" alt="as" />
            </div>
          </div>
          <Link
            href="#"
            className="text-bluee flex items-center text-[18px] font-[500]"
          >
            See them all
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="pt-[3rem]  md:px-[5rem] px-4 flex justify-center  items-center">
        <div className="max-w-[1280px] w-full">
          <h3 className="text-[2.25rem] w-full text-start  font-[500]  px-2">
            Trending topics
          </h3>
      <div className="pt-[1rem] w-full   pb-[5rem]">
        <ul className="flex  md:flex-wrap   overflow-x-scroll no-scrollbar ">
          {search2.map((item, index) => {
            return (
              <>
              <li key={index} className="mx-2">
              <Chips3
                  
                  title={item.title}
                  followers={item.followers}
                />
              </li>
              </>
            );
          })}
        </ul>
        <Link
          href="#"
          className="text-bluee flex items-center text-[19px]  font-[500] mt-1"
        >
          See what people are talking about
          <FiArrowRight className="ml-2" />
        </Link>
      </div>
        </div>
      </div>
     
    </>
  );
}

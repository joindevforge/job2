
import Card3 from "@/components/employee/Card3";
import Card4 from "@/components/employee/Card4";
import Carousel2 from "@/components/employee/Carousel2";
import Link from "next/link";
import React from "react";

const stroke = [
  {
    number: "120M+",
    desc: "registered members",
    desc2: "",
  },
  {
    number: "20M+",
    desc: "unique visitors per month",
    desc2: "",
  },
  {
    number: "#3",
    desc: "among US online career services¹",
    desc2:
      "¹Comscore Media Metrix®, Career Services and Development, Total Audience, December 2022, U.S.",
  },
];

const cardData = [
  {
    img: "/images/employee/SpotIcons1.png",
    title: "Community engagement",
    desc: "Our team and tools help you and our members get to know each other.",
  },
  {
    img: "/images/employee/SpotIcons2.png",
    title: "Job promotion",
    desc: "Our flexible, multichannel marketing helps you improve application conversion at any scale.",
  },
  {
    img: "/images/employee/Spoticon3-e1650856041379.png",
    title: "Brand awareness",
    desc: "Widen and diversify your audience with brand outreach that makes job promotion more effective.",
  },
  {
    img: "/images/employee/SpotIcons4-e1650855980575.png",
    title: "Hiring events",
    desc: "Draw registrants, drive attendance, and virtually host with no contract and our powerful platform.",
  },
];

const cardData2 = [
  {
    img: "/images/employee/kelly.png",
    desc: "We’ve held several virtual hiring events with Jobcase and they’ve been very successful. Having the capability for virtual events has been extremely helpful for efficiency and has really put candidates at ease. Jobcase is very responsive to our needs and great!at getting qualified candidates to show up.",
    name: "Tara Marcelle, VP Recruiting",
    company: "Kelly",
  },
  {
    img: "/images/employee/whole.png",
    desc: "Jobcase. There is no one like them! The urgency, the communication, the data, the scalability by brand and by location, the niche vs. the standard. They get it all. Jobcase understands our business and the deliverables of high volume hiring teams.",
    name: "Kat Barcelona, Senior Recruiter",
    company: "Whole Foods Market",
  },
  {
    img: "/images/employee/chews.png",
    desc: "obcase is a great partner in every sense of the word. Data driven. Passionate about results. Committed to client satisfaction. They were able to step right in, and help us not only meet, but exceed our hiring event goals.",
    name: "Colby Williamson, Director of Staffing",
    company: "Chewy.com",
  },
  {
    img: "/images/employee/integrity.png",
    desc: "Jobcase is a valuable partner in our candidate attraction strategy. They are able to deliver a large volume of candidates quickly.",
    name: "Todd Bavol, CEO",
    company: "Integrity Staffing Solutions",
  },
];

function Employee() {
  return (
    <>
      <div className="w-full md:mt-[85px] mt-[56px] h-full">
        <img
          src="/images/employee/employer-hero-2.png"
          alt="Picture of the author"
        />
        <div className="w-full h-full flex justify-center ">
          <div className="max-w-[980px] w-full h-full">
            <h1 className="md:text-[4.375rem] text-[3rem] md:mt-[4.6875rem] mt-[40px] font-[700] font-cond  text-bluee w-full text-center leading-[60px] ">
              WORKERS READY WHEN YOU ARE
            </h1>
            <div className="w-full h-full flex justify-center mt-[10px] ">
              <p className="text-center md:text-[1.25rem] text-[1rem] font-Inter w-[95%]  text-[#595959]">
                120M+ hourly, skilled and gig workers in our network and
                community means filling high volume jobs is faster than ever
                before. Let us help you get started today.
              </p>
            </div>
            <div className="w-full h-full flex items-center justify-center font-FoundersA text-[1.1875rem] font-[500] pt-10">
              <div className="lg:w-full w-[90%] h-full flex md:flex-row  flex-col  justify-center">
                <Link
                  href="#"
                  className="py-[12px] px-[32px] bg-[#fc6142] h-[50px] flex justify-center items-center  md:mx-[25px] md:w-auto w-full rounded-[8px] text-white font-500"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="py-[12px] px-[32px] border-2 md:mx-[25px] border-bluee text-bluee h-[50px] md:w-auto w-full flex items-center justify-center mt-6 md:mt-0 rounded-[8px]  font-500"
                >
                  Post a Job
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F4F4] w-full mt-14 md:py-[5rem] py-[2.5rem]  flex justify-center items-center overflow-hidden  lg:px-[5.625rem] px-[1rem]">
          <div className="  w-full  grid md:grid-cols-3 grid-cols-1 gap-5 ">
            {stroke.map((item, index) => {
              return (
                <>
                  <div key={index} className="">
                    <p className="md:text-[2.25rem] font-Founders text-[2rem] font-[500] text-bluee text-center">
                      {item.number}
                    </p>
                    <p className="text-[#595959] font-Inter font-[400] text-[1rem] text-center">
                      {item.desc}
                    </p>
                    <p className="mt-3 text-[8px] font-Inter md:pb-5 w-full text-center text-[#595959] ">
                      {item.desc2}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/*  carding start */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="max-w-[1440px] md:pt-[40px] md:px-[40px] pt-[1rem] px-[1rem] pb-0 mx-auto flex flex-col items-center  w-full h-full">
            <div className="flex justify-between md:flex-row flex-col-reverse mx-auto my-0 max-w-[1247px] w-full">
              <div className="max-w-[674px] w-full h-full">
                <h2 className="mt-[2rem] mb-[1.5rem] md:max-w-[565px]  text-[#2C04BD] max-w-full w-full md:text-[2.5rem] text-[2rem]  font-[700] font-domine">
                Where <span className="text-[#FC6243]">networking</span> meets <span className="text-[#FC6243]">teenage spirit</span>!
                </h2>
                <p className=" md:max-w-[546px] max-w-full  font-Inter font-[400] text-[1.125rem] text-[#262626]  m-0 ">
                As the perfect blend of LinkedIn and the vibrant spirit of
teenagers, Teencept offers a unique space for teens to
connect, collaborate, and blossom. Packed with exciting
volunteering opportunities and interactive workshops, this
innovative platform not only broadens horizons but also
empowers young minds to make a meaningful impact in their
communities.
                </p>
              </div>
              <div className="max-w-[352px] w-full flex justify-center md:mr-[130px] pt-8 md:pt-0">
                <img
                  src="/images/desk.png"
                  alt="hero"
                  className="w-[202px] md:w-full"
                />
              </div>
            </div>
            {/* second  */}
            <div className="flex  md:flex-row-reverse flex-col-reverse mx-auto my-0 max-w-[1247px] w-full pt-[40px] md:pt-[80px]">
              <div className="max-w-[613px] w-full h-full   flex  items-center">
                <div className="w-full h-full ">
                <h2 className="mt-[2rem] mb-[1.5rem] md:max-w-[565px]  text-[#2C04BD] max-w-full w-full md:text-[2.5rem] text-[2rem]  font-[700] font-domine">
                Where <span className="text-[#FC6243]">networking</span> meets <span className="text-[#FC6243]">teenage spirit</span>!
                </h2>
                <p className=" md:max-w-[546px] max-w-full  font-Inter font-[400] text-[1.125rem] text-[#262626]  m-0 ">
                As the perfect blend of LinkedIn and the vibrant spirit of
teenagers, Teencept offers a unique space for teens to
connect, collaborate, and blossom. Packed with exciting
volunteering opportunities and interactive workshops, this
innovative platform not only broadens horizons but also
empowers young minds to make a meaningful impact in their
communities.
                </p>
                </div>
              </div>
              <div className="max-w-[352px] md:ml-[116px] md:mr-[130px] w-full flex justify-center pt-8 md:pt-0">
                <img
                  src="/images/desk.png"
                  alt="hero"
                  className="w-[202px] md:w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/*  card end */}
        <div className="w-full h-full flex justify-center ">
          <div className="w-full max-w-[1440px]  h-full md:pt-[160px] pt-[80px]  md:px-[40px] px-4 ">
            <h2 className="md:text-[3rem]  text-[2.125rem] lg:leading-[3rem] leading-[2rem] font-[500] text-center font-Founders w-full ">
              How we connect you with workers
            </h2>
            <div className="w-full h-full flex justify-center max-w-[1130px] mx-auto my-0 mb-[120px]">
              <div className="w-full  grid sm:grid-cols-2   grid-cols-1 ">
                {cardData.map((item, index) => {
                  return (
                    <>
                      <div className="w-full  flex justify-center h-full ">
                        <Card3
                          key={index}
                          title={item.title}
                          desc={item.desc}
                          img={item.img}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-full  ">
          <p className="md:text-[2.25rem] pb-[2.5rem] text-[2rem] lg:leading-[3rem] leading-[2rem] font-[500] text-center font-Founders w-full">
            Tap into the power of the Jobcase community
          </p>
          <div className="w-full h-full flex justify-center items-center pb-20">
            <Link
              href="#"
              className="py-[12px] mx-4 px-[40px] font-bold flex items-center justify-center bg-[#fc6142] h-[50px] md:w-auto w-full rounded-[8px] text-white font-500"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="md:py-[5rem] py-[2.5rem] md:px-[3.75rem] px-[1rem] bg-[#f4f4f4] flex justify-center">
          <div className="max-w-[1440px] w-full h-full p-0">
            <h2 className="mb-[2rem]  font-Founders md:text-[36px] text-[28px] font-[500]">
              What our clients are saying:
            </h2>
            <div className=" hidden md:grid  grid-cols-2 gap-10">
              {cardData2.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-full flex justify-center"
                  >
                    <Card4
                      name={item.name}
                      img={item.img}
                      desc={item.desc}
                      company={item.company}
                    />
                  </div>
                );
              })}
            </div>
            <div className="w-full h-full block md:hidden">
                <Carousel2/>
            </div>
            <div className="w-full mt-10 md:mt-16">
             <p className="text-center font-Inter text-[1rem] font-[400]">“The four current Workday Venture partners are some of the strongest recruiting technologies in the game right now.”<br/>
             <strong className="font-[600] font-Inter text-[1rem] text-center">– Tim Sackett</strong></p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Employee;

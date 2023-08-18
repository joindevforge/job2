import React from 'react'

function Modallog({setModel,Model}) {
  return (
    <>
        <div className="w-full h-screen fixed  top-0 z-30 ">
          <div className=" w-full fixed top-0 h-screen bg-black z-40 opacity-70" />
          <div className="fixed top-0 w-full h-full z-50 flex items-center justify-center">
            <div className="w-[576px]  h-[416px]  bg-white rounded-[20px] flex flex-col  items-center">
              <div className="w-full h-[50px] flex justify-end items-center">
                <button
                  onClick={() => {
                    setModel(!Model);
                  }}
                  className="w-[50px] h-[50px] flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className=" w-full h-full px-[5rem]">
                <p className=" font-Domine tracking-[-0.015em]  text-center font-bold  text-[1.5rem]">
                  Login
                </p>
                <div className="mt-[2rem] mb-[1rem] w-full font-Inter text-center">
                  Enter your registered email
                </div>
                <input
                  type="email"
                  className="py-[17px] px-[18px] rounded-[20px] w-full bg-[#2c2c2d0f]"
                  placeholder="example@email.com"
                />
                <div className="mt-[5rem] !text-[0.75rem] font-Inter text-center opacity-0">
                  next otp
                </div>
                <button className=" rounded-[20px] bg-[#2c2c2d] font-Domine font-bold opacity-70  text-[#fff] py-[16px] px-[54px] text-[14px] w-full h-[56px]">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Modallog
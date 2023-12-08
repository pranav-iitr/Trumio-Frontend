export default function Main() {
  return (
    <div className="w-[100vw] h-[70vh] bg-red-300 flex px-[5vw] justify-between ">
      <div className="flex flex-col justify-center items-start w-[50%] bg-green-400 ">
        <div className="text-[#515151] leading-[3.75rem] font-[lato] text-[3.5rem] font-semibold">
          Upskill through <br />
          <div className="text-[#368DFF] font-[lato]">
            Virtual Job Simulations
          </div>
        </div>
        <div className="text-[#676D82] leading-[1.2rem] font-semibold text-[1rem]">
          Gain hands-on experience and excel in real-world scenarios for your
          dream <br />
          career with our platform's job simulations, crafted by top employers.
        </div>
        <div className="ripple mt-4 mb-16">
          <div
            style={{
              boxShadow:
                "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #0F77FF",
            }}
            className=" cursor-pointer text-[#FFF]  font-[lato] flex items-center bg-[#0F77FF]  h-8 pb-[4px]   px-4 rounded "
          >
            Explore
          </div>
        </div>
        <div className="text-[#515151]" >
        Our Partners :
        </div>
        <img className="w-[30vw]" src="/imgs/partners.png" />
      </div>
      <div className="flex flex-col justify-center bg-green-200 items-center w-[50%] ">
        <img className="mr-[-10vw]"  src="/imgs/mainBanner.png" />
      </div>
    </div>
  );
}

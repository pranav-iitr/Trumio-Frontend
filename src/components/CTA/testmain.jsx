export default function Testmain() {
    return (
      <>
        <img src="./imgs/secondbanner.jpeg" className="w-[100vw] h-[70vh]" />
        <div className="w-[100vw] h-[70vh] flex px-[5vw] justify-between mt-[-40rem]">
          <div className="flex flex-col justify-center items-start w-[50%]">
            <div className="bg-green ">
              <img
                className="w-40 bg-cover bg-center bg-no-repeat bg-green"
                src="./imgs/bcgs.png "
              />
            </div>
            <div className="text-white leading-[3.75rem] font-[lato] text-[3.5rem] font-semibold">
              Introduction of <br />
              <div className="text-white font-[lato]">Strategy Consulting</div>
            </div>
            <div className="text-white leading-[1.2rem] font-semibold text-[1rem] mt-3">
              Gain hands-on experience and excel in real-world scenarios for
              your dream
              <br /> career with our platform's job simulations, crafted by top
              employers.
            </div>
            <div className="ripple mt-4 mb-16">
              <div className=" cursor-pointer text-[#0F77FF]  font-[lato] flex font-bold items-center bg-white h-8 pb-[4px]  px-5 rounded ">
                Register
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
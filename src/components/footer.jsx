

export default function Footer() {
  return (
    <>
      <div
        className=" w-[100vw] py-16"
        style={{
          background:
            "var(--linear-linear-50, linear-gradient(134deg, #FFF 29.52%, #C7E6FF 118.05%))",
        }}
      >
        <div className=" flex  justify-center mb-32">
          <h1 className="text-[2.2vw] text-[#515151] font-bold">
            <span className="">Just</span>
            <span className="text-[#0F77FF]"> three</span>
            <span className=""> simple steps</span>
          </h1>
        </div>
        <div className=" flex gap-20 flex-wrap justify-center mt-12">
          <div className="w-[28rem] h-[28vh]  rounded-md bg-white flex flex-col justify-center items-center border border-solid border-blue-400 border-opacity-50 p-20">
            <img src="./imgs/ellipse.png" className="w-16 h-16 mt-[-5rem]" />
            <h2 className="text-[#0F77FF] font-bold text-[1.2vw] mt-[-3rem]">
              1
            </h2>
            <img src="./imgs/icon1.png" className="mt-10 w-20 h-20" />
            <h1 className="mt-4 text-[1.4vw] text-[rgb(103,109,130)] font-semibold">
              Choose your
            </h1>
            <h1 className=" text-[1.4vw] text-[rgb(103,109,130)] font-semibold">
              Job Simulation
            </h1>
          </div>
          <div className="w-[28rem]  h-[28vh] rounded-md  bg-white flex flex-col justify-center items-center border border-solid border-blue-400 border-opacity-50 p-20 ">
            <img src="./imgs/ellipse.png" className="w-16 h-16 mt-[-5rem]" />
            <h2 className="text-[#0F77FF] font-bold text-[1.2vw] mt-[-3rem]">
              2
            </h2>
            <img src="./imgs/icon2.png" className=" mt-10 w-20 h-20" />
            <h1 className="mt-4 text-[1.4vw] text-[rgb(103,109,130)] font-semibold">
              Complete the
            </h1>
            <h1 className=" text-[1.4vw] text-[rgb(103,109,130)] font-semibold">
              given tasks
            </h1>
          </div>
          <div className="w-[28rem]  h-[28vh] rounded-md bg-white flex flex-col justify-center items-center border border-solid border-blue-400 border-opacity-50 p-20">
            <img src="./imgs/ellipse.png" className="w-16 h-16 mt-[-5rem]" />
            <h2 className="text-[#0F77FF] font-bold text-[1.2vw] mt-[-3rem]">
              3
            </h2>
            <img src="./imgs/icon3.png" className=" mt-10 w-20 h-20" />
            <h1 className="mt-4 text-[1.4vw] text-[rgb(103,109,130)] font-semibold">
              Get AI based reviews
            </h1>
            <h1 className=" text-[1.4vw] text-[rgb(103,109,130)] font-semibold">
              on your submissions
            </h1>
          </div>
        </div>
        <div className="flex justify-between ml-20 mr-20 mt-32">
          <div className="w-[21vw]">
            <img src="./imgs/logo.png" className="w-40" />
            <h1 className="mt-6">
              Trumio is headquartered in San Jose, California. Our team works
              virtually from across the world.
            </h1>
            <h1 className="mt-6">
              <span className="">For questions and support: </span>
              <span className="font-semibold text-[#0F77FF]">
                support@trumio.ai
              </span>
            </h1>
          </div>
          <div className=" flex gap-20 ">
            <div className="flex-col">
              <h1 className="font-semibold">Company</h1>
              <h2 className="mt-8">About Us</h2>
              <h2 className="mt-4">Our Blog</h2>
            </div>
            <div className="flex-col">
              <h1 className="font-semibold">Trumio AI</h1>
              <h2 className="mt-8">How it works</h2>
              <h2 className="mt-4">Why trumio</h2>
              <h2 className="mt-4">Use Cases</h2>
            </div>
            <div className="flex-col">
              <h1 className="font-semibold">Quick Links</h1>
              <h2 className="mt-8">User Agreement</h2>
              <h2 className="mt-4">Terms & Conditions</h2>
              <h2 className="mt-4">Privacy Policy</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Tfooter(){
    return (
      <>
      <div className="mt-28">
        <img src="./imgs/tfooter.png" className=""/>
      </div>
        <div className="flex justify-between ml-20 mr-20 mt-32 mb-10">
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
      </>
    );
}
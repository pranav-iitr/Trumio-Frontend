export default function Desktop() {
  return (
    <div className="w-[100%] flex justify-between h-20  content-center px-[5vw] ">
      <div className="flex items-center "  > <img className="w-28 h-7" src={"/imgs/logo.png"} /></div>
      <div className="flex grow-[0.8] items-center justify-evenly text-[#515151] font-[lato] ">
        <span>Home </span>
        <span>Upskill </span>
        <span>Why Trumio </span>
        <span>How it Works </span>
        <span>Use Cases </span>
        <span>About </span>
        <span>Blog </span>
      </div>
      <div className="flex gap-5 items-center ">
        <div className="text-[#515151] font-[lato]">Login </div>
        <div
          style={{
            boxShadow:
              "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #0F77FF",
          }}
          className="text-[#FFF] cursor-pointer font-[lato] flex items-center bg-[#0F77FF]  h-8 pb-[4px] px-2 rounded "
        >
          
          Join Our Beta
        </div>
      </div>
    </div>
  );
}

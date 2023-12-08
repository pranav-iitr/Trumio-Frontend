export default function Card(props) {

  return (
    <div className="w-[21rem] h-[13.2rem] flex items-start flex-col border-2 rounded-lg border-[#DEDEDE] ">
      <div className="flex-[0.6] w-[100%] gap-5 flex flex-col items-between justify-start p-3">
        <img src="/svg/apstroph.svg" className="!w-5 h-5 " />
        <div className="text-[#333] text-[0.75rem] text-left font-normal">
          {props.feedback}
        </div>
      </div>
      <div className="bg-[#F3F9FF] w-[100%] py-2 flex-[0.4] items-center flex justify-start gap-4 font-bold font-[lato] ">
        <img className="!w-10 h-10 ml-5" src={props.image} />
        <div className="flex flex-col justify-between items-start">
          <p className="text-[#1A3129] " >{props.name}</p>
          <p className="text-[#8B8B8B]">{props.collage}</p>
        </div>
      </div>
    </div>
  );
}

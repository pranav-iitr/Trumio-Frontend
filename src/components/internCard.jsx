import React from "react";

export default function InternCard(props) {

  return (
    <div className=" w-[18rem]  bg-[#E6E6E6] rounded-xl flex flex-col z-[15] ">
      <img className="z-[10] rounded-t-xl  " src={props.data.image} />
      <div className="flex flex-col text-[#454545] px-[0.8rem] gap-[0.2rem] py-[0.4rem] font-[lato] pb-4 ">
        <div className="font-xl">{props.data.company}</div>
        <div className="font-xxl font-bold">{props.data.title}</div>
        <div className="flex gap-3">
          <div className="font-xl flex gap-1  items-center">
            <img src="/svg/tag.svg" className="inline-block" />
            <div>{props.data.tag}</div>
          </div>
          <div className="font-xl flex gap-1  items-center">
            <img src="/svg/redMeter.svg" className="inline-block" />
            <div>{props.data.difficulty}</div>
          </div>
          <div>{props.data.time}</div>
        </div>
      </div>
    </div>
  );
}

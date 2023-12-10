import { useState, useEffect } from "react";
import { getInternData } from "@/hooks/internship";
import InternCard from "@/components/internCard";
import LineChart1 from "@/pages/lineChart1.js"
import LineChart2 from "@/pages/lineChart2.js"

export default function Desktop() {
  const [internData, setInternData] = useState([]);
  useEffect(() => {
    getInternData(setInternData);
    // setInternData(res.data);
  }, []);

  const Random = [
    {
      id: 0,
      course_name: "course",
      no_of_registrations: 10,
      no_of_completions: 10,
      view: "#"

    },
    {
      id: 1,
      course_name: "course",
      no_of_registrations: 10,
      no_of_completions: 10,
      view: "#"

    },
    {
      id: 2,
      course_name: "course",
      no_of_registrations: 10,
      no_of_completions: 10,
      view: "#"

    },
    {
      id: 3,
      course_name: "course",
      no_of_registrations: 10,
      no_of_completions: 10,
      view: "#"

    },
    {
      id: 4,
      course_name: "course",
      no_of_registrations: 10,
      no_of_completions: 10,
      view: "#"

    },

  ]
  return (
    <div className="w-[85vw] flex-col flex h-[auto] pl-[28px] pr-[40px] bg-[#F5FBFF;]">
      <div className="flex w-[100%] justify-between pt-[30px]">
        <div>
          <div className="text-sm text-[#353535]">Hi Admin,</div>
          <div className="text-2xl font-bold text-[#212121]">Welcome to Trumio!</div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className=" border-solid border-">
            <input
              type="text"
              placeholder={"Search by anything"}
              className="w-[20rem] h-[3rem] rounded-lg"
            />
          </div>
          <div>
            <img src="/svg/bell.svg" alt="bell" />
          </div>
          <div><img src="/imgs/sampleuser.png" alt="usericon" /></div>
        </div>
      </div>


      <div>
        <div className="font-bold text-xl pt-[40px] pb-[20px]">
          My Courses
        </div>
        <div>
          <div className="flex justify-start gap-16 w-[80vw] flex-wrap">
            {internData.map((data) => (
              <InternCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>


      <div>
        <div className="flex items-center w-[72vw] justify-between pt-[40px] pb-[20px]">
          <div className="font-bold text-xl">
            Courses Info
          </div>
          <div>
            <button className="h-[42px] w-[120px] bg-[#318EFF] text-[white] font-bold rounded-lg">+ Add course </button>
          </div>
        </div>
        <div>

          <div className="h-[50vh] w-[72vw] bg-white rounded-xl border border-solid border-blue-300">
            <div className="mx-10 h-[5.6vh] items-center text-[#797979] flex justify-between">
              <div className="text-[1vw]">Course</div>
              <div className="text-[1vw] pl-[0] ">Number of registrations</div>
              <div className="text-[1vw] ">Number of completions</div>
              <div className="text-[1vw]"> </div>
              <div className="text-[1vw]"> </div>
            </div>
            <hr className="w-[70vw] ml-[14px]" />
            <div>
             {Random.map((data) => {
              return(
                <>
<div key={data.id} className="mx-10 h-[5.5vh] justify-between items-center flex ">
                <div>{data.course_name}</div>
                <div className="ml-[2vw]">{data.no_of_registrations}</div>
                <div className="ml-[11.6vw]">{data.no_of_completions}</div>
                <div className="ml-[6vw] text-[#318EFF] underline"><a href={data.view}>view</a></div>
                <div><button className="w-[6rem] h-[1.7rem] bg-[#E63838]/10 rounded-lg font-bold text-[#E63838]">delete</button> </div>
              </div>
              <hr className="w-[70vw] ml-[14px]" />
                </>
              )
             })}
              
            </div>

          </div>
        </div>
      </div>

      <div className="flex justify-between w-[72vw] mt-[40px]">
        <div className="flex flex-col">
          <div className="font-bold text-xl">
            Course completion rate
          </div>
          <div className="pt-[30px]">
            <LineChart1 />
          </div>
        </div>


        <div div className="flex flex-col">
          <div className="font-bold text-xl">
            Number of students registered
          </div>
          <div className="pt-[30px]">
            <LineChart2 />
          </div>
        </div>
      </div>
    </div>
  );
}

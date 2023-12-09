import { useState } from "react";
const data = [
  {
    id: 1,
    title: "Task 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "todo",
    time: "2 hours",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "todo",
    time: "2 hours",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "todo",
    time: "2 hours",
  },
  {
    id: 4,
    title: "Task 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "todo",
    time: "2 hours",
  },
  {
    id: 5,
    title: "Task 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "todo",
    time: "2 hours",
  },
];

const reso = [
  { file: "/imgs/bcg.png", name: "r1" },
  { file: "/imgs/bcg.png", name: "r1" },
  { file: "/imgs/bcg.png", name: "r1" },
];

export default function Index() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="w-[100vw] max-w-[65rem]  h-[30rem] flex  ">
      <div  styles={{scrollbarFaceColor: "#000000" }} className=" flex-[0.25] overflow-scroll ">
        {data.map((item, id) => {
          return (
            <div
              onClick={() => {
                setSelected(id);
              }}
              className=""
            >
              <div className={`  flex w-full h-48 z-20 `}>
                <div className="flex-[0.3] flex flex-col items-end ">
                  <div
                    className={`h-[1.5rem] w-[2px]  mr-[1.4rem] ${
                      id != 0 ? "bg-[#368DFF]" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-12 font-[lato] font-bold text-2xl  h-12 ${
                      selected == id
                        ? "bg-[#368DFF] text-[#FFF] "
                        : " bg-[#FFF] text-[#368DFF]  "
                    } rounded-[16rem] border-2 border-[#368DFF] flex justify-center items-center `}
                  >
                    {item.id}
                  </div>
                  <div
                    className={`grow w-[2px] mr-[1.4rem] ${
                      id != data.length - 1 ? "bg-[#368DFF]" : ""
                    } `}
                  ></div>
                </div>

                <div className="flex-[0.7] pt-8 pr-3">
                  <div className="ml-2">
                    <div className="font-[lato] font-bold text-xl text-[#368DFF]">
                      {item.title}
                    </div>
                    {selected == id && (
                      <div className="font-[lato] text-sm text-[#676D82]">
                        {item.description}
                      </div>
                    )}
                    <div className="flex gap-2 text-[#676D82] font-regular">
                      {" "}
                      <img src="/svg/Clock.svg" /> <div> {item.time} </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`z-10 -mt-48 ${
                  selected == id ? "bg-[#4394FF] opacity-10 " : ""
                } flex w-full h-48`}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="flex-[0.75] font-[Be Vietnam Pro] flex flex-col gap-5 overflow-scroll justify-start items-start px-8 py-4">
        <div className=" text-[#383838] font-bold text-2xl ">Task Overview</div>
        <div className="w-[100%] flex justify-between">
          <div className="flex flex-col border border-[#368DFF] w-[48%] gap-2 rounded px-8 py-4 ">
            <img src="/svg/education.svg" className="w-12 h-12" />
            <div className="text-[#368DFF] font-semibold text-xl">
              {" "}
              What will you get{" "}
            </div>
            <div className="text-[#676D82] font-regular text-sm">
              {[
                "Lorem ipsum dolor sit amet, consectetur",
                "Lorem ipsum dolor sit amet, consectetur",
                "Lorem ipsum dolor sit amet, consectetur",
              ].map((item) => {
                return (
                  <div className="flex gap-2">
                    <img src="/svg/Check.svg" className="w-4 h-4" />
                    <div> {item} </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col border border-[#368DFF] w-[48%] gap-2 rounded px-8 py-4 ">
            <img src="/svg/work.svg" className="w-12 h-12" />
            <div className="text-[#368DFF] font-semibold text-xl">
              {" "}
              What will you learn
            </div>
            <div className="text-[#676D82] font-regular text-sm">
              {[
                "Lorem ipsum dolor sit amet, consectetur",
                "Lorem ipsum dolor sit amet, consectetur",
                "Lorem ipsum dolor sit amet, consectetur",
              ].map((item) => {
                return (
                  <div className="flex gap-2">
                    <img src="/svg/Check.svg" className="w-4 h-4" />
                    <div> {item} </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" text-[#383838] font-bold text-2xl ">Your Task</div>
        <div className="text-[#383838] font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          Praesent libero. Sed cursus ante dapibus diam. Sed Integer nec odio.
          Praesent libero. Sed cursus ante dapibus diam. Sed Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam. Sed Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
          cursus ante dapibus diam. Sed Integer nec odio. Praesent libero. Sed
          cursus ante dapibus diam. Sed
        </div>
        <div className=" text-[#383838] font-bold text-2xl ">Resources</div>
        <div className="flex gap-4">
          {reso.map((item) => {
            return (
              <div className="flex flex-col ">
                <img src="/imgs/samplePdf.png" className="w-32 h-32" />
                <div className="font-semibold px-1  justify-between text-[#676D82] bg-[#FFF] flex items-center font-regular text-sm py-1">
                  <div className="flex gap-2">
                    <img src="/svg/adobe.svg" className="w-6 h-6" />
                    {item.name}
                  </div>
                  <img src="/svg/download.svg" className="w-6 h-6" />
                </div>
              </div>
            );
          })}
        </div>
        <div className=" text-[#383838] font-bold text-2xl ">
          Upload Your Task
        </div>
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-[#368DFF] border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100  "
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-[#368DFF] "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-[#368DFF] ">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-[#368DFF] ">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
}

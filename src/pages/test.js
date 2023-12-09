import { useRef } from "react";
import Testmonial from "@/components/CTA/Testmonial";
import Testmain from "@/components/CTA/testmain";
import Desktop from "@/components/Navbar/desktop";
import Task from "../components/CTA/Task";
import Overview from "../components/CTA/Overview";
import Tfooter from "@/components/testfooter";
export default function Test() {
  const overviewRef = useRef(null);
  const taskRef = useRef(null);
  const TestinomialRef = useRef(null);
   const handleTabClick = (ref) => {
     ref.current.scrollIntoView({
       behavior: "smooth",
       block: "start",
     });
   };
  return (
    <div>
      <Desktop />
      <Testmain />
      <div className="flex mt-[3rem]  sm:gap-48 mx-auto">
        <div
          className="cursor-pointer p-10 text-[#515151] ml-auto hover:text-[#0F77FF] text-[1.4vw]"
          onClick={() => handleTabClick(overviewRef)}
        >
          Overview
        </div>
        <div
          className="cursor-pointer p-10 text-[#515151] hover:text-[#0F77FF] text-[1.4vw]"
          onClick={() => handleTabClick(taskRef)}
        >
          Tasks
        </div>
        <div
          className="cursor-pointer p-10 text-[#515151] hover:text-[#0F77FF] mr-auto text-[1.4vw]"
          onClick={() => handleTabClick(TestinomialRef)}
        >
          Reviews
        </div>
      </div>
      <div ref={overviewRef}>
        <Overview />
      </div>
      <div ref={taskRef}>
        <Task />
      </div>
      <div ref={TestinomialRef}>
        <Testmonial />
      </div>
      <Tfooter />
    </div>
  );
}

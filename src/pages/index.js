import { useState, useContext, useEffect } from "react";

import Desktop from "@/components/Navbar/desktop";
import { Inter } from "next/font/google";
import Main from "@/components/CTA/main";
import InternCard from "@/components/internCard";
import Testmonial from "@/components/CTA/Testmonial";
import Footer from "@/components/footer";
import SideNavbar from "@/components/SideNavbar/Desktop"
import Client from "@/components/Client/Client"
import { getInternData } from "@/hooks/internship";
import Data from "./data"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [internData, setInternData] = useState([]);
  useEffect(() => {
    getInternData(setInternData);
    // setInternData(res.data);
  }, []);

  return (
    <div className="flex ">
      <Data/>
      {/* <SideNavbar/> */}
      {/* <Client/> */}
    </div>
    // <main className={`flex flex-col ${inter.className}`}>
    //   {/* <Desktop />
    //   <Main /> */}
    //   <div className="mt-8 flex flex-col items-center mb-16">
    //     <h2 className="text-[2.2vw] text-[#515151] font-bold text-center">
    //       Choose the right virtual job simulation for you
    //     </h2>
    //     <div
    //       style={{
    //         background:
    //           "var(--linear-linear-50, linear-gradient(134deg, #FFF 29.52%, #C7E6FF 118.05%))",
    //       }}
    //       className="w-[100vw] flex justify-center py-16 flex-col items-center "
    //     >
    //       <div className="flex justify-start gap-16 w-[90vw] flex-wrap">
    //         {internData.map((data) => (
    //           <InternCard key={data.id} data={data} />
    //         ))}
    //       </div>
        
    //         <div className="ripple mt-16">
    //           <div
    //             style={{
    //               boxShadow:
    //                 "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #0F77FF",
    //             }}
    //             className=" cursor-pointer text-[#FFF]  font-[lato] flex items-center bg-[#0F77FF]  h-8 pb-[4px]   px-4 rounded "
    //           >
    //             Explore
    //           </div>
    //         </div>
          
    //     </div>
    //   </div>
    //   {/* <Testmonial />
    //   <Footer /> */}
    // </main>
  );
}

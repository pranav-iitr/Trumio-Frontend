'use client'
import { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import { getTestmonialData } from "@/hooks/testmonial";
import { paginate } from "@/utils";
import Card from "./card";

function Index() {
  const [testmonial, setTestmonial] = useState([]);
  const [width, setWidth] = useState(1820 )
  const handleResize = () => setWidth(window.innerWidth)
 
  useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    getTestmonialData((data)=>{setTestmonial(paginate(data, width>1270 ? 3 : width>600 ? 2 : 1 ))});

  }, [width]);
  
  // getTestmonialData(setTestmonial)

  return (
    <div>
      <div className="mt-8 flex flex-col items-start px-[5vw]  mb-16">
        <h2 className="text-[2.2vw] text-[#515151] font-bold text-center mb-4">
          Testimonials of previous attendees
        </h2>
        <Carousel 
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        className=" w-[80vw] ml-[5vw]  flex "
        showIndicators={false}
  
       
        >
          {testmonial.map((item) => {
              return(
                <>
                <div className="flex justify-evenly " >
                  {item.map((data)=>{
                    return(
                      <Card {...data}/>
                      
                    )
                  })}
                </div>
                </>
              )
          })}
        </Carousel>
        
      </div>
    </div>
  );
}

export default Index;

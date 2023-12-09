import {React,useState} from "react";
import Slider from '@mui/material/Slider';
import { withStyles } from '@material-ui/core/styles';

const CustomSlider = withStyles({
    thumb: {
      backgroundColor: 'blue',
      border:'2px',
      borderColor:'gray',
    //   '&:hover': {
    //     backgroundColor: 'orange',
//       },
    },
    '& .MuiSlider-valueLabel': {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: 'bold',
        padding: '5px',

      },
      
  })(Slider);

export default function Proficiencypage() {
    const [value0, setValue0] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
  

  const handleChange0 = (event, newValue) => {
    setValue0(newValue);
  };
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };
  const handleChange3 = (event, newValue) => {
    setValue3(newValue);
  };
    const props=[
        {value:'i'},
    {value:'o'},
{value:'u'},
{value:'p'},
    ]
    return (
        <>
            <div
                style={{
                    background:
                        "var(--linear-linear-50, linear-gradient(134deg, #FFF 29.52%, #C7E6FF 118.05%))",
                }} className="flex-col justify-around ">
                <div className="w-2/5 m-auto text-center pt-4 pb-6">
                <img src="/imgs/logo.png"  className="w-28 h-7  m-auto " />
                </div>
                <div className="h-7 border-2 h-full w-2/5 m-auto text-center pt-10 pl-10 pr-10 pb-10 mb-10 mt-10 rounded-3xl bg-white">
                    <div className=" font-bold text-4xl">
                        Choose the proficiency
                    </div>
                    <div className="pt-2 text-xl ">
                        Select how proficient the student should be
                    </div>
                    <div className="mt-6 text-left font-medium ">
                     
                        <div>
                       A
                        </div>
                        <CustomSlider

value={value0} 
onChange={handleChange0}
                           
                            valueLabelDisplay="auto"
                            step={10}
                            marks
                            min={10}
                            max={110}
                           
                            valueLabelFormat={(value) => `${value}`}
        // valueLabelFormat={(value) => <span style={{ color: 'blue', backgroundColor: 'width', borderRadius:'2rem' }}>{value}</span>}
                        />

                    
                    </div>
                    <div className="mt-6 text-left font-medium ">
                     
                        <div>
                       A
                        </div>
                        <CustomSlider

value={value1} 
onChange={handleChange1}
                           
                            valueLabelDisplay="auto"
                            step={10}
                            marks
                            min={10}
                            max={110}
                           
                            valueLabelFormat={(value) => `${value}`}
        // valueLabelFormat={(value) => <span style={{ color: 'blue', backgroundColor: 'width', borderRadius:'2rem' }}>{value}</span>}
                        />

                    
                    </div>
                    <div className="mt-6 text-left font-medium ">
                     
                        <div>
                       A
                        </div>
                        <CustomSlider

value={value2} 
onChange={handleChange2}
                           
                            valueLabelDisplay="auto"
                            step={10}
                            marks
                            min={0}
                            max={100}
                           
                            valueLabelFormat={(value) => `${value}`}
        // valueLabelFormat={(value) => <span style={{ color: 'blue', backgroundColor: 'width', borderRadius:'2rem' }}>{value}</span>}
                        />
                        <div className="mt-6 text-left font-medium ">
                     
                     <div>
                    A
                     </div>
                     <CustomSlider

value={value3} 
onChange={handleChange3}
                        
                         valueLabelDisplay="auto"
                         step={10}
                         marks
                         min={0}
                         max={100}
                        
                         valueLabelFormat={(value) => `${value}`}
     // valueLabelFormat={(value) => <span style={{ color: 'blue', backgroundColor: 'width', borderRadius:'2rem' }}>{value}</span>}
                     />

                 
                 </div>

                    
                    </div>
               
                <button type="submit" className="bg-blue-500 text-white w-full text-[#474747] rounded-md p-3 pl-6 
                    mt-8"
                   
                    >Next</button>
                     </div>
            </div>
        </>
    )
}




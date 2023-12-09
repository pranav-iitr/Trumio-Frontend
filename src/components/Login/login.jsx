import {React,useState} from "react";
import Select from 'react-select';
import { Redirect } from 'react-router-dom';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export default function LoginPage(){
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [jobrole,setJobrole]=useState('');
    const [experience,setExperience]=useState('');
    const handleSubmit = (e) => {
   
        e.preventDefault();
        // Your code to fetch data goes here
        return <Redirect to={{ pathname: './proficiency.jsx', state: { data: selectedOptions } }} />;
      };
    return(
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
                    Welcome to Truimo
                </div>
                <div  className="pt-2 text-xl ">
                    Enter the Information Regarding Project
                </div>
                <div className="mt-8 text-left font-semibold">
                    Job Role
                </div>
                 <div>
                    <input placeholder="Enter Job Title" type='text'className="bg-white w-full text-[#474747] rounded-md p-3 pl-6 
                    border-slate-300 border-2 mt-2" 
                    value={jobrole} 
                    onChange={(e) => setJobrole(e.target.value)}
                     />
                 </div>
                 <div className="mt-6 text-left font-semibold" >
                    Experience(in years)
                 </div>
                 <div>
                    <input placeholder="Enter your experience" type='text'className="bg-white w-full text-[#474747] rounded-md p-3 pl-6 
                    border-slate-300 border-2 mt-2"
                    value={experience} 
                    onChange={(e) => setExperience(e.target.value)}
                    />
                 </div>
                 <div className="mt-6 text-left font-semibold">
                    Skills
                 </div>
                 <div>
                    {console.log(experience)}
                 <Select options={options} placeholder="Your Skills"
                  value={selectedOptions} 
                  onChange={(e) => setSelectedOptions(e) }
                 
                  isMulti isSearchable={true} className="pt-2"  
                    styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                        padding:'0.5rem',
                        paddingLeft:'1rem',
                        borderWidth: '0.1rem',
                        borderColor:'rgb(203 213 225)',
                        borderRadius:'0.375rem'
                        }),
                        placeholder: (provided, state) => ({
                            ...provided,
                          
                            position: 'absolute',
                            
                            top: '50%', 
                            transform: 'translateY(-50%)',
                          }),
                      }}

                />
                
               
                 </div>
                 <button type="submit" className="bg-blue-500 text-white w-full text-[#474747] rounded-md p-3 pl-6 
                    mt-8"
                    onClick={handleSubmit}
                    >Next</button>
            </div>

        </div>
        </>
    )
}
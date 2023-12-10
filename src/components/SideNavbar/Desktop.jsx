
export default function Desktop() {
    return (
      <div className="w-[15vw] flex-col flex justify-between items-center h-[100vh] py-[40px]">
        <div className="flex flex-col gap-y-8">
            <div>
                <img className="w-[9rem]" src="/imgs/logo.png" alt="logo"/>
            </div>
            <div>
                <ul className="sideNavbaruL flex flex-col gap-y-4">
                    <li className="flex gap-x-4 text-[#8D8D8D]"><img src="/svg/home.svg" alt=""/>Home</li>
                    <li className="flex gap-x-4 text-[#8D8D8D]"><img src="/svg/Candidate.svg" alt=""/>Candidates</li>
                    <li className="flex gap-x-4 text-[#8D8D8D]"><img src="/svg/settings.svg" alt=""/>Settings</li>
                </ul>
            </div>
        </div>

        <div className="flex items-center gap-x-4 text-[#8D8D8D]">
        <span><img src="/svg/logout.svg" alt="log"/></span>Log out
        </div>

      </div>
    );
  }
  
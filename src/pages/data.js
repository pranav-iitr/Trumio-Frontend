import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ImportExportIcon from "@mui/icons-material/ImportExport";
export default function data() {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-[20vw] bg-white">
          <div className="mt-14 mx-14">
            <img src="./imgs/logo.png" className="w-40" />
            <div className="h-[7vh] font-[lato] items-center flex mt-8 text-[#8D8D8D]">
              <HomeIcon />
              <h2 className="ml-5 text-[1.1vw]">Home</h2>
            </div>
            <div className="h-[7vh] items-center flex  text-[#8D8D8D]">
              <SyncAltIcon className="w-7" />
              <h2 className="ml-5 text-[1.1vw]">Candidates</h2>
            </div>
            <div className="h-[7vh] items-center flex  text-[#8D8D8D]">
              <SettingsIcon />
              <h2 className="ml-5 text-[1.1vw]">Settings</h2>
            </div>
            <div className="h-[7vh] items-center flex fixed bottom-10 text-[#8D8D8D]">
              <LogoutIcon />
              <h2 className="ml-5 text-[1.1vw]">Logout</h2>
            </div>
          </div>
        </div>
        <div className="w-[80vw] bg-[#F5FBFF]">
          <div className="mt-14 flex justify-between mx-14">
            <div className="text-[0.9vw] text-[rgba(53, 53, 53, 1)] ">
              Hi Admin,
              <br />
              <div className="font-bold text-[1.9vw] text-[rgba(53, 53, 53, 1)]">
                Welcome to Trumio!
              </div>
            </div>
            <div className="flex h-[4vh] items-center ">
              <div className="w-[20vw] h-[5vh] items-center bg-white p-4 flex gap-3">
                <SearchIcon className="text-[#8D8D8D]" />
                <h2 className="text-[#8D8D8D] text-[0.8vw]">
                  Search by anything
                </h2>
              </div>
              <NotificationsIcon className="text-[#8D8D8D] w-16 " />
              <img src="./imgs/profile.jpeg" className="w-8" />
            </div>
          </div>
          <h2 className=" h-[4vh] items-center mx-14 flex text-[rgba(53, 53, 53, 1)] text-[1.2vw] font-semibold mt-12">
            <span className=" "> Candidates </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.28125 17.7199L14.6201 12.5711L9.28125 7.42229L9.92838 6.01807L16.7233 12.5711L9.92838 19.1241L9.28125 17.7199Z"
                fill="#368DFF"
              />
            </svg>
            <span className="  text-[#368DFF]"> Course Name</span>
          </h2>
          <div className="mt-6 mx-14">
            <div className="flex gap-5 ">
              <div className="bg-white h-[9vh] w-[18vw] px-5 py-4 rounded-xl border border-solid border-blue-300">
                <h3 className="text-[rgba(3, 2, 41, 1)] text-[0.9vw]">
                  Candidates accessed :
                </h3>
                <h4 className="text-[rgba(3, 2, 41, 1)] text-[1.2vw] font-semibold">
                  101
                </h4>
              </div>
              <div className="bg-white h-[9vh] w-[18vw] px-5 py-4 rounded-xl border border-solid border-blue-300">
                <h3 className="text-[rgba(3, 2, 41, 1)] text-[0.9vw]">
                  No of candidates applied :
                </h3>
                <h4 className="text-[rgba(3, 2, 41, 1)] text-[1.2vw] font-semibold">
                  230
                </h4>
              </div>
            </div>
            <div className="h-[50vh] mt-10 w-[72vw] bg-white rounded-xl border border-solid border-blue-300">
              <div className="mx-10 h-[5.6vh] items-center text-[#797979] flex justify-between">
                <div className="text-[1vw]">Name</div>
                <div className="text-[1vw] ">Status</div>
                <div className="text-[1vw] ">Score(out of 10)</div>
                <div className="text-[1vw]">Recommendation</div>
                <div className="text-[1vw]">Report</div>
              </div>
              <hr />
              <div className="mx-10 h-[5.5vh] items-center flex ">
               </div>
              <hr />
              <div className="mx-10 h-[5.5vh] items-center flex gap-[10vw]"></div>
              <hr />
              <div className="mx-10 h-[5.5vh] items-center flex gap-[10vw]"></div>
              <hr />
              <div className="mx-10 h-[5.5vh] items-center flex gap-[10vw]"></div>
              <hr />
              <div className="mx-10 h-[5.5vh] items-center flex gap-[10vw]"></div>
              <hr />
              <div className="mx-10 h-[5.5vh] items-center flex gap-[10vw]"></div>
              <hr />
              <div className="mx-10 h-[5.5vh] items-center flex gap-[10vw]"></div>
              <hr />
              <div className="mx-10 h-[5.5vh] items-center flex gap-[10vw]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

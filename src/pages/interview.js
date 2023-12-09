import { useRef, useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";

const data = [
  "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
];

const VideoRecorder = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  const videoRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recorded, setRecorded] = useState("");
  const [mr, setMr] = useState(null);
  console.log(time);

  let mediaRecorder;
  let chunks = [];

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        mediaRecorder = new MediaRecorder(stream);
        setMr(mediaRecorder);
        mediaRecorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            chunks.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const recordedBlob = new Blob(chunks, { type: "video/webm" });
          setRecorded(recordedBlob);
          console.log("stop");
          fetch("https://webhook.site/92c3885f-e8bd-48ce-a8c1-2099579dee25/", {
            method: "POST",
            body: recordedBlob,
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        };

        mediaRecorder.start();
        setRecording(true);
      })
      .catch((error) => {
        console.error("Error accessing media devices:", error);
      });
  };

  const stopRecording = () => {
    if (mr && mr.state !== "inactive") {
      mr.stop();
      console.log("stop");
      setRecording(false);
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    }
  };
  useEffect(() => {
    // startRecording();

    return () => {
      stopRecording();
    };
  }, []);

  return (
    <div className="flex w-[100v] h-[100vh] flex-col pb-10">
      <div className="w-full h-20   flex items-center justify-center">
        <img src="/imgs/logo.png" className="w-32 h-8" />
      </div>
      <div
        style={{
          background:
            "var(--linear-linear-50, linear-gradient(134deg, #FFF 29.52%, #C7E6FF 118.05%))",
        }}
        className="w-full grow flex "
      >
        <div className=" flex-[0.2] bg-red-400 flex justify-center items-end ">
          <video ref={videoRef} style={{ width: "80%" }} autoPlay muted />
        </div>
        <div className=" flex-[0.8] h-[85vh]  bg-blue-400 flex flex-col  ">
          <div className="text-[#212121] text-2xl font-bold flex justify-center ">
            <span className="-ml-[20vw]">Welcome to your interview</span>
          </div>

          <div className="grow  flex gap-8 flex-col justify-center overflow-y-scroll bg-red-600 py-16 ">
            <div>
            {data.map((item, index) => {
              return (
                <div
                  className={`w-[90%] ${
                    index % 2 == 0 ? "justify-start" : "justify-end"
                  } `}
                >
                  <div
                    className={`flex  ${
                      index % 2 == 0 ? "justify-start" : "justify-end"
                    } `}
                  >
                    
                    <div className="bg-white rounded-xl p-4 w-[20vw]">
                      <p className="text-[#212121] text-base font-bold">
                        {item}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

          <div className="bg-green-200 h-20 w-[100%] flex justify-center items-center ">
            <input
              className="w-[90%] h-12 p-4 border border-[rgba(54, 141, 255, 0.50)] rounded-xl"
              placeholder="Enter text here "
            />
            <img src="/svg/send.svg" className="w-4 h-4 -ml-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoRecorder;

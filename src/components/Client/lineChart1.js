import { useEffect } from "react"
import { Chart } from "chart.js";
function Example() {
  useEffect(() => {
    let ctx = document.getElementById('myChart1').getContext('2d');
    let myChart1 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["feb 21", "feb 22", "feb 23", "feb 24", "feb 25", "feb 26", "feb 27"],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133],
          label: "Applied",
          borderColor: "#3e95cd",
          backgroundColor: "rgba(84, 142, 255, 0.12)",
          fill: false,
        },
        ]
      },
    });
  }, [])
  return (
    <>
      {/* line chart */}
      <div className="w-[500px] flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myChart1'></canvas>
        </div>
      </div>
    </>
  )
}

export default Example;
import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import trackFunctions from '../utils/trackFunctions'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)


const Track = ({atTop}) => {

  const [chartData, setChartData] = useState(
    {
        labels: [],
        datasets: [
          {
            label: 'hi',
            data: [],
            borderColor: "#4ADE80",
            borderWidth: 3,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#fff",
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            pointStyle: "rectRounded"
          }
        ]
      }
  )
  const [chartOptions, setChartOptions] = useState(
    {
        responsive: true,
        plugins: {
          legend: {
            position:'top',
            labels: {
              usePointStyle: true,
              color: "#00ff00", // Legend text color (green)
              font: {
                size: 16,
                family: "Roboto",
                weight: "bold"
              },
              boxWidth: 30, // Size of the color box
              padding: 20   // Space between legend items
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Date", // X axis label
              color: "#00ff00", // Optional: label color
              font: {
                size: 16,
                weight: "bold"
              }
            },
            border: { color: "#ff0000" },
          },
          y: {
            title: {
              display: true,
              text: "Calories", // Y axis label
              color: "#00ff00", // Optional: label color
              font: {
                size: 16,
                weight: "bold"
              }
            },
            border: { color: "#ff0000" },
          }
        }
      }
  )
  const [data, setData] = useState(null)
  const [dayAvg, setDayAvg] = useState(null)
  const [weekAvg, setWeekAvg] = useState(null)
  const [monthAvg, setMonthAvg] = useState(null)

  const [of, setOf] = useState('day')

  const [calories, setCalories] = useState(0)
  const [steps, setSteps] = useState(0)
  const [sleep, setSleep] = useState(0)
  const [water, setwater] = useState(0)

  const todaysDate = new Date()

  const { groupByYear, groupByMonth, groupByWeek, dailyAvg, weeklyTotals, monthlyTotals, weeklyAvg, monthlyAvg} = trackFunctions()

  const dayClick = (e) => {
    setOf('day')
    setCalories(dailyAvg(data)[todaysDate.getFullYear()]['avgCalories'])
    setSleep(dailyAvg(data)[todaysDate.getFullYear()]['avgSleep'])
    setSteps(dailyAvg(data)[todaysDate.getFullYear()]['avgSteps'])
    setwater(dailyAvg(data)[todaysDate.getFullYear()]['avgWater'])
  }
  const weekClick = (e) => {
    setOf('week')
    setCalories(weeklyAvg(data)[todaysDate.getFullYear()]['avgCalories'])
    setSleep(weeklyAvg(data)[todaysDate.getFullYear()]['avgSleep'])
    setSteps(weeklyAvg(data)[todaysDate.getFullYear()]['avgSteps'])
    setwater(weeklyAvg(data)[todaysDate.getFullYear()]['avgWater'])
  }
  const monthClick = (e) => {
    setOf('month')
    setCalories(monthlyAvg(data)[todaysDate.getFullYear()]['avgCalories'])
    setSleep(monthlyAvg(data)[todaysDate.getFullYear()]['avgSleep'])
    setSteps(monthlyAvg(data)[todaysDate.getFullYear()]['avgSteps'])
    setwater(monthlyAvg(data)[todaysDate.getFullYear()]['avgWater'])
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/track');
        setDayAvg(dailyAvg(res.data.track))
        setWeekAvg(weeklyAvg(res.data.track))
        setMonthAvg(monthlyAvg(res.data.track))
        setData(res.data.track)
        return
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;
    const yearData = dailyAvg(data)[todaysDate.getFullYear()];
    console.log(yearData)
    if (yearData) {
      setCalories(yearData['avgCalories']);
      setSleep(yearData['avgSleep']);
      setSteps(yearData['avgSteps']);
      setwater(yearData['avgWater']);
    }
    const chartValues = (data) => {
      let lableArr = []
      let dataArr = []
      groupByYear(data)[todaysDate.getFullYear()].forEach( day => {
        let d = (day.date.split('T')[0]).split('-')
        lableArr.push(d[2] + '-' +  d[1])
        dataArr.push(day.calories)
      })
      const dataa = {
        labels: lableArr.slice(0, 10),
        datasets: [
          {
            label: of,
            data: dataArr.slice(0, 10),
            borderColor: "#4ADE80",
            borderWidth: 1,
            pointRadius: 3.5,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#fff",
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            pointStyle: "rectRounded"
          }
        ]
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position:'top',
            labels: {
              usePointStyle: true,
              color: "#4ADE80", // Legend text color (green)
              font: {
                size: 10,
                family: "Roboto",
                weight: "light"
              },
              boxWidth: 30, // Size of the color box
              padding: 20   // Space between legend items
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Date", // X axis label
              color: "#4ADE80", // Optional: label color
              font: {
                size: 24,
                weight: 'light'
              }
            },
            border: { color: "#999b9e" },
          },
          y: {
            min: 0,
            max: 3000,
            ticks: {
              stepSize: 100 // Gap of 50 between y-axis values
            },
            title: {
              display: true,
              text: "Calories", // Y axis label
              color: "#4ADE80", // Optional: label color
              font: {
                size: 24,
                weight: 'light'
              }
            },
            border: { color: "#999b9e" },
          }
        }
      };

      return {dataa, options}
    }
    const {dataa, options} = chartValues(data)
    setChartData(dataa)
    setChartOptions(options)
  }, [data]);



  return (
    <div className={ (atTop? 'mt-45':'mt-13' ) + ' w-[90%] min-w-95 h-full border-[2.5px] border-[#121212] mx-[5%] rounded-4xl flex flex-col items-center text-white gap-4 '}>
      <div className='w-[90%] h-15 mt-10 flex justify-center items-center font-roboto-condensed gap-8'>
        <h1
          className={`px-[1.5vw] py-[0.5vh] text-xl rounded-2xl cursor-pointer ${of === 'day' ? 'bg-green-400 text-black' : 'bg-[#121212] text-white font-light '}`}
          onClick={dayClick}
        >
          Daily
        </h1>
        <h1
          className={`px-[1.5vw] py-[0.5vh] text-xl rounded-2xl cursor-pointer ${of === 'week' ? 'bg-green-400 text-black' : 'bg-[#121212] text-white font-light '}`}
          onClick={weekClick}
        >
          Weekly
        </h1>
        <h1
          className={`px-[1.5vw] py-[0.5vh] text-xl rounded-2xl cursor-pointer ${of === 'month' ? 'bg-green-400 text-black' : 'bg-[#121212] text-white font-light '}`}
          onClick={monthClick}
        >
          Monthly
        </h1>
      </div>
      <div className='w-[90%] bg-[#121212] rounded-4xl flex flex-col items-center font-roboto-condensed mb-20 py-10'>
          <div className='w-[90%] h-22 sm:h-25 md:h-28 md:justify-around md:gap-0 flex justify-center gap-3'>
              <div className='h-full w-[20%] bg-green-400 flex flex-col items-center rounded-xl'>
                <h1 className='text-black text-lg sm:text-xl md:text-2xl lg:text-4xl h-6/10 flex items-center-safe font-bold'>
                  {calories}
                </h1>
                <h1 className='text-black text-sm sm:text-lg md:text-xl lg:text-2xl h-4/10 items-center font-bold'>
                  Calories
                </h1>
              </div>
              <div className='h-full w-[20%] bg-green-400 flex flex-col items-center rounded-xl'>
                <h1 className='text-black text-lg sm:text-xl md:text-2xl lg:text-4xl h-6/10 flex items-center-safe font-bold'>
                      {steps}
                </h1>
                <h1 className='text-black text-sm sm:text-lg md:text-xl lg:text-2xl h-4/10 items-center font-bold'>
                  Foot Steps
                </h1>
              </div>
              <div className='h-full w-[20%] bg-green-400 flex flex-col items-center rounded-xl'>
                <h1 className='text-black text-lg sm:text-xl md:text-2xl lg:text-4xl h-6/10 flex items-center-safe font-bold'>
                  {sleep}
                </h1>
                <h1 className='text-black text-sm sm:text-lg md:text-xl lg:text-2xl h-4/10 items-center font-bold'>
                  Sleep
                </h1>
              </div>
              <div className='h-full w-[20%] bg-green-400 flex flex-col items-center rounded-xl'>
                <h1 className='text-black text-lg sm:text-xl md:text-2xl lg:text-4xl h-6/10 flex items-center-safe font-bold'>
                  {water}
                </h1>
                <h1 className='text-black text-sm sm:text-lg md:text-xl lg:text-2xl h-4/10 items-center font-bold'>
                  Water
                </h1>
              </div>
          </div>
          <div className='w-[90%] mt-[5vh] border-[0.5px] p-8 rounded-4xl'>
            <div className="w-full">
              <Line key={of} data={chartData} options={chartOptions} />
            </div>
          </div>
      </div>
      
      {/* <div className='w-[90%] h-[6vh] mt-10 flex justify-center items-center font-roboto-condensed gap-8'>
        <h1
          className={`px-[1.5vw] py-[0.5vh] text-xl rounded-2xl cursor-pointer ${of === 'day' ? 'bg-green-400 text-black' : 'bg-[#121212] text-white font-light '}`}
          onClick={dayClick}
        >
          Daily
        </h1>
        <h1
          className={`px-[1.5vw] py-[0.5vh] text-xl rounded-2xl cursor-pointer ${of === 'week' ? 'bg-green-400 text-black' : 'bg-[#121212] text-white font-light '}`}
          onClick={weekClick}
        >
          Weekly
        </h1>
        <h1
          className={`px-[1.5vw] py-[0.5vh] text-xl rounded-2xl cursor-pointer ${of === 'month' ? 'bg-green-400 text-black' : 'bg-[#121212] text-white font-light '}`}
          onClick={monthClick}
        >
          Monthly
        </h1>
      </div>
      <div className='w-9/10 min-h-250 h-[90vh] bg-[#121212] rounded-4xl flex flex-col items-center justify-center font-roboto-condensed'>
          <div className='w-9/10 h-9/10 flex flex-col justify-around items-center'>
            <div className='w-8/10 h-15/100 flex justify-center gap-5'>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      {calories}
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      Calories
                    </h1>
                </div>
              </div>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      {steps}
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      Foot Steps
                    </h1>
                </div>
              </div>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      {sleep}
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      Sleep
                    </h1>
                </div>
              </div>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      {water}
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      Water
                    </h1>
                </div>
              </div>
            </div>
            <div className='w-full h-78/100 border p-8 rounded-4xl flex flex-col items-center'>
              <Line data={chartData} options={chartOptions} />
              hi
            </div>
          </div>
      </div> */}
    </div>
  )
}

export default Track

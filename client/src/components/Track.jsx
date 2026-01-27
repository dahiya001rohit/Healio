import React, { useEffect, useState } from 'react'
import api from '../utils/api'

const Track = ({atTop}) => {
  const [data, setData] = useState(null)

  const getOnGoingWeek = (dateInput) => {
    const date = new Date(dateInput)
    const oneJan = new Date(date.getFullYear(), 0, 1)
    const numOfDays = Math.floor((date - oneJan)/ 86400000)
    return Math.ceil( (numOfDays + (oneJan.getDay() + 1))/ 7)
  }


  // --- Grouping functions ---
  const groupByYear = (dataArr) => {
    if(!dataArr) throw new Error('no data is given')
    const years = {}
    dataArr.forEach(day => {
      const date = new Date(day.date)
      const yearNum = date.getFullYear()
      if(!years[yearNum]) years[yearNum] = []
      years[yearNum].push(day)
    })
    return years
  }

  const groupByMonth = (dataArr) => {
    if(!dataArr) throw new Error('no data is given')
    const months = {}
    dataArr.forEach(day => {
      const date = new Date(day.date)
      const monthNum = date.getMonth() + 1
      if(!months[monthNum]) months[monthNum] = []
      months[monthNum].push(day)
    })
    return months
  }

  const groupByWeek = (dataArr) => {
    if(!dataArr) throw new Error('no data is given')
    const weeks = {}
    dataArr.forEach(day => {
      const weekNum = getOnGoingWeek(day.date)
      if(!weeks[weekNum]) weeks[weekNum] = []
      weeks[weekNum].push(day)
    })
    return weeks
  }

  // --- Aggregation functions ---
  const dailyAvgs = (dataArr) => {
    const years = groupByYear(dataArr)
    const yearWiseDailyAvg = {}
    for(let year in years){
      const days = years[year]
      let totalCalories = 0
      let totalProtein = 0
      let totalCarbs = 0
      let totalFats = 0
      let totalSteps = 0
      let totalSleep = 0
      let totalWater = 0
      let len = days.length
      days.forEach((day) => {
        totalCalories += day.calories
        totalSteps += day.steps
        totalSleep += day.sleep
        totalWater += day.water
        totalProtein += day.protein
        totalCarbs += day.carbs
        totalFats += day.fats
      })
      yearWiseDailyAvg[year] = {
        avgCalories: Math.round(totalCalories/len),
        avgSteps: Math.round(totalSteps/len),
        avgSleep: Math.round(totalSleep/len),
        avgWater: Math.round(totalWater/len),
        avgCarbs: Math.round(totalCarbs/len),
        avgFats: Math.round(totalFats/len),
        avgProtein: Math.round(totalProtein/len),
      }
    }
    return yearWiseDailyAvg
  }

  const yearWiseWeeklyTotals = (dataArr) => {
    const yearsData = groupByYear(dataArr)
    const yearWiseWeek = {}
    for(let year in yearsData){
      yearWiseWeek[year] = groupByWeek(yearsData[year])
    }
    const weeklyTotals = {}
    for(let year in yearWiseWeek){
      weeklyTotals[year] = {}
      let noOfWeeks = 0
      for(let week in yearWiseWeek[year]){
        noOfWeeks += 1
        const w = yearWiseWeek[year][week]
        let totalCalories = 0
        let totalProtein = 0
        let totalCarbs = 0
        let totalFats = 0
        let totalSteps = 0
        let totalSleep = 0
        let totalWater = 0
        let totalDays = 0
        w.forEach((day) => {
          totalCalories += day.calories
          totalSteps += day.steps
          totalSleep += day.sleep
          totalWater += day.water
          totalProtein += day.protein
          totalCarbs += day.carbs
          totalFats += day.fats
          totalDays += 1
        })
        weeklyTotals[year][week] = {totalCalories, totalSteps, totalSleep, totalWater, totalProtein, totalCarbs, totalFats, totalDays}
      }
      weeklyTotals[year]['noOfWeeks'] = noOfWeeks
    }
    return weeklyTotals
  }

  const weeklyAvg = (dataArr) => {
    const weeklyTotals = yearWiseWeeklyTotals(dataArr)
    const yearWiseDailyAvg = dailyAvgs(dataArr)
    const yearWiseWeeklyAvg = {}
    const weeklyAdjTotals = {}
    for(let year in weeklyTotals){
      weeklyAdjTotals[year] = {}
      const yearData = weeklyTotals[year]
      const yearDailyAvgs = yearWiseDailyAvg[year]
      yearWiseWeeklyAvg[year] = {}
      let totalWeeklyCalories = 0
      let totalWeeklyProtein = 0
      let totalWeeklyCarbs = 0
      let totalWeeklyFats = 0
      let totalWeeklySteps = 0
      let totalWeeklySleep = 0
      let totalWeeklyWater = 0
      for(let week in yearData){
        if(week === 'noOfWeeks') continue
        const w = yearData[week]
        if(w.totalDays < 7){
          const remaining = 7 - w.totalDays
          w.totalCalories += remaining*yearDailyAvgs.avgCalories
          w.totalSteps += remaining*yearDailyAvgs.avgSteps
          w.totalSleep += remaining*yearDailyAvgs.avgSleep
          w.totalWater += remaining*yearDailyAvgs.avgWater
          w.totalProtein += remaining*yearDailyAvgs.avgProtein
          w.totalCarbs += remaining*yearDailyAvgs.avgCarbs
          w.totalFats += remaining*yearDailyAvgs.avgFats
        }
        totalWeeklyCalories += w.totalCalories
        totalWeeklyProtein += w.totalProtein
        totalWeeklyCarbs += w.totalCarbs
        totalWeeklyFats += w.totalFats
        totalWeeklySteps += w.totalSteps
        totalWeeklySleep += w.totalSleep
        totalWeeklyWater += w.totalWater

        weeklyAdjTotals[year][week] = w
      }
      weeklyAdjTotals[year]["noOfWeeks"] = weeklyTotals[year].noOfWeeks
      yearWiseWeeklyAvg[year] = {
        avgWeeklyCalories: Math.round(totalWeeklyCalories/yearData.noOfWeeks),
        avgWeeklyProtein: Math.round(totalWeeklyProtein/yearData.noOfWeeks),
        avgWeeklyCarbs: Math.round(totalWeeklyCarbs/yearData.noOfWeeks),
        avgWeeklyFats: Math.round(totalWeeklyFats/yearData.noOfWeeks),
        avgWeeklySteps: Math.round(totalWeeklySteps/yearData.noOfWeeks),
        avgWeeklySleep: Math.round(totalWeeklySleep/yearData.noOfWeeks),
        avgWeeklyWater: Math.round(totalWeeklyWater/yearData.noOfWeeks),
      }
    }
    return {yearWiseWeeklyAvg, weeklyAdjTotals}
  }

  const monthlyAvgs = (dataArr) => {
    const yearData = groupByYear(dataArr)
    const yearWiseMonth = {}
    for(let year in yearData){
      const days = yearData[year]
      yearWiseMonth[year] = groupByMonth(days)
    }
    const yearWiseMonthlyTotal = {}
    const yearWiseMonthlyAvg = {}
    for(let year in yearWiseMonth){
      yearWiseMonthlyTotal[year] = {}
      yearWiseMonthlyAvg[year] = {}
      for(let month in yearWiseMonth[year]){
        let totalCalories = 0
        let totalProtein = 0
        let totalCarbs = 0
        let totalFats = 0
        let totalSteps = 0
        let totalSleep = 0
        let totalWater = 0
        let totalDays = 0
        yearWiseMonth[year][month].forEach( (day) => {
          totalCalories += day.calories
          totalSteps += day.steps
          totalSleep += day.sleep
          totalWater += day.water
          totalProtein += day.protein
          totalCarbs += day.carbs
          totalFats += day.fats
          totalDays += 1
        })
        yearWiseMonthlyTotal[year][month] = {totalCalories, totalSteps, totalSleep, totalWater, totalProtein, totalCarbs, totalFats, totalDays}
        yearWiseMonthlyAvg[year][month] = {
          avgCalories: Math.round(totalCalories/totalDays),
          avgSteps: Math.round(totalSteps/totalDays),
          avgSleep: Math.round(totalSleep/totalDays),
          avgWater: Math.round(totalWater/totalDays),
          avgCarbs: Math.round(totalCarbs/totalDays),
          avgFats: Math.round(totalFats/totalDays),
          avgProtein: Math.round(totalProtein/totalDays),
        }
      }
    }
    return {yearWiseMonthlyTotal, yearWiseMonthlyAvg}
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/track');
        setData(res.data.track)
        const yearWiseDailyAvg = dailyAvgs(res.data.track)
        console.log(yearWiseDailyAvg)
  
        return
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className={ (atTop? 'mt-[18vh]':'mt-[5vh]' ) + ' min-w-3xl min-h-300 border-[1.5px] border-[#121212] mx-[6vw] rounded-4xl flex flex-col items-center text-white gap-4'}>
      <div className='w-[90%] h-[6vh] mt-10 flex justify-center items-center font-roboto-condensed gap-8'>
        <h1 className='px-[1.5vw] py-[0.5vh] text-xl bg-[#121212] rounded-2xl font-light'>Daily</h1>
        <h1 className='px-[1.5vw] py-[0.5vh] text-xl bg-[#121212] rounded-2xl font-light'>Weekly</h1>
        <h1 className='px-[1.5vw] py-[0.5vh] text-xl bg-[#121212] rounded-2xl font-light'>Monthly</h1>
      </div>
      <div className='w-9/10 min-h-250 h-[90vh] bg-[#121212] rounded-4xl flex flex-col items-center justify-center font-roboto-condensed'>
          <div className='w-9/10 h-9/10 flex flex-col justify-around items-center'>
            <div className='w-8/10 h-15/100 flex justify-center gap-5'>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      10000
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      FOOT STEPS
                    </h1>
                </div>
              </div>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      10000
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      FOOT STEPS
                    </h1>
                </div>
              </div>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      10000
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      FOOT STEPS
                    </h1>
                </div>
              </div>
              <div className='w-22/100 min-w-37 h-9/10 bg-green-400 rounded-4xl flex justify-center items-center'>
                <div className='w-85/100 h-85/100 flex flex-col justify-around items-center'>
                    <h1 className='text-black text-5xl h-6/10 flex items-center font-bold'>
                      10000
                    </h1>
                    <h1 className='text-black text-2xl h-4/10 flex items-center font-bold'>
                      FOOT STEPS
                    </h1>
                </div>
              </div>
            </div>
            <div className='w-full h-78/100 border'>
              {/* chatr area */}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Track

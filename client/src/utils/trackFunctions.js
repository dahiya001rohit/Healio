const trackFunctions = () => {

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
        const yearWiseData = groupByYear(dataArr)
        const monthsWiseYearData = {}
        for( let year in yearWiseData){
            monthsWiseYearData[year] = {}
            yearWiseData[year].forEach( day => {
                let monthNum = (new Date(day.date)).getMonth() + 1
                if(!monthsWiseYearData[year][monthNum]) monthsWiseYearData[year][monthNum] = []
                monthsWiseYearData[year][monthNum].push(day)
            })
        }
        return monthsWiseYearData
    }

    const groupByWeek = (dataArr) => {

        if(!dataArr) throw new Error('no data is given')
        const yearWiseData = groupByYear(dataArr)
        const weekWiseYearData = {}
        for( let year in yearWiseData){
            weekWiseYearData[year] = {}
            yearWiseData[year].forEach( day => {
                let weekNum = getOnGoingWeek(day.date)
                if(!weekWiseYearData[year][weekNum]) weekWiseYearData[year][weekNum] = []
                weekWiseYearData[year][weekNum].push(day)
            })
        }
        return weekWiseYearData
    }

    // --- Aggregation functions ---

    const calculateTotalsArr = (days) => {
        let totalCalories = 0
        let totalProtein = 0
        let totalCarbs = 0
        let totalFats = 0
        let totalSteps = 0
        let totalSleep = 0
        let totalWater = 0
        days.forEach((day) => {
            totalCalories += day.calories
            totalSteps += day.steps
            totalSleep += day.sleep
            totalWater += day.water
            totalProtein += day.protein
            totalCarbs += day.carbs
            totalFats += day.fats
        })
        return { totalCalories, totalProtein, totalCarbs, totalFats, totalSteps, totalSleep, totalWater }
    }

    const calculateTotalsObj = (obj, str) => {
        let totalCalories = 0
        let totalProtein = 0
        let totalCarbs = 0
        let totalFats = 0
        let totalSteps = 0
        let totalSleep = 0
        let totalWater = 0
        for(let key in obj){
            const w = obj[key]
            totalCalories += w.totalCalories
            totalSteps += w.totalSteps
            totalSleep += w.totalSleep
            totalWater += w.totalWater
            totalProtein += w.totalProtein
            totalCarbs += w.totalCarbs
            totalFats += w.totalFats
        }
        return { totalCalories, totalSteps, totalSleep, totalWater, totalProtein, totalCarbs, totalFats}
    }
    const dailyAvg = (dataArr) => {

        const years = groupByYear(dataArr)
        const avgs = {}
        for(let year in years){
            const daysTotals = calculateTotalsArr(years[year])
            let noOfDays = years[year].length
            avgs[year] = {
                avgCalories: Math.round(daysTotals.totalCalories/noOfDays),
                avgSteps: Math.round(daysTotals.totalSteps/noOfDays),
                avgSleep: Math.round(daysTotals.totalSleep/noOfDays),
                avgWater: Math.round(daysTotals.totalWater/noOfDays),
                avgCarbs: Math.round(daysTotals.totalCarbs/noOfDays),
                avgFats: Math.round(daysTotals.totalFats/noOfDays),
                avgProtein: Math.round(daysTotals.totalProtein/noOfDays),
            }
        }
        return avgs
    }

    const weeklyTotals = (dataArr) => {
        const daysAvg = dailyAvg(dataArr)
        const weekWiseYearData  = groupByWeek(dataArr)
        const totals = {}
        for(let year in weekWiseYearData){
            totals[year] = {}
            for(let week in weekWiseYearData[year]){
                if(week === '1' && Object.keys(weekWiseYearData[year]).length !== 1){
                    if(weekWiseYearData[year-1]){
                        const preWeekTotals = calculateTotalsArr(weekWiseYearData[year-1][week])
                        const currWeekTotals = calculateTotalsArr(weekWiseYearData[year][week])
                        totals[year][week] = {
                            totalCalories: preWeekTotals.totalCalories + currWeekTotals.totalCalories,
                            totalProtein: preWeekTotals.totalProtein + currWeekTotals.totalProtein,
                            totalCarbs: preWeekTotals.totalCarbs + currWeekTotals.totalCarbs,
                            totalFats: preWeekTotals.totalFats + currWeekTotals.totalFats,
                            totalSteps: preWeekTotals.totalSteps + currWeekTotals.totalSteps,
                            totalSleep: preWeekTotals.totalSleep + currWeekTotals.totalSleep,
                            totalWater: preWeekTotals.totalWater + currWeekTotals.totalWater,
                            
                        }
                    } else {
                        const currWeekTotals = calculateTotalsArr(weekWiseYearData[year][week])
                        const remaining = 7 - (weekWiseYearData[year][week]).length
                        if(remaining > 0){
                            totals[year][week] = {
                                totalCalories: currWeekTotals.totalCalories + remaining*(daysAvg[year].avgCalories),
                                totalProtein: currWeekTotals.totalProtein + remaining*(daysAvg[year].avgProtein),
                                totalCarbs: currWeekTotals.totalCarbs + remaining*(daysAvg[year].avgCarbs),
                                totalFats: currWeekTotals.totalFats + remaining*(daysAvg[year].avgFats),
                                totalSteps: currWeekTotals.totalSteps + remaining*(daysAvg[year].avgSteps),
                                totalSleep: currWeekTotals.totalSleep + remaining*(daysAvg[year].avgSleep),
                                totalWater: currWeekTotals.totalWater + remaining*(daysAvg[year].avgWater),
                            }
                        } else {
                            totals[year][week] = currWeekTotals
                        }
                    }
                } else {
                    totals[year][week] = calculateTotalsArr(weekWiseYearData[year][week])
                }
            }
        }
        return totals
    }

    const monthlyTotals = (dataArr) => {
        const monthWiseYearData  = groupByMonth(dataArr)
        const totals = {}
        for(let year in monthWiseYearData){
            totals[year] = {}
            for(let month in monthWiseYearData[year]){
                totals[year][month] = calculateTotalsArr(monthWiseYearData[year][month])
            }
        }
        return totals
    }

    const weeklyAvg = (dataArr) => {
        const weekTotals = weeklyTotals(dataArr)
        const netTotal = {}
        const avg = {}
        for(let year in weekTotals){
            const noOfWeeks = Object.keys(weekTotals[year]).length
            netTotal[year] = calculateTotalsObj(weekTotals[year])
            avg[year] = {
                avgCalories: Math.round(netTotal[year].totalCalories/noOfWeeks),
                avgSteps: Math.round(netTotal[year].totalSteps/noOfWeeks),
                avgSleep: Math.round(netTotal[year].totalSleep/noOfWeeks),
                avgWater: Math.round(netTotal[year].totalWater/noOfWeeks),
                avgCarbs: Math.round(netTotal[year].totalCarbs/noOfWeeks),
                avgFats: Math.round(netTotal[year].totalFats/noOfWeeks),
                avgProtein: Math.round(netTotal[year].totalProtein/noOfWeeks),
            }
        }
        return avg
    }

    const monthlyAvg = (dataArr) => {
        const monthTotals = monthlyTotals(dataArr)
        const netTotal = {}
        const avg = {}
        for(let year in monthTotals){
            const noOfMonths = Object.keys(monthTotals[year]).length
            netTotal[year] = calculateTotalsObj(monthTotals[year])
            avg[year] = {
                avgCalories: Math.round(netTotal[year].totalCalories/noOfMonths),
                avgSteps: Math.round(netTotal[year].totalSteps/noOfMonths),
                avgSleep: Math.round(netTotal[year].totalSleep/noOfMonths),
                avgWater: Math.round(netTotal[year].totalWater/noOfMonths),
                avgCarbs: Math.round(netTotal[year].totalCarbs/noOfMonths),
                avgFats: Math.round(netTotal[year].totalFats/noOfMonths),
                avgProtein: Math.round(netTotal[year].totalProtein/noOfMonths),
            }
        }
        return avg
    }

    return {
        groupByYear,
        groupByMonth,
        groupByWeek,
        dailyAvg,
        weeklyTotals,
        monthlyTotals,
        weeklyAvg,
        monthlyAvg
    }
}

export default trackFunctions
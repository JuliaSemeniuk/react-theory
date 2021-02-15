import React from 'react'

function checkIsLeapYear(year) {
    const isLeapCheckingYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    console.log('is leap ckecking year:', isLeapCheckingYear)
    return isLeapCheckingYear
}

function countAmountOfLeapYearsFromStartToEnd(startYear, endYear) {
    let amountOfLeapYearsForCheckingPeriod = 0

    for (let i = startYear; i < endYear; i++) {
        if (checkIsLeapYear(i)) {
            amountOfLeapYearsForCheckingPeriod = amountOfLeapYearsForCheckingPeriod + 1
        }
    }
    console.log('amountOfLeapYearsForCheckingPeriod:', amountOfLeapYearsForCheckingPeriod)
    return amountOfLeapYearsForCheckingPeriod
}

function countAmountOfDaysInStartYear(startMonth, isLeapStartYear, day30, day31) {
    let amountOfDaysInStartYear = 0

    for (let i = startMonth; i < 13; i++) {
        if (day30.includes(i)) {
            amountOfDaysInStartYear = amountOfDaysInStartYear + 30
            continue
        }
        if (day31.includes(i)) {
            amountOfDaysInStartYear = amountOfDaysInStartYear + 31
            continue
        } else {
            amountOfDaysInStartYear = isLeapStartYear ? amountOfDaysInStartYear + 29 : amountOfDaysInStartYear + 28
        }
    }

    //const totalAmoundOfDaysInStartYear = isLeapStartYear ? 366 + amountOfDaysInStartYear : 365 + amountOfDaysInStartYear

    //mountOfDaysInStartYear = totalAmoundOfDaysInStartYear - amountOfDaysInStartYear
    //console.log('totalAmoundOfDaysInStartYear: ', totalAmoundOfDaysInStartYear)

    return amountOfDaysInStartYear
}

function countAmountOfDaysInEndYear(endMonth, isLeapEndYear, day30, day31) {
    let amountOfDaysInEndYear = 0

    for (let i = 1; i < endMonth; i++) {
        if (day30.includes(i)) {
            amountOfDaysInEndYear = amountOfDaysInEndYear + 30
            continue
        }
        if (day31.includes(i)) {
            amountOfDaysInEndYear = amountOfDaysInEndYear + 31
            continue
        } else {
            amountOfDaysInEndYear = isLeapEndYear ? amountOfDaysInEndYear + 29 : amountOfDaysInEndYear + 28
        }
    }
    console.log('amountOfDaysInEndYear: ', amountOfDaysInEndYear)
    return amountOfDaysInEndYear
}

function countTotalAmountOfDays(startData, endData, amountOfLeapYears, amountOfDaysInStartYear, amountOfdaysInEndYear) {
    const amountOfDaysFromStartYearToEnadYear =
        (endData.year - startData.year - amountOfLeapYears) * 365 + amountOfLeapYears * 366

    const totalAmountOfDaysFromStartDataToEndData =
        amountOfDaysFromStartYearToEnadYear -
        amountOfDaysInStartYear -
        startData.day +
        amountOfdaysInEndYear +
        endData.day

    console.log('amountOfDaysFromStartYearToEnadYear:', amountOfDaysFromStartYearToEnadYear)
    console.log('totalAmountOfDays:', totalAmountOfDaysFromStartDataToEndData)

    return totalAmountOfDaysFromStartDataToEndData
}

export default class AgeCalculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            startData: '',
            endData: '',
            totalAmountOfDays: '',
        }
        //datas validation!!!!
    }

    onChangeGetStartData = (event) => {
        const startDataSplited = event.target.value.split('.')
        const startDataObject = {
            day: Number(startDataSplited[0]),
            month: Number(startDataSplited[1]),
            year: Number(startDataSplited[2]),
        }
        console.log('start data:', startDataObject)
        this.setState({ startData: startDataObject })
    }

    onChangeGetEndData = (event) => {
        const endDataSplited = event.target.value.split('.')
        const endDataObject = {
            day: Number(endDataSplited[0]),
            month: Number(endDataSplited[1]),
            year: Number(endDataSplited[2]),
        }
        console.log('end data:', endDataObject)
        this.setState({ endData: endDataObject })
    }

    // checkIsLeapYear = (year) => {
    //     const isLeapCheckingYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    //     console.log('is leap ckecking year:', isLeapCheckingYear)
    //     return isLeapCheckingYear
    // }

    // countAmountOfLeapYearsFromStartToEnd = (startYear, endYear) => {
    //     let amountOfLeapYearsForCheckingPeriod = 0

    //     for (let i = startYear; i < endYear; i++) {
    //         if (this.checkIsLeapYear(i)) {
    //             amountOfLeapYearsForCheckingPeriod = amountOfLeapYearsForCheckingPeriod + 1
    //         }
    //     }

    //     return amountOfLeapYearsForCheckingPeriod
    // }

    // countAmountOfDaysInStartYear = (startMonth, isLeapStartYear, day30, day31) => {
    //     let amountOfDaysInStartYear = 0

    //     for (let i = startMonth; i < 13; i++) {
    //         if (day30.includes(i)) {
    //             amountOfDaysInStartYear = amountOfDaysInStartYear + 30
    //             continue
    //         }
    //         if (day31.includes(i)) {
    //             amountOfDaysInStartYear = amountOfDaysInStartYear + 31
    //             continue
    //         } else {
    //             amountOfDaysInStartYear = isLeapStartYear ? amountOfDaysInStartYear + 29 : amountOfDaysInStartYear + 28
    //         }
    //     }

    //     const totalAmoundOfDaysInStartYear = isLeapStartYear ? 366 : 365

    //     amountOfDaysInStartYear = totalAmoundOfDaysInStartYear - amountOfDaysInStartYear

    //     return amountOfDaysInStartYear
    // }

    // countAmountOfDaysInEndYear = (endMonth, isLeapEndYear, day30, day31) => {
    //     let amountOfDaysInEndYear = 0

    //     for (let i = 1; i < endMonth; i++) {
    //         if (day30.includes(i)) {
    //             amountOfDaysInEndYear = amountOfDaysInEndYear + 30
    //             continue
    //         }
    //         if (day31.includes(i)) {
    //             amountOfDaysInEndYear = amountOfDaysInEndYear + 31
    //             continue
    //         } else {
    //             amountOfDaysInEndYear = isLeapEndYear ? amountOfDaysInEndYear + 29 : amountOfDaysInEndYear + 28
    //         }
    //     }

    //     return amountOfDaysInEndYear
    // }

    // countTotalAmountOfDays = (
    //     startData,
    //     endData,
    //     amountOfLeapYears,
    //     amountOfDaysInStartYear,
    //     amountOfdaysInEndYear
    // ) => {
    //     const amountOfDaysFromStartYearToEnadYear =
    //         (endData.year - startData.year - amountOfLeapYears) * 365 + amountOfLeapYears * 366

    //     const totalAmountOfDaysFromStartDataToEndData =
    //         amountOfDaysFromStartYearToEnadYear -
    //         amountOfDaysInStartYear -
    //         startData.day +
    //         amountOfdaysInEndYear +
    //         endData.day

    //     return totalAmountOfDaysFromStartDataToEndData
    // }

    render() {
        const day30 = [4, 6, 9, 11]
        const day31 = [1, 3, 5, 7, 8, 10, 12]

        const { startData } = this.state
        const { endData } = this.state

        const isLeapStartYear = checkIsLeapYear(startData.year)
        const isLeapEndYear = checkIsLeapYear(endData.year)

        const amountOfLeapYearsFromStartToEnd = countAmountOfLeapYearsFromStartToEnd(startData.year, endData.year)

        const amountOfDaysInStartYear = countAmountOfDaysInStartYear(startData.month, isLeapStartYear, day30, day31)

        const amountOfDaysInEndYear = countAmountOfDaysInEndYear(endData.month, isLeapEndYear, day30, day31)

        const totalAmountOfDays = countTotalAmountOfDays(
            startData,
            endData,
            amountOfLeapYearsFromStartToEnd,
            amountOfDaysInStartYear,
            amountOfDaysInEndYear
        )

        return (
            <div>
                <p>
                    Функция конвертирует возраст человека в колличество дней, принимает дату рождения 11.01.1991 в виде
                    строки, возвращает число:
                </p>
                <input onChange={this.onChangeGetStartData} type="text" placeholder="start date"></input>
                <br />
                <input onChange={this.onChangeGetEndData} type="text" placeholder="end date"></input>
                <br />
                <button>go!</button>
                <input></input>
            </div>
        )
    }
}

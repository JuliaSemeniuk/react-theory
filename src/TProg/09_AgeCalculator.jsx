import React from 'react'

function splitBirthData(birthData) {
    const elements = birthData.split('.')
    const day = Number(elements[0])
    const month = Number(elements[1])
    const year = Number(elements[2])
    console.log('day:', day, '; month:', month, '; year:', year, ';')
    return { day, month, year } //if name === keys
}

function splitCurrentData(currentData) {
    const elements = currentData.split('.')
    const day = Number(elements[0])
    const month = Number(elements[1])
    const year = Number(elements[2])
    console.log('day:', day, '; month:', month, '; year:', year, ';')
    return { day, month, year } //if name === keys
}
//check a leap year on birth and current year
const checkIsLeapYear = (param) => {
    return (param % 4 === 0 && param % 100 !== 0) || param % 400 === 0
}

//an amount of leap years in current period
function calculateLeapYears(birthYear, currentYear) {
    let amountLeatYear = 0

    for (let i = birthYear; i < currentYear; i++) {
        if (checkIsLeapYear(i)) {
            amountLeatYear = amountLeatYear + 1
        }
    }

    console.log('amount of leap years: ', amountLeatYear)

    return amountLeatYear
}

//an amount of days in birth year a person lived
function calculateDaysInBirthYear(birthMonth, isLeapBirthYear, day30, day31) {
    let daysInBirthYear = 0
    const isLeapYear = isLeapBirthYear

    for (let i = birthMonth; i < 13; i++) {
        if (day30.includes(i)) {
            daysInBirthYear = daysInBirthYear + 30
            continue
        }
        if (day31.includes(i)) {
            daysInBirthYear = daysInBirthYear + 31
            continue
        } else {
            daysInBirthYear = isLeapYear ? daysInBirthYear + 29 : daysInBirthYear + 28 //into function
        }
    }

    return daysInBirthYear
}

//an amount of days in current year a person lived
function calculateDaysInCurrentYear(currentMonth, isLeapCurrentYear, day30, day31) {
    let daysInCurrentYear = 0
    const isLeapYear = isLeapCurrentYear

    for (let i = 1; i < currentMonth; i++) {
        if (day30.includes(i)) {
            daysInCurrentYear = daysInCurrentYear + 30
            continue
        }
        if (day31.includes(i)) {
            daysInCurrentYear = daysInCurrentYear + 31
            continue
        } else {
            daysInCurrentYear = isLeapYear ? daysInCurrentYear + 29 : daysInCurrentYear + 28
        }
    }

    return daysInCurrentYear
}

//total amount of days
function calculateAge(
    birthDataElemenets,
    currentDataElements,
    leapYears,
    daysInBirthYear,
    daysInCurrentYear,
    isLeapBirthYear
) {
    const daysYears = (currentDataElements.year - birthDataElemenets.year - leapYears) * 365 + leapYears * 366
    console.log('days  years: ', daysYears)

    const days = isLeapBirthYear ? 366 : 365

    const generalAmountOfDays =
        daysYears - (days - daysInBirthYear) - birthDataElemenets.day + daysInCurrentYear + currentDataElements.day

    console.log('general amount of Days:', generalAmountOfDays)

    return generalAmountOfDays
}

export default class AgeCalculator extends React.Component {
    render() {
        const julieBirthData = '11.08.1992'
        const currentData = '25.03.2020'
        const day30 = [4, 6, 9, 11]
        const day31 = [1, 3, 5, 7, 8, 10, 12]

        const birthDataElemenets = splitBirthData(julieBirthData) // return { day, month, year }
        const currentDataElements = splitCurrentData(currentData)
        const isLeapBirthYear = checkIsLeapYear(birthDataElemenets.year)
        const isLeapCurrentYear = checkIsLeapYear(currentDataElements.year)
        const leapYears = calculateLeapYears(birthDataElemenets.year, currentDataElements.year)
        const daysInBirthYear = calculateDaysInBirthYear(birthDataElemenets.month, isLeapBirthYear, day30, day31)
        const daysInCurrentYear = calculateDaysInCurrentYear(currentDataElements.month, isLeapCurrentYear, day30, day31)

        const age = calculateAge(
            birthDataElemenets,
            currentDataElements,
            leapYears,
            daysInBirthYear,
            daysInCurrentYear,
            isLeapBirthYear
        )

        return (
            <div>
                <p>
                    Функция конвертирует возраст человека в колличество дней, принимает дату рождения 11.01.1991 в виде
                    строки, возвращает число: {age}
                </p>
            </div>
        )
    }
}

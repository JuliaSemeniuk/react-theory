import React from 'react'

function splitBirthData(julieBirthData) {
    const elements = julieBirthData.split('.')
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

function calculateLeapYears(birthYear, currentYear) {
    let amountLeatYear = 0

    for (let i = birthYear; i < currentYear; i++) {
        if ((i % 4 === 0 && i % 100 != 0) || i % 400 === 0) {
            amountLeatYear = amountLeatYear + 1
        }
    }

    console.log('amount of leap years: ', amountLeatYear)

    return amountLeatYear
}

function calculateAge(birthDataElemenets, currentDataElements, leapYears) {
    // the total amount of days from from birth year to current
    const daysYears = (currentDataElements.year - birthDataElemenets.year - leapYears) * 365 + leapYears * 366
    console.log('days  years: ', daysYears)

    // check of Leap year
    let isLeapYear = false
    if (
        (birthDataElemenets.year % 4 === 0 && birthDataElemenets.year % 100 != 0) ||
        birthDataElemenets.year % 400 === 0
    ) {
        isLeapYear = true
    }

    // the amount of days in birth year

    let daysInBirthYear = 0
    const day30 = [4, 6, 9, 11]
    const day31 = [1, 3, 5, 7, 8, 10, 12]

    for (let i = birthDataElemenets.month; i < 13; i++) {
        if (day30.includes(i)) {
            daysInBirthYear = daysInBirthYear + 30
            continue
        }
        if (day31.includes(i)) {
            daysInBirthYear = daysInBirthYear + 31
            continue
        } else {
            daysInBirthYear = isLeapYear ? daysInBirthYear + 29 : daysInBirthYear + 28
        }
    }

    const a = daysYears - (365 - daysInBirthYear)

    console.log('days in birth year: ', daysInBirthYear)

    // the amount of days in current year

    let daysInCurrentYear = 0

    for (let i = 1; i < currentDataElements.month; i++) {
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

    console.log('days in current year:', daysInCurrentYear)

    let generalAmountOfDays

    if (isLeapYear === true) {
        generalAmountOfDays =
            daysYears - (366 - daysInBirthYear) - birthDataElemenets.day + daysInCurrentYear + currentDataElements.day
    } else {
        generalAmountOfDays =
            daysYears - (365 - daysInBirthYear) - birthDataElemenets.day + daysInCurrentYear + currentDataElements.day
    }

    console.log('general amount of Days:', generalAmountOfDays)
}

export default class AgeCalculator extends React.Component {
    render() {
        const julieBirthData = '11.08.1992'
        const currentData = '25.03.2020'

        const birthDataElemenets = splitBirthData(julieBirthData) // return { day, month, year }
        const currentDataElements = splitCurrentData(currentData)
        const leapYears = calculateLeapYears(birthDataElemenets.year, currentDataElements.year)

        const age = calculateAge(birthDataElemenets, currentDataElements, leapYears)

        return (
            <div>
                <p>
                    Функция конвертирует возраст человека в колличество дней, принимает дату рождения 11.01.1991 в виде
                    строки, возвращает число:
                </p>
            </div>
        )
    }
}

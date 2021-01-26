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
    const daysYears = (currentDataElements.year - birthDataElemenets.year - leapYears) * 365 + leapYears * 366
    console.log('days  years: ', daysYears)

    let daysMonthInBirthYear = 0

    let isLeapYear = false
    if (
        (birthDataElemenets.year % 4 === 0 && birthDataElemenets.year % 100 != 0) ||
        birthDataElemenets.year % 400 === 0
    ) {
        isLeapYear = true
    }

    const day30 = [4, 6, 9, 11]
    const day31 = [1, 3, 5, 7, 8, 10, 12]

    if (birthDataElemenets.month > currentDataElements.month) {
        for (let i = birthDataElemenets.month; i < 13; i++) {
            if (day30.includes(i)) {
                daysMonthInBirthYear = daysMonthInBirthYear + 30
                continue
            }
            if (day31.includes(i)) {
                daysMonthInBirthYear = daysMonthInBirthYear + 31
                continue
            } else {
                daysMonthInBirthYear = isLeapYear ? daysMonthInBirthYear + 29 : daysMonthInBirthYear + 28
            }
        }

        for (let i = 1; i < currentDataElements.month + 1; i++) {
            if (day30.includes(i)) {
                daysMonthInBirthYear = daysMonthInBirthYear + 30
                continue
            }
            if (day31.includes(i)) {
                daysMonthInBirthYear = daysMonthInBirthYear + 31
                continue
            } else {
                daysMonthInBirthYear = isLeapYear ? daysMonthInBirthYear + 29 : daysMonthInBirthYear + 28
            }
        }
    } else {
        for (let i = birthDataElemenets.month; i < currentDataElements.month + 1; i++) {
            if (day30.includes(i)) {
                daysMonthInBirthYear = daysMonthInBirthYear + 30
                continue
            }
            if (day31.includes(i)) {
                daysMonthInBirthYear = daysMonthInBirthYear + 31
                continue
            } else {
                daysMonthInBirthYear = isLeapYear ? daysMonthInBirthYear + 29 : daysMonthInBirthYear + 28
            }
        }
    }

    console.log('daysMonthInBirthYear: ', daysMonthInBirthYear)
}

export default class AgeCalculator extends React.Component {
    render() {
        const julieBirthData = '11.08.1991'
        const currentData = '25.01.2021'

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

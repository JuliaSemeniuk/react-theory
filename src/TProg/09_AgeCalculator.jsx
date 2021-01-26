import React from 'react'

function splitBirthData(julieBirthData) {
    const elements = julieBirthData.split('.')
    const day = Number(elements[0])
    const month = Number(elements[1])
    const year = Number(elements[2])
    console.log('day:', day, '; month:', month, '; year:', year, ';')
    return { day, month, year } //if name === keys
}

function calculateLeapYears(year) {
    const currentYear = 2021
    const birthYear = year

    let amountLeatYear = 0

    for (let i = birthYear; i < currentYear; i++) {
        if ((i % 4 === 0 && i % 100 != 0) || i % 400 === 0) {
            amountLeatYear = amountLeatYear + 1
        }
    }

    console.log('amount of leap years: ', amountLeatYear)

    return amountLeatYear
}

export default class AgeCalculator extends React.Component {
    render() {
        const julieBirthData = '11.01.1991'

        const birthDataElemenets = splitBirthData(julieBirthData) // return { day, month, year }

        const year = calculateLeapYears(birthDataElemenets.year)

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

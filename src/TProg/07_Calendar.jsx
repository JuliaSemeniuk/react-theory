import React from 'react'

function getCalendarInfo(data) {
    const elements = data.split('.')
    console.log(elements)

    const year = Number(elements[2])
    console.log('year: ', year)

    let isLeapYear = false
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
        isLeapYear = true
    }

    console.log('isLeapYear: ', isLeapYear)

    const month = Number(elements[1])

    console.log('month: ', month)

    let monthsDuration

    if (month % 2 === 0 && month != 2 && month != 8) {
        return { days: 30, isLeapYear }
    }
    if (month === 2) {
        return { days: isLeapYear ? 29 : 28, isLeapYear }
    }

    return { days: 31, isLeapYear }

    console.log('months duration: ', monthsDuration)
}

export default class Calendar extends React.Component {
    render() {
        const august1994 = '01.08.1994'

        const calendarInfo = getCalendarInfo('01.02.2019')
        console.log(calendarInfo)

        return (
            <div>
                Функция, которая принимает дату (в формате 01.01.0001) и возвращающая является ли текущий год высокосным
                и колличество дней в текущем месяце.
            </div>
        )
    }
}

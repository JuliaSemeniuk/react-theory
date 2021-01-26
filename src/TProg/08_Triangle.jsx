import React from 'react'

function getTrianglesArea(sideA, sideB, sideC) {
    const area = (1 / 2) * Math.sqrt(sideC ** 2 * sideB ** 2 - (sideC - sideB) ** 2)
    return area
}

export default class TrianglesArea extends React.Component {
    render() {
        const trianglesArea = getTrianglesArea(3, 4, 5)
        return (
            <div>
                <p>Функция принимает длинны сторон треугольника (3, 4, 5) и возвращает его площадь {trianglesArea}</p>
            </div>
        )
    }
}

import React from 'react';

function getBiggest(array) {
    let big = array[0];
    array.forEach(function (value, index) {
        //функція працює зарахунок порядку аргументів, тому без valueпрацюватиме не корректно
        if (big < array[index + 1]) {
            big = array[index + 1];
        }
    });
    return big;
}

function getReverse(array) {
    const newArray = array.reverse();
    return newArray;
}

function getReverseByCicle(array) {
    let newArr = [];
    array.forEach(function (value, index) {
        newArr.push(array[array.length - index]);
    });
    return newArr;
}

function findElement(array, element) {
    return array.includes(element); //.includes() повертає boolean, тому його необхідно привести до строки
}

function findElementByCicle(array, element) {
    let includeElement = 'false';
    array.forEach(function (value) {
        if (value === element) {
            includeElement = 'true';
        }
    });
    return includeElement;
}

export default class Review extends React.Component {
    render() {
        const arr = [-3, -2, -1, 0, 1, 2, 3];
        const zero = 0;
        const seven = 7;
        const five = 5;
        const biggest = getBiggest(arr);
        const reverseArr = getReverse(arr); // arr тепер виглядає, як [3, 2, 1, 0, -1, -2, -3]
        const reverseArrCicle = getReverseByCicle(arr);
        const elementZero = findElement(arr, zero).toString();
        const elementSeven = findElement(arr, seven).toString();
        const elementFive = findElementByCicle(arr, five);
        return (
            <div>
                <p>
                    1. Write a function that returns the largest element in a
                    list [-3, -2, -1, 0, 1, 2, 3]. <b>Result: </b>
                    {biggest}
                </p>
                <p>
                    2.1. Write function that reverses a list [-3, -2, -1, 0, 1,
                    2, 3]. <b>Result: </b>
                    {reverseArr}
                </p>
                <p>
                    2.2. Write function that reverses a list [3, 2, 1, 0, -1,
                    -2, -3] by using forEach(). <b>Result: </b>
                    {reverseArrCicle}
                </p>
                <p>
                    3.1. Write a function that checks whether an element{' '}
                    <b>0</b> occurs in a list [-3, -2, -1, 0, 1, 2, 3].{' '}
                    <b>Result: </b>
                    {elementZero}
                </p>
                <p>
                    3.2. Write a function that checks whether an element{' '}
                    <b>7</b> occurs in a list [-3, -2, -1, 0, 1, 2, 3].{' '}
                    <b>Result: </b>
                    {elementSeven}
                </p>
                <p>
                    3.3. Write a function that checks whether an element{' '}
                    <b>5</b> occurs in a list [-3, -2, -1, 0, 1, 2, 3] by using
                    forEach(). <b>Result: </b>
                    {elementFive}
                </p>
            </div>
        );
    }
}

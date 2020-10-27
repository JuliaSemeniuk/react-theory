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

function getOddElement(array) {
    let newArrey = [];
    array.forEach(function (value) {
        if (value % 2 !== 0) {
            newArrey.push(value);
        }
    });
    return newArrey;
}

function getSum(array) {
    let sum = 0;
    array.forEach(function (value, index) {
        sum = sum + array[index];
    });
    console.log('sum: ' + sum);
    return sum;
}

function concatArrays(array1, array2) {
    return array1.concat(array2);
}

function concatArraysAlternatingly(array1, array2) {
    let newArr = [];
    for (let i = 0; i < array1.length; i++) {
        newArr.push(array1[i]);
        newArr.push(array2[i]);
    }
    console.log('concat Arrays Alternatingly: ' + newArr);
    return newArr;
}

function sortTwoArrays(array1, array2) {
    let newArr = [];
    newArr = array1.concat(array2).sort(function (a, b) {
        return a - b;
    });
    console.log('type of value: ' + typeof newArr[0]);
    return newArr.join(', ');
}

function findPalindrome(str) {
    let result = 'true';
    let arr = str.split('');

    arr.forEach(function (value, index) {
        if (value !== arr[arr.lenght - 1 - index]) {
            result = 'false';
        }
    });

    console.log('find Palindrome: ' + result + ' type of value: ' + typeof arr);
    return result;
}

export default class Review extends React.Component {
    render() {
        const arr = [-3, -2, -1, 0, 1, 2, 3];
        const arrAbc = ['a', 'b', 'c'];
        const arr123 = [1, 2, 3];
        const arr146 = [10, 456, 6];
        const arr235 = [2, 100, 5];
        const zero = 0;
        const seven = 7;
        const five = 5;
        const palindromeMadam = 'madam';
        const palindromePineapple = 'pineapple';
        const biggest = getBiggest(arr);
        const reverseArr = getReverse(arr); // arr тепер виглядає, як [3, 2, 1, 0, -1, -2, -3]
        const reverseArrCicle = getReverseByCicle(arr);
        const elementZero = findElement(arr, zero).toString();
        const elementSeven = findElement(arr, seven).toString();
        const elementFive = findElementByCicle(arr, five);
        const oddElement = getOddElement(arr);
        const sumElement = getSum(arr);
        const concArr = concatArrays(arrAbc, arr123);
        const concatArrAlt = concatArraysAlternatingly(arrAbc, arr123);
        const sort = sortTwoArrays(arr146, arr235);
        const palindrome = findPalindrome(palindromeMadam);
        const palindromeNot = findPalindrome(palindromePineapple);

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
                    <b>0</b> occurs in a list [3, 2, 1, 0, -1, -2, -3].{' '}
                    <b>Result: </b>
                    {elementZero}
                </p>
                <p>
                    3.2. Write a function that checks whether an element{' '}
                    <b>7</b> occurs in a list [3, 2, 1, 0, -1, -2, -3].{' '}
                    <b>Result: </b>
                    {elementSeven}
                </p>
                <p>
                    3.3. Write a function that checks whether an element{' '}
                    <b>5</b> occurs in a list [3, 2, 1, 0, -1, -2, -3] by using
                    forEach(). <b>Result: </b>
                    {elementFive}
                </p>
                <p>
                    4*. Write a function that returns the elements on odd
                    positions in a list [3, 2, 1, 0, -1, -2, -3].{' '}
                    <b>Result: </b>
                    {oddElement}
                </p>
                <p>
                    5. Write a function that computes the running total of a
                    list [3, 2, 1, 0, -1, -2, -3]. (без Array.length)
                    <b>Result: </b>
                    {sumElement}
                </p>
                <p>
                    6. Write a function that tests whether a string is a
                    palindrome.**
                    <b>Result for 'madam': </b>
                    {palindrome}
                    <b>Result for 'pineapple': </b>
                    {palindromeNot}
                </p>
                <p>
                    7. Write a function that concatenates two lists. [a,b,c],
                    [1,2,3] → [a,b,c,1,2,3] <b>Result: {concArr} </b>
                </p>
                <p>
                    8. Write a function that combines two lists by alternatingly
                    taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3]{' '}
                    <b>Result: {concatArrAlt} </b>
                </p>
                <p>
                    9. Write a function that merges two sorted lists into a new
                    sorted list. [10, 456, 6], [2, 100, 5] → [1,2,3,4,5,6]. You
                    can do this quicker than concatenating them followed by a
                    sort. ***
                    <b>Result: {sort} </b>
                </p>
            </div>
        );
    }
}

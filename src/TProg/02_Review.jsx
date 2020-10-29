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

function getSumOfPositives(array) {
    let sum = 0;
    array.forEach(function(value) {
        if (value > 0) {
            sum = sum + value;
        }
    });
    return sum;
}

function getOpposite(number) {
    let oppositeNumber;
    if (number < 0 || number > 0) {
        oppositeNumber = -number
    }
    return oppositeNumber
};

function removeSpasesInStr (string) {
   const stringArr = string.split(' ');
   console.log('array of long string: ' + stringArr);
   let stringArrWithoutSpases = [];
   stringArr.forEach(function(value) {
       if(value !== ' ') {
           stringArrWithoutSpases.push(value)
       }
   });
   stringArrWithoutSpases.join('')
   return stringArrWithoutSpases;
}

function getFactorialByCycle (number) {
    let sum = 0;
    for (let i = 1; i < number+1; i++) {
        sum = sum + i;
    }
    return sum;
}

function getElementInLine (array, number) {
    let result = 'element did not find';
    array.forEach(function(value, index) {
        if (array[index] === number) {
            result = index;
        }
    })
    return result;    
}

function getStringInLine (array, string) {
    let result = 'element did not find';
    array.forEach(function(value, index) {
        if (value === string) {
            result = index;
        }
    })
    return result;    

}

function getElementByBinarySearch (array, element, startOfArray, endOfArray, middleOfArray) {
    let start = array[0];
    let end = array[array.length-1]
    let middle = Math.floor((start +(end-start))/2);
    let elementesToDelete;
    let removedElements;

    let result ='element didnt find'

    console.log('start: ' + start + '; end: ' + end + '; middle: ' + middle);

    if (element === middle) {
        result = array.indexOf(middle);
    };

    if (element < middle) {
       elementesToDelete = (array[array.length-1] - array.indexOf(middle));
       removedElements = array.splice(array.indexOf(middle), elementesToDelete);
       return getElementByBinarySearch(array, element)
       
    }

    if (element > middle) {
        elementesToDelete = (array[array.length-1] - array.indexOf(middle))-1;
        removedElements = array.splice(array.indexOf(middle), elementesToDelete);
        return getElementByBinarySearch(array, element)
    }
        console.log('array[array.lenght-1]: ' + array[array.length-1] + '; array.indexOf(middle)' + array.indexOf(middle) + '; array' + array)

        console.log('result: ' + result + '; elementesToDelete: ' + elementesToDelete)
    
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
        const minusSeven = -7;
        const two = 2;
        const three = 3;
        const palindromeMadam = 'madam';
        const palindromePineapple = 'pineapple';
        const longString = 'hello, I am a long string!'
        const strArray = ['winter', 'fall', 'spring', 'summer']
        const summer = 'summer'
        const arrayPositiveNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
        const sumOfPositives = getSumOfPositives(arr);
        const oppositeForSeven = getOpposite(seven);
        const oppositeForMinusSeven = getOpposite(minusSeven);
        const stringWithoutSpase = removeSpasesInStr(longString);
        const factorialByCycle = getFactorialByCycle(five)
        const elementInline = getElementInLine(arr, zero)
        const elementInlineSeven = getElementInLine(arr, seven)
        const stringInLineSummer = getStringInLine(strArray, summer)
        const stringInLineMadam = getStringInLine(strArray, palindromeMadam)
        const stringInlineNumber =  getStringInLine(strArray, seven)
        const elementByBinerySearch = getElementByBinarySearch(arrayPositiveNumber, three)
        


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
                <p>
                    10. You get an array of numbers, return the sum of all of the positives ones in list [3, 2, 1, 0, -1, -2, -3]. 
                    <b>Result: {sumOfPositives} </b>
                </p>
                <p>
                    10. Given a number, find its opposite. 
                    <b> Result for 7: {oppositeForSeven}; Result for -7: {oppositeForMinusSeven} </b>
                </p>
                <p>
                    11. Remove the spaces from the string, then return the resultant string.
                    <b> Result for 'hello, I am a long string!': {stringWithoutSpase} </b>
                </p>
                <p>
                    12. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
summation(8):  36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
                    <b> Result for '5':  {factorialByCycle}</b>
                </p>
                <p>
                    13. Inline search. Find element 0 in array [3, 2, 1, 0, -1, -2, -3].
                    <b> Result:  {elementInline}; Result for 7: {elementInlineSeven}</b> 
                </p>
                <p>
                    14. Inline search. Find element 'summer' in array ['winter', 'fall', 'spring', 'summer'].
                    <b> Result:  {stringInLineSummer};   Result for 'madam': {stringInLineMadam};   Result for 7: {stringInlineNumber}</b> 
                </p>
            </div>
        );
    }
}

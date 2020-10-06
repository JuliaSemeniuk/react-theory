import React from 'react'

let myNumber = 28.53; // true
let myBigNumber = 2816547932658421n;
let myString = 'Hello!' // true
let myBoolean = false;
let myEmpthyStr = ''; // false
let zero = 0; // false
let zeroStr = '0'; // true

let myBolleanString = String(myBoolean); // перетворення будь-якого типу данних в тип "string"

let firstStrNum = '125';
let secondStrNum = '5';
let divFirstSecNum = firstStrNum/secondStrNum; // 25 - числа автоматично приводяться до типу "number"

let sumNumStr = myNumber + firstStrNum; // 28.53125 - тип "string"

function showResults () {
    console.log(`28.53 is ${typeof(myNumber)}`);
    console.log(`2816547932658421n is ${typeof(myBigNumber)}`);
    console.log(`'Hello!' is ${typeof(myString)}`);
    console.log(`false is ${typeof(myBoolean)}`);
    console.log(`myBolleanString is ${typeof(myBolleanString)}`);
    console.log(`divFirstSecNum is ${typeof(divFirstSecNum)}, result is ${divFirstSecNum}`);
    console.log(`sumNumStr is ${typeof(sumNumStr)}, result is ${sumNumStr}`);
    console.log(`унарний плюс приводить нечисла до чисел: +false = ${+myBoolean}, type is ${typeof(+myBoolean)}`)
};

export default class Types extends React.Component{
    render() {
        let results = showResults();
        return (
            <div>
                
            </div>
        );
    };
};
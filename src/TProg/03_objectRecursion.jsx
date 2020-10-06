import React from 'react';

function showProp1(obj) {
    console.log(obj.prop1);
    if (obj.prop2 != undefined) {
        showProp1(obj.prop2);
    }
}

function calculateSum(obj1) {
    let sum = 0;

    function showProps(obj1) {
        const keys = Object.keys(obj1); // масив ключів об'єкта
        console.log(keys);

        keys.forEach((key) => {
            const value = obj1[key];
            if (typeof value === 'object') {
                showProps(value);
            } else {
                sum = sum + value;
                console.log(value);
            }
        });
    }

    showProps(obj1);
    return sum;
}

function flattenObject(obj1) {
    let arr = [obj1];

    function getObjects(obj1) {
        const keys = Object.keys(obj1); // keys = [a, b], [c, d], [e]

        keys.forEach((key) => {
            const value = obj1[key]; // value = a, {b}, c, {d}, e
            if (typeof value === 'object') {
                arr.push(value);
                getObjects(value);
            }
        });
    }

    getObjects(obj1);
    return arr;
}

function isEqual(obj1, obj2) {
    let result = true;

    function compareObject(obj1, obj2) {
        const keys1 = Object.keys(obj1);
        console.log('keys: ', keys1);
        // keys = [a, b], [c, d], [e]
        //const keys2 = Object.keys(obj2); // keys = [a, b], [c, d], [e, f]

        // if (keys1.length !== keys2.length) {
        //     result = false;
        //     return;
        // };

        keys1.forEach((key) => {
            //[a, b];
            let value1 = obj1[key];
            let value2 = obj2[key];

            console.log('value1: ', value1);
            console.log('value2: ', value2);

            if (typeof value1 === 'object') {
                compareObject(value1, value2);
            } else {
                if (value1 != value2) {
                    result = false;
                }
            }
        });
    }

    compareObject(obj1, obj2);

    return result;
}

function equal(obj1, obj2) {
    let result = true;

    function compare(obj1, obj2) {
        const keys = Object.keys(obj1);

        keys.forEach((key) => {
            let val1 = obj1[key];
            let val2 = obj2[key];

            if (typeof val1 === 'object') {
                compare(val1, val2);
            } else {
                if (val1 !== val2) {
                    result = false;
                    return;
                }
            }
        });
    }

    compare(obj1, obj2);
    return result;
}

// до всіх значень додати 5

function add5(obj3) {
    console.log('before ', obj3);
    const keys = Object.keys(obj3);
    keys.forEach((key) => {
        obj3[key] = obj3[key] + 5;
    });
    console.log('after ', obj3);
}

function math(obj4) {
    console.log('before ', obj4);
    const keys = Object.keys(obj4);
    keys.forEach((key) => {
        console.log(key);
        let val = obj4[key];
        console.log(val % 10);
        if (val % 10 === 0) {
            obj4[key] = val / 2;
        }
    });
    console.log('after ', obj4);
}

export default class ObjectRecursion extends React.Component {
    render() {
        const obj = {
            prop1: 1,
            prop2: {
                prop1: 2,
                prop2: {
                    prop1: 3,
                },
            },
        };

        const obj1 = {
            a: 1, //key = a
            b: {
                c: 2,
                d: {
                    e: 3,
                },
            },
        };

        const obj2 = {
            a: 1, //key = a
            b: {
                c: 2,
                d: {
                    e: 3,
                    // f: 6,
                },
            },
        };

        const obj3 = {
            1: 5,
            value: 10,
            someVal: 15,
        };

        const obj4 = {
            3839398: 15,
            howAreYouDoing: 20,
            code: 25,
        };

        // showProp1(obj);

        // let result =  calculateSum(obj1);

        // let flattedObject = flattenObject(obj1);
        // console.log(flattedObject)

        //  const res = isEqual(obj1, obj2);
        //  const resEqual = equal(obj1, obj2);

        //add5(obj3);
        math(obj4);

        return <div></div>;
    }
}

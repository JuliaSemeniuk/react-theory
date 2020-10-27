import React from 'react' 

function factorial (n) {
    if (n != 1) {
        return n * factorial (n-1);
    };
    return n;
};

function fibonacci (a, b, n) {
    if (n > 1) {
        return fibonacci (b, a+b, n-1);
    };
    return b;
};

function exp (a, b, n) {
    if (n > 1) {        
        return exp (a*b, b, n-1);        
    };
    return a;
};

function numbers (a, b) {
    if (a < b) {
        console.log(a);
        return numbers (a+1, b);
    };
    if (a > b) {
        console.log(a);
        return numbers (a-1, b);
       
    }; 
    return (a);
};

//функція Акермана

function ackermann (m, n) {
    if (m > 0 && n > 0) {
        return ackermann (m-1, ackermann (m, n-1))
    };
    if (m > 0 && n === 0) {
        return ackermann (m-1, 1)
    };
    if (m === 0) {
        return (n+1);
    };
};

//Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.

function fun (n) {
    if (n%2 ===0 && n/2 !=1) {
        return fun (n/2);
    } if (n%2 !=0 && n/2 !=1) {
        console.log('no');
    } else {
        console.log('yes');
    };
};


export default class Factorial extends React.Component {
    render () {
        let factorial3 = factorial(3);
        let fibonacci10 = fibonacci(0, 1, 10);
        let exp2to4 = exp(2, 2, 4);
        let exp3to3 = exp(3, 3, 4);

        let ackermannResult = ackermann(3,4);
       
        return (
            <div>
                {/* <p>Factorial 3 is {factorial3}</p>
                <p>Fibonacci 10 is {fibonacci10}</p>
                <p>2 exp 4 is {exp2to4}</p>
                <p>3 exp 3 is {exp3to3}</p> */}
                <p>A(1,2) = {ackermannResult}</p>
            </div>
        )
    }
}
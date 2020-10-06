import React from 'react';

function sayHello() {
    return 'Hello, World!';
}

function sayHelloFiveTimes() {
    let phrase = 'Hello';
    for (let i = 0; i < 4; i++) {
        phrase = phrase + ' Hello';
    }

    const phraseAlternative = 'Hello!';
    let newPhrase = '';
    for (let i = 0; i < 4; i++) {
        newPhrase = newPhrase + phraseAlternative;
    }

    const arrHello = [phrase, newPhrase];

    return arrHello;
}

export default class HelloWorld extends React.Component {
    render() {
        const greeting = sayHello();
        const [firstResult, secondResult] = sayHelloFiveTimes();
        return (
            <div>
                <p>
                    1. Вивести строку 'Hello, World!'. <b>Рішення: </b>
                    {greeting}
                </p>
                <p>
                    2. Вивести строку 'Hello' 5 разів. <b>Рішення 1: </b>
                    {firstResult}
                    <b>Рішення 2: </b>
                    {secondResult}
                </p>
            </div>
        );
    }
}

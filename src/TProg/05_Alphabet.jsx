import React from 'react'

export default class Alphabet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            letterNumber: '',
        };
    };

    onChangeLetter = (event) => {
        const { alphabet } = this.state;
        let currencyLetter = event.target.value.toUpperCase();
        let currencyLetterNumber = alphabet.indexOf(currencyLetter)+1;
        console.log ('currencyLetter: ', currencyLetter);
        console.log('currencyLetterNumber:' ,currencyLetterNumber);
        this.setState({ letterNumber: currencyLetterNumber})
    };

    

    render () {
        return (
            <div>
                <p>Do you now what letter number is in alphabet? No? Check it!</p>
                Letter 
                <input onChange={this.onChangeLetter} type='text' placeholder='Choose letter'></input>
                Number
                <input onChange={this.onChangeLetter} type='text' value={this.state.letterNumber}></input>
            </div>
        );
    };
};
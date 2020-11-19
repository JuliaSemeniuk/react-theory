import React from 'react'

export default class Cryptographer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            string: '',
        }
    }

    onChangeString = (event) => {
        let currentString = event.target.value
        let stringToArray = currentString.split('')

        console.log('currentString: ', currentString)
        console.log('stringToArray: ', stringToArray)

        const alphabet = [
            ' ',
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z',
        ]
        let array = []

        stringToArray.forEach(function (value) {
            let numberOfLetter = alphabet.indexOf(value)
            if (numberOfLetter === 0) {
                array.push(alphabet[0])
            }
            if (numberOfLetter === 1) {
                array.push(alphabet[alphabet.length - 1])
            } else {
                array.push(alphabet[alphabet.length - numberOfLetter])
            }
            console.log('numberOfLetter: ', numberOfLetter)
            console.log('alphabet[0]: ', alphabet[0])
            console.log('alphabet[alphabet.length: ', alphabet[alphabet.length])
        })

        array = array.join('')

        this.setState({ string: array })

        console.log('array: ', array)
    }

    render() {
        return (
            <div>
                <input onChange={this.onChangeString} type="text" placeholder="enter a word"></input>
                <input onChange={this.onChangeString} type="text" placeholder="code" value={this.state.string}></input>
            </div>
        )
    }
}

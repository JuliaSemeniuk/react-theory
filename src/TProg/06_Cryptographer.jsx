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
        const array = []

        stringToArray.forEach(function (value) {
            let numberOfLetter = alphabet.indexOf(value)

            if (numberOfLetter === 0) {
                array.push(alphabet[0])
            } else {
                array.push(alphabet[alphabet.length - numberOfLetter])
            }
        })

        this.setState({ string: array.join('') })
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

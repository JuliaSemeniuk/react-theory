import React from 'react'

export default class Cryptographer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stringCrypted: '',
            stringUncripted: '',
        }
    }

    onChangeDoCrypto = (event) => {
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

        this.setState({ stringCrypted: array.join('') })
    }

    // onChangeUndoCrypto = (event) => {
    //     let currentString = event.target.value
    //     let stringToArray = currentString.split('')
    //     console.log('currentString: ', currentString)

    //     const alphabet = [
    //         ' ',
    //         'a',
    //         'b',
    //         'c',
    //         'd',
    //         'e',
    //         'f',
    //         'g',
    //         'h',
    //         'i',
    //         'j',
    //         'k',
    //         'l',
    //         'm',
    //         'n',
    //         'o',
    //         'p',
    //         'q',
    //         'r',
    //         's',
    //         't',
    //         'u',
    //         'v',
    //         'w',
    //         'x',
    //         'y',
    //         'z',
    //     ]
    //     const array = []

    //     stringToArray.forEach(function (value) {
    //         let numberOfLetter = alphabet.indexOf(value)
    //         console.log('numberOfLetter: ', numberOfLetter)

    //         if (numberOfLetter === 0) {
    //             array.push(alphabet[0])
    //         } else {
    //             array.push(alphabet[alphabet.length - numberOfLetter])
    //         }
    //     })

    //     this.setState({ stringUncripted: array.join('') })
    // }

    render() {
        return (
            <div>
                <input onChange={this.onChangeDoCrypto} type="text" placeholder="enter a word"></input>
                <br />
                cryptographer
                <br />
                <input onChange={this.onChangeDoCrypto} type="text" value={this.state.stringCrypted}></input>
                <br />
                decryptographer
                <br />
                <input onChange={this.onChangeUndoCrypto} type="text" value={this.state.stringUncripted}></input>
            </div>
        )
    }
}

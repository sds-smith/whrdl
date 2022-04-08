import * as React from 'react';
import { useState, useEffect } from 'react'
import { StyleSheet, TextInput } from 'react-native';

const Square = (props) => {
    const {index, guessState, currentGuess, currentLetter, onLetterEntry} = props
    const [value, setValue] = useState('')
}

const squareStyles = StyleSheet.create ({
    main: {
        flex: 1,
        marginHorizontal: 1,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center'
    }

})

export default Square;
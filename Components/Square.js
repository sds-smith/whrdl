import * as React from 'react';
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Square = (props) => {
    const {guessId, index, guessState, currentGuess, currentLetter, onLetterEntry} = props
    const [value, setValue] = useState('')
    
    const handleEntry = (e) => {
        setValue(e.target.value)
        onLetterEntry(e.target.value)
    }

    let autofocus = ((currentGuess === guessId) && (currentLetter === index))

    return (
        <TextInput 
            value={value}
            guessState={guessState}
            currentGuess={currentGuess}
            style={squareStyles.main}
            autoCapitalize='characters'
            caretHidden
            maxLength={1}
            onChange={handleEntry}
            autoFocus={autofocus}
        />
    )
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
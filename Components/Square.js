import * as React from 'react';
import { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native';

const Square = (props) => {
    const {guessId, index, guessState, currentGuess, currentLetter, onLetterEntry} = props
    const [value, setValue] = useState('')
    const [render, setRender] = useState(true)

    // useEffect(() => {
        // setRender(false)
        // return () => setRender(true)
    // })
    
    const handleEntry = (e) => {
        setValue(e.target.value)
        onLetterEntry(e.target.value)
    }
    let autofocus = ((currentGuess === guessId) && (currentLetter === index))
    const textInput = <TextInput 
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

    return (
        {textInput}
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
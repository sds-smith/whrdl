import * as React from 'react';
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Square = (props) => {
    const {guessId, index, guessState, currentGuess, currentLetter, onLetterEntry} = props
    const [value, setValue] = useState('')
    const [render, setRender] = useState(true)
    
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
    let altSquare = <Text style={squareStyles.alts}>HALLO</Text>
    let component = textInput

    if ((currentLetter === index) && (!render)) {
        component = null
    }

    useEffect(() => {
        if (currentLetter !== 0) {
            setRender(false)

        }
        return setRender(true)
    }, [currentLetter])

    return (
        <View>
            {component}
        </View>

    )
}

const squareStyles = StyleSheet.create ({
    main: {
        flex: 1,
        marginHorizontal: 1,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center'
    },
    alts: {
        flex: 1,
        marginHorizontal: 1,
        borderColor: 'salmon',
        borderWidth: 1,
        textAlign: 'center',
    }
})

export default Square;
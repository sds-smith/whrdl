import * as React from 'react';
import { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native';

const Row = (props) => {

    const {guessId, guessState, currentGuess, currentLetter, onLetterEntry, onWordEntry} = props

    const square0 = useRef()
    const square1 = useRef()    
    const square2 = useRef()
    const square3 = useRef()
    const square4 = useRef()

    const [value0, setValue0] = useState('')    
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')
    
    let count=0
    useEffect(() => {
        count ++
        console.log('useEffect bark bark count=', count)
        square0.current.focus()
    }, [currentGuess])

    const handleLetterEntry = (e) => {
        const value = e.target.value
        switch (currentLetter) {
            case 0 : 
                setValue0(value)
                square1.current.focus()
                break
            case 1 : 
                setValue1(value)
                square2.current.focus()
                break
            case 2 : 
                setValue2(value)
                square3.current.focus()
                break
            case 3 : 
                setValue3(value)
                square4.current.focus()
                break
            case 4 : 
                setValue4(value)
                break
            default:
                break
        }
        onLetterEntry(value)
    }

    const handleWordEntry = () => {
        onWordEntry()
    }

    const disabled = currentGuess !== guessId
    return (
  
        <View style={rowStyles.main} >

            <TextInput 
                ref={(square0)}
                value={value0}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
                autoCapitalize='characters'
                autoCorrect={false}
                autoComplete={false}
                caretHidden
                maxLength={1}
                onChange={handleLetterEntry}
                disabled={disabled}
                autoFocus={currentGuess === guessId}
            />

            <TextInput 
                ref={square1}
                value={value1}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
                autoCapitalize='characters'
                autoCorrect={false}
                autoComplete={false}
                caretHidden
                maxLength={1}
                onChange={handleLetterEntry}
                disabled={disabled}
            />

            <TextInput
                ref={square2} 
                value={value2}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
                autoCapitalize='characters'
                autoCorrect={false}
                autoComplete={false}
                caretHidden
                maxLength={1}
                onChange={handleLetterEntry}
                disabled={disabled}
            />  

            <TextInput
                ref={square3} 
                value={value3}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
                autoCapitalize='characters'
                autoCorrect={false}
                autoComplete={false}
                caretHidden
                maxLength={1}
                onChange={handleLetterEntry}
                disabled={disabled}
            />

            <TextInput 
                ref={square4}
                value={value4}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
                autoCapitalize='characters'
                autoCorrect={false}
                autoComplete={false}
                caretHidden
                maxLength={1}
                onChange={handleLetterEntry}
                disabled={disabled}
            />

            <Button title='ENTER' onPress={handleWordEntry}/>          
        </View>
    )
}

const rowStyles = StyleSheet.create ({
    main: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5
    }, 
    square: {
        flex: 1,
        marginHorizontal: 1,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center'
    }

})

export default Row;

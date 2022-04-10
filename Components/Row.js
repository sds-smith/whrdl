import * as React from 'react';
import { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';

const Row = (props) => {

    const {guessId, guessState, currentGuess, currentLetter, onLetterEntry} = props

    const [value0, setValue0] = useState('')    
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')
    


    const handleLetterEntry = (e) => {
        const value = e.target.value
        switch (currentLetter) {
            case 0 : 
                setValue0(value)
                break
            case 1 : 
                setValue1(value)
                break
            case 2 : 
                setValue2(value)
                break
            case 3 : 
                setValue3(value)
                break
            case 4 : 
                setValue4(value)
                break
            default:
                break
        }
        onLetterEntry(value)
    }

    return (
  
        <View style={rowStyles.main} >

            <Text    
                value={value0}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
                onChange={handleLetterEntry}
            >{value0}</Text>

            <Text 
                value={value1}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
                onChange={handleLetterEntry}
            >{value1}</Text>

            <Text 
                value={value2}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
                onChange={handleLetterEntry}
            >{value2}</Text>  

            <Text 
                value={value3}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
                onChange={handleLetterEntry}
            >{value3}</Text>

            <Text 
                value={value4}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
                onChange={handleLetterEntry}
            >{value4}</Text>
        </View>
    )
}

const rowStyles = StyleSheet.create ({
    main: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 5,
        justifyContent: 'center',
        width: '100%',
        marginVertical: 5
    }, 
    square: {
        flex: 1,
        width: 50,
        fontSize: 30,
        marginHorizontal: 5,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center'
    }

})

export default Row;

import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Row = (props) => {

    const {guessId, guessState, currentGuess, currentLetter, onLetterEntry} = props

    const wordGuess = guessState[guessId]

    const value0 = wordGuess[0]
    const value1 = wordGuess[1]
    const value2 = wordGuess[2]
    const value3 = wordGuess[3]
    const value4 = wordGuess[4]

    return (
  
        <View style={rowStyles.main} >

            <Text
                id={0}    
                value={value0}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
            >{value0}</Text>

            <Text
                id={1} 
                value={value1}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
            >{value1}</Text>

            <Text
                id={2} 
                value={value2}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
            >{value2}</Text>  

            <Text
                id={3} 
                value={value3}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
            >{value3}</Text>

            <Text
                id={4} 
                value={value4}
                guessState={guessState}
                currentGuess={currentGuess}
                style={rowStyles.square}
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
        fontSize: 50,
        marginHorizontal: 5,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        lineHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15
    }

})

export default Row;

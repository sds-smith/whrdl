import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';

const Row = (props) => {

    const {guessId, guessState, letterMatches, currentGuess, currentLetter, onLetterEntry} = props

    let [value0, value1, value2, value3, value4] = guessState[guessId]

    return (
  
        <View style={rowStyles.main} >

            <Text    
                value={value0}
                guessState={guessState}
                currentGuess={currentGuess}
                style={[rowStyles.square, {backgroundColor: letterMatches[guessId][0]}]}
            >{value0}</Text>

            <Text 
                value={value1}
                guessState={guessState}
                currentGuess={currentGuess}
                style={[rowStyles.square, {backgroundColor: letterMatches[guessId][1]}]}
            >{value1}</Text>

            <Text 
                value={value2}
                guessState={guessState}
                currentGuess={currentGuess}
                style={[rowStyles.square, {backgroundColor: letterMatches[guessId][2]}]}
            >{value2}</Text>  

            <Text 
                value={value3}
                guessState={guessState}
                currentGuess={currentGuess}
                style={[rowStyles.square, {backgroundColor: letterMatches[guessId][3]}]}
            >{value3}</Text>

            <Text 
                value={value4}
                guessState={guessState}
                currentGuess={currentGuess}
                style={[rowStyles.square, {backgroundColor: letterMatches[guessId][4]}]}
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
        fontSize: 40,
        paddingTop: 5,
        marginHorizontal: 5,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fafafa'
    }

})

export default Row;

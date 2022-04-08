import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import Square from './Square';

const Row = (props) => {

    const {guessId, guessState, currentGuess, currentLetter, onLetterEntry, onWordEntry} = props

    return (
        <View style={rowStyles.main}>
            <Square index={0} id={'0'}
                guessId={guessId} 
                guessState={guessState}
                currentGuess={currentGuess}
                currentLetter={currentLetter} 
                onLetterEntry={onLetterEntry}
            />
            <Square index={1} id={'1'} 
                guessId={guessId}
                guessState={guessState}
                currentGuess={currentGuess}
                currentLetter={currentLetter} 
                onLetterEntry={onLetterEntry}
            />
            <Square index={2} id={'2'}
                guessId={guessId} 
                guessState={guessState}
                currentGuess={currentGuess}
                currentLetter={currentLetter} 
                onLetterEntry={onLetterEntry}
            />
            <Square index={3} id={'3'} 
                guessId={guessId}
                guessState={guessState}
                currentGuess={currentGuess}
                currentLetter={currentLetter} 
                onLetterEntry={onLetterEntry}
            />
            <Square index={4} id={'4'}
                guessId={guessId} 
                guessState={guessState}
                currentGuess={currentGuess}
                currentLetter={currentLetter} 
                onLetterEntry={onLetterEntry}
            />  
            <Button title='ENTER' onPress={onWordEntry}/>          
        </View>
    )
}

const rowStyles = StyleSheet.create ({
    main: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5
        // alignItems: 'center',
        // justifyContent: 'center',
    }

})

export default Row;

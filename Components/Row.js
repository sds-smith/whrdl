import * as React from 'react';
import { useRef } from 'react'
import { StyleSheet, View, Button } from 'react-native';
import Square from './Square';

const Row = (props) => {

    const {guessId, guessState, currentGuess, currentLetter, onLetterEntry, onWordEntry} = props
    const {square1, square2, square3, square4, square0} = useRef()

    return (
        <View style={rowStyles.main}>
            <Square index={0} id={'0'} ref={square0}
                guessId={guessId} 
                guessState={guessState}
                currentGuess={currentGuess}
                currentLetter={currentLetter} 
                onLetterEntry={onLetterEntry}
            />
            <Square index={1} id={'1'} ref={square1} 
                guessId={guessId}
                guessState={guessState}
                currentGuess={currentGuess}
                currentLetter={currentLetter} 
                onLetterEntry={onLetterEntry}
            />
            <Square index={2} id={'2'} ref={square2}
                guessId={guessId} 
                guessState={guessState}
                currentGuess={currentGuess}
                currentLetter={currentLetter} 
                onLetterEntry={onLetterEntry}
            />
            <Square index={3} id={'3'}  ref={square3}
                guessId={guessId}
                guessState={guessState}
                currentGuess={currentGuess}
                currentLetter={currentLetter} 
                onLetterEntry={onLetterEntry}
            />
            <Square index={4} id={'4'} ref={square4}
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

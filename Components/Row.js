import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Square from './Square';

const Row = (props) => {

    const {guessState, currentGuess, currentLetter, onLetterEntry, onWordEntry} = props

    return (
        <View style={rowStyles.main}>
            <Square index={0} id={'0'} 
                guessState={guessState}
                currentGuess={currentGuess}
                currentLetter={currentLetter} 
                onLetterEntry={onLetterEntry}
            />
            <Square index={1} id={'1'} 
                guessState={guessState}
                currentGuess={currentGuess}
                currentLetter={currentLetter} 
                onLetterEntry={onLetterEntry}
            />
            <Square index={2} id={'2'} 
                guessState={guessState}
                currentGuess={currentGuess}
                currentLetter={currentLetter} 
                onLetterEntry={onLetterEntry}
            />
            <Square index={3} id={'3'} 
                guessState={guessState}
                currentGuess={currentGuess}
                currentLetter={currentLetter} 
                onLetterEntry={onLetterEntry}
            />
            <Square index={4} id={'4'} 
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

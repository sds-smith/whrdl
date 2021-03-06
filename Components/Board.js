import * as React from 'react';
import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native';
import  Row from './Row';

const Board = (props) => {

    const {guessState, letterMatches, currentGuess, currentLetter, handleLetterEntry, handleWordEntry} = props

    return (
        <View style={boardStyles.main}>
            <Row id={1} guessId={'guess1'} 
                guessState={guessState}
                letterMatches={letterMatches}
                currentGuess={currentGuess}
                currentLetter={currentLetter}
                onLetterEntry={(letter)=> handleLetterEntry(letter)} 
                onWordEntry={handleWordEntry}
            />
            <Row id={2} guessId={'guess2'}
                guessState={guessState}
                letterMatches={letterMatches}
                currentGuess={currentGuess}
                currentLetter={currentLetter}
                onLetterEntry={(letter)=> handleLetterEntry(letter)} 
                onWordEntry={handleWordEntry}
            />
            <Row id={3} guessId={'guess3'}
                guessState={guessState}
                letterMatches={letterMatches}
                currentGuess={currentGuess}
                currentLetter={currentLetter}
                onLetterEntry={(letter)=> handleLetterEntry(letter)} 
                onWordEntry={handleWordEntry}
            />
            <Row id={4} guessId={'guess4'}
                guessState={guessState}
                letterMatches={letterMatches}
                currentGuess={currentGuess}
                currentLetter={currentLetter}
                onLetterEntry={(letter)=> handleLetterEntry(letter)} 
                onWordEntry={handleWordEntry}
            />
            <Row id={5} guessId={'guess5'}
                guessState={guessState}
                letterMatches={letterMatches}
                currentGuess={currentGuess}
                currentLetter={currentLetter}
                onLetterEntry={(letter)=> handleLetterEntry(letter)} 
                onWordEntry={handleWordEntry}
            />  
            <Row id={6} guessId={'guess6'}
                guessState={guessState}
                letterMatches={letterMatches}
                currentGuess={currentGuess}
                currentLetter={currentLetter}
                onLetterEntry={(letter)=> handleLetterEntry(letter)} 
                onWordEntry={handleWordEntry}
            />  
        </View>
    )
}

const boardStyles = StyleSheet.create ({
    main: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    }

})

export default Board;
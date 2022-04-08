import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import  Row from './Row';

const Board = (props) => {

    const {guessState, currentGuess, currentLetter, handleLetterEntry, handleWordEntry} = props

}

const boardStyles = StyleSheet.create ({
    main: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        // backgroundColor: 'gray'
    }

})

export default Board;
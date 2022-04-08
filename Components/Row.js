import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';
import Square from './Square';

const Row = (props) => {

    const {guessState, currentGuess, currentLetter, onLetterEntry, onWordEntry} = props

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

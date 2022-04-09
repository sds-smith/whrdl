import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LetterKey from './Key.js'
const Keyboard = () => {

    return (
        <View style={keyboardStyles.main}>
            <View style={keyboardStyles.row}>
                <LetterKey style={keyboardStyles.letterButton} title='Q' /><br/>
                <LetterKey style={keyboardStyles.letterButton} title='W' /><br/>
                <LetterKey style={keyboardStyles.letterButton} title='E' /><br/>
                <LetterKey style={keyboardStyles.letterButton} title='R' /><br/>
                <LetterKey style={keyboardStyles.letterButton} title='T' /><br/>
                <LetterKey style={keyboardStyles.letterButton} title='Y' /><br/>
                <LetterKey style={keyboardStyles.letterButton} title='U' /><br/>
                <LetterKey style={keyboardStyles.letterButton} title='I' /><br/>
                <LetterKey style={keyboardStyles.letterButton} title='O' /><br/>
                <LetterKey style={keyboardStyles.letterButton} title='P' /><br/>                
            </View>
            <View style={keyboardStyles.row}>
                <LetterKey style={keyboardStyles.letterButton} title='A' />
                <LetterKey style={keyboardStyles.letterButton} title='S' />
                <LetterKey style={keyboardStyles.letterButton} title='D' />
                <LetterKey style={keyboardStyles.letterButton} title='F' />
                <LetterKey style={keyboardStyles.letterButton} title='G' />
                <LetterKey style={keyboardStyles.letterButton} title='H' />
                <LetterKey style={keyboardStyles.letterButton} title='J' />
                <LetterKey style={keyboardStyles.letterButton} title='K' />
                <LetterKey style={keyboardStyles.letterButton} title='L' />
            </View>
            <View style={keyboardStyles.row}>
                <LetterKey style={keyboardStyles.funcButton} title='ENTER' />
                <LetterKey style={keyboardStyles.letterButton} title='Z' />
                <LetterKey style={keyboardStyles.letterButton} title='X' />
                <LetterKey style={keyboardStyles.letterButton} title='C' />
                <LetterKey style={keyboardStyles.letterButton} title='V' />
                <LetterKey style={keyboardStyles.letterButton} title='B' />
                <LetterKey style={keyboardStyles.letterButton} title='N' />
                <LetterKey style={keyboardStyles.letterButton} title='M' />
                <LetterKey style={keyboardStyles.funcButton} title='BACK' />
            </View>
        </View>
    )
}

const keyboardStyles = StyleSheet.create ({
    main: {
        flex: 3,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 5
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginVertical: 2
    },
    letterButton: {
        flex: 1,
        marginHorizontal: 5
    },
    funcButton: {
        flex: 2,
        marginHorizontal: 5
    }

})

export default Keyboard;
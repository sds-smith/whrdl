import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import LetterKey from './Key.js'
const Keyboard = () => {

    return (
        <View style={keyboardStyles.main}>
            <View style={keyboardStyles.row}>
                <LetterKey  title='Q' />
                <LetterKey  title='W' />
                <LetterKey  title='E' />
                <LetterKey  title='R' />
                <LetterKey  title='T' />
                <LetterKey  title='Y' />
                <LetterKey  title='U' />
                <LetterKey  title='I' />
                <LetterKey  title='O' />
                <LetterKey  title='P' />               
            </View>
            <View style={keyboardStyles.row}>
                <LetterKey  title='A' />
                <LetterKey  title='S' />
                <LetterKey  title='D' />
                <LetterKey  title='F' />
                <LetterKey  title='G' />
                <LetterKey  title='H' />
                <LetterKey  title='J' />
                <LetterKey  title='K' />
                <LetterKey  title='L' />
            </View>
            <View style={keyboardStyles.row}>
                <LetterKey  title='ENTER' />
                <LetterKey  title='Z' />
                <LetterKey  title='X' />
                <LetterKey  title='C' />
                <LetterKey  title='V' />
                <LetterKey  title='B' />
                <LetterKey  title='N' />
                <LetterKey  title='M' />
                <FunctionKey title='&#9003;' />
            </View>
        </View>
    )
}

const FunctionKey = (props) => {
    return (
        <TouchableOpacity style={keyboardStyles.funcButton}><Text style={{fontSize: 50}}>{props.title}</Text></TouchableOpacity>
    )
}

const keyboardStyles = StyleSheet.create ({
    main: {
        flex: 3,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    letterButton: {
        flex: 1,
    },
    funcButton: {
        fontSize: 50,
        paddingHorizontal: 20,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,   
        backgroundColor: '#f2f2f2'       
    }
})

export default Keyboard;
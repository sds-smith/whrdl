import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LetterKey from './Key.js'

const Keyboard = (props) => {

    const {handleLetterEntry, handleDelete, handleWordEntry} = props

    return (
        <View style={keyboardStyles.main}>
            <View style={keyboardStyles.row}>
                <LetterKey  title='Q' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='W' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='E' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='R' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='T' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='Y' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='U' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='I' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='O' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='P' onPress={(letter)=>handleLetterEntry(letter)}/>               
            </View>
            <View style={keyboardStyles.row}>
                <LetterKey  title='A' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='S' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='D' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='F' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='G' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='H' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='J' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='K' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='L' onPress={(letter)=>handleLetterEntry(letter)}/>
            </View>
            <View style={keyboardStyles.row}>
                <FunctionKey  title='ENTER' handlePress={handleWordEntry}/>
                <LetterKey  title='Z' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='X' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='C' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='V' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='B' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='N' onPress={(letter)=>handleLetterEntry(letter)}/>
                <LetterKey  title='M' onPress={(letter)=>handleLetterEntry(letter)}/>
                <FunctionKey className={'large'} title='&#9003;' handlePress={handleDelete} />
            </View>
        </View>
    )
}

const FunctionKey = (props) => {
    const {className, title, handlePress} = props
    return (
        <TouchableOpacity style={keyboardStyles.funcButton} onPress={handlePress} >
            <Text style={className === 'large' ? keyboardStyles.buttonTextLg : keyboardStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const keyboardStyles = StyleSheet.create ({
    main: {
        flex: 3,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        //width: '100%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        //width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    letterButton: {
        flex: 1,
    },
    funcButton: {
        paddingHorizontal: 20,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,   
        backgroundColor: '#f2f2f2'       
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonTextLg: {
        fontSize: 50
    }
})

export default Keyboard;
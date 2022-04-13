import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Header = (props) => {
    return (
        <View style={headerStyles.main}>
            <View style={headerStyles.buttonContainer}>
                <TouchableOpacity style={headerStyles.button}>
                    <Text>RESET</Text>
                </TouchableOpacity>
            </View>

            <View style={headerStyles.heading}>
                <Text style={headerStyles.text}>WHRDL</Text>
                <Text>{props.headerMessage}</Text>
            </View> 
            <View style={headerStyles.buttonContainer}>
                <TouchableOpacity style={headerStyles.button}>
                    <Text>HINT</Text>
                </TouchableOpacity>       
            </View>
        </View>      

    )
}

const headerStyles = StyleSheet.create ({
    main: {
        flex: 1,
        marginHorizontal: 5,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#e6e6e6',
        marginBottom: 10,
        paddingTop: 10
    },
    heading: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: '500'
    },
    buttonContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#e6e6e6',
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5
    }

})

export default Header;
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
    return (
        <View style={headerStyles.main}>
            <Text style={headerStyles.text}>WHRDL</Text>
            <Text>{props.headerMessage}</Text>
        </View>
    )
}

const headerStyles = StyleSheet.create ({
    main: {
        flex: 1,
        marginHorizontal: 5,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5
    },
    text: {
        fontSize: 30,
        fontWeight: '500'
    }

})

export default Header;
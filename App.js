import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native'
import {myStyles} from './myStyle'


export default class App extends Component {

    render() {
        console.log('App is started')
        return (
            <View style={myStyles.background}>
                <Text style={myStyles.text}>
                    Hello Amigo
                </Text>

            </View>
        )
    }
}

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';



class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Look</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
});


export default Logo;
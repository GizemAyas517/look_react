import React, {Component} from 'react'
import {View, StyleSheet, Text} from "react-native";

class NoMoreCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.noMoreCards}>
                <Text>No more suggestions</Text>
            </View>
        )
    }
}





const styles = StyleSheet.create(
    {
        noMoreCards: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
);

export default NoMoreCards;
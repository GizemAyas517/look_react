import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.thumbnail} source={{uri: this.props.image}} />
                <Text style={styles.text}>This is card {this.props.name}</Text>
            </View>
        )
    }
}

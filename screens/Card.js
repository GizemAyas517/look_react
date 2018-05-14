import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.thumbnail} source={{uri: this.props.image}} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
        elevation: 1,
    },
    thumbnail: {
        width: 300,
        height: 300,
    },
    text: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10
    },

});

export default Card;
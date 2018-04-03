import React, {Component} from 'react'
import {Text, View, StyleSheet} from "react-native";


class Wardrobe extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>My Wardrobe</Text>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#4C4C47"
    }


});

export default Wardrobe;
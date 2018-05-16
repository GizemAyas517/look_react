import React, {Component} from 'react'
import {Image, Text, View, StyleSheet} from "react-native";


class Congrats extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Image style={styles.icon} source={require('./confetticolor.png')} />
                <Text style={styles.title}>Your outfit is perfect!</Text>

            </View>
        );
    }


}
const styles= StyleSheet.create(
    {

        icon:{
            width:50,
            height:50,
            marginTop:150,
            marginLeft:165,
            marginBottom:30,
        },

        title:{
            color:"#fff",
            fontSize:20,
            fontFamily:"Arial",
            marginLeft:80,

        }
    }
);


export default Congrats;

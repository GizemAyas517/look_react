
import React, {Component} from 'react'
import {View, StyleSheet, Text, FlatList} from "react-native";



class LookList extends Component{

    render(){
        return(
            <View>
                <Text style={styles.title}>
                    Looks
                </Text>
                <FlatList>

                </FlatList>
            </View>

        )
    }



}

const styles= StyleSheet.create(
    {
        title:{
            color:"white",
            fontSize:20
        }
    }
);

export default LookList;
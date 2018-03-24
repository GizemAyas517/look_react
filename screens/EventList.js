/**
 * Created by gizemayas on 11.03.2018.
 */
import React,{Component} from 'react'
import {FlatList, Text, View, StyleSheet, Button, TouchableHighlight} from "react-native";
import {List, ListItem} from "native-base";


class EventList extends Component {

    constructor(props){
        super(props);
    }

    _handleButton(){
        this.props.navigation.navigate('ImagePicker')
    }

    render(){
        return(
            <View>
                <Text style={styles.title}>
                    Events
                </Text>
                <FlatList>
                    <ListItem>
                    <TouchableHighlight style={styles.button}>
                        <Text>
                            Bir
                        </Text>
                    </TouchableHighlight>
                    </ListItem>
                    <ListItem>
                    <TouchableHighlight style={styles.button}>
                        <Text>
                            Bir
                        </Text>
                    </TouchableHighlight>
                    </ListItem>
                    <ListItem>
                    <TouchableHighlight style={styles.button}>
                        <Text>
                            Bir
                        </Text>
                    </TouchableHighlight>
                    </ListItem>
                </FlatList>

            </View>
        );
    }



}


const styles= StyleSheet.create(
    {
        title:{
            color:"white",
            fontSize:20
        },
        button:{
            opacity:0.5,
            backgroundColor:"#DDDDDD"
        }
    }
);

export default EventList;
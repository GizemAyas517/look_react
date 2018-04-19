import React,{Component} from 'react'
import {FlatList, Text, View, StyleSheet, Button, TouchableHighlight, TouchableOpacity} from "react-native";



class EventList extends Component {

    constructor(props){
        super(props);
        this.state={
            event_list:this.props.list,
        }
    }


    render(){
        return(
            <View>
                <Text style={styles.title}>
                    Events
                </Text>
                <FlatList horizontal data={this.state.event_list} renderItem={this.render_item}/>

            </View>
        );
    }

}


const styles= StyleSheet.create(
    {

        list_button:{
            opacity:0.7,
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding:15,
            borderRadius:50,
            borderColor:"white",
            borderStyle:'solid',
            borderWidth:3

        },

    }
);

export default EventList;
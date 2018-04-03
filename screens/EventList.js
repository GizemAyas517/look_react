import React,{Component} from 'react'
import {FlatList, Text, View, StyleSheet, Button, TouchableHighlight, TouchableOpacity} from "react-native";



class EventList extends Component {

    constructor(props){
        super(props);
        this.state={
            event_list:this.props.list,
        }
    }

    _handleButton(){
        this.props.navigation.navigate('ImagePicker')
    }



    render_item = ({item}) => (
        <TouchableOpacity style={styles.list_button}>
            <Text style={styles.list_text}>{item.event_type}</Text>
        </TouchableOpacity>
    );




    render(){
        return(
            <View>
                <Text style={styles.title}>
                    Events
                </Text>
                <FlatList data={this.state.event_list} renderItem={this.render_item}/>

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
        },
        list_button:{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10

        },
        list_text:{
            color:"#ffffff"
        }
    }
);

export default EventList;
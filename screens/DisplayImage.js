import React, {Component} from 'react'
import {Image, ScrollView, View} from "react-native";
import {Button, Text} from "native-base";




class DisplayImage extends Component{

    constructor(props){
        super(props);
        const { params } = this.props.navigation.state;
        const my_image = params ? params.my_image : null;
        const event = params ? params.my_name : null;
        const date = params ? params.my_date : null;
        this.state={
            event_date:date,
            event_name:event,
            outfit:my_image,
        }

    }

    componentWillMount(){
        this.fetchData();
    }


    fetchData = async() => {
        const response = await fetch('http://188.166.114.155:8000/validations/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                feedback: true,
                Event_date: this.state.event_date,
                event_name: this.state.event_name,
                outfit:this.state.outfit
            }),
        });
        const json = await response.json();


    };



    render(){

        return(
        <ScrollView>
            <Image style={{width:400, height:600}} source={{uri:this.state.outfit.uri}}/>
            <Button onPress={()=>this.fetchData()}>
                <Text>Send request</Text>
            </Button>
        </ScrollView>
        );
    }


}

export default DisplayImage;

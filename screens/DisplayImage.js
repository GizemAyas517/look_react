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
            image_count:0,
        }

    }

    generate_picture_id(){
        return this.state.image_count;
    }



    fetchData = async()=>{
        // JSON = integer | string | boolean | list(json)  | {key, value set} for key string, value: JSON


            this.setState({image_count: this.state.image_count + 1});


            const data = new FormData();
            data.append("feedback", true);
            data.append("event_date", "2018-04-07T12:12:00Z");
            data.append("event_type", 1);
            data.append("user", 1);
            data.append('outfit_image', {
                uri: this.state.outfit.uri,
                type: 'image/jpeg',
                name: this.generate_picture_id() + "_" + ".jpg"
            });


            let x = await fetch('https://looktheapp.com/validations/', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: data
            }).then(res => res.json());



    };
    render(){

        return(
        <ScrollView>
            <Image style={{width:400, height:600}} source={{uri:this.state.outfit.uri}}/>
            <Button onPress={()=>this.fetchData()}>
                <Text>Send outfit to look</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("ValidateAnswer", {event_n:this.state.event_name})}>
                <Text>
                    See Result!
                </Text>
            </Button>
        </ScrollView>
        );
    }


}

export default DisplayImage;

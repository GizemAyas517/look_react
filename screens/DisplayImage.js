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
            data.append("event_date", 'this is date');
            data.append("outfit", this.state.outfit.uri);
            data.append("event_type", this.state.event_name);
            data.append("user", 1);
            data.append('outfit_image', {
                uri: this.state.outfit.uri,
                type: 'image/jpeg', // or photo.type
                name: this.generate_picture_id() + "_" + ".jpg"
            });


            let x = await fetch('http://188.166.114.155:8000/validations/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
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
                <Text>Send request</Text>
            </Button>
        </ScrollView>
        );
    }


}

export default DisplayImage;

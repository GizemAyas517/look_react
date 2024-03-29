import React, {Component} from 'react'
import {Image, ImageBackground, ScrollView, View} from "react-native";
import {Button, Text} from "native-base";

import Spinner from 'react-native-loading-spinner-overlay';


class DisplayImage extends Component{

    constructor(props){
        super(props);
        const { params } = this.props.navigation.state;
        const my_image = params ? params.my_image : null;
        const event = params ? params.my_name : null;
        const date = params ? params.my_date : null;

        this.state={
            visible: false,
            event_date:date,
            event_name:event,
            outfit:my_image,
            image_count:0,
        };




    }

    generate_picture_id(){
        return this.state.image_count;
    }



    fetchData = async()=>{
        // JSON = integer | string | boolean | list(json)  | {key, value set} for key string, value: JSON

        await  this.setState({
            image_count: this.state.image_count + 1,
            visible: true
        });


        const data = new FormData();
        data.append("feedback", true);
        data.append("event_date", "2018-04-07T12:12:00Z");
        data.append("event_type", 8);
        data.append("user", 1);
        data.append('outfit_image', {
            uri: this.state.outfit.uri,
            type: 'image/jpeg',
            name: this.generate_picture_id() + "_" + ".jpg"
        });

        console.warn(this.state.event_name);


        let x = await fetch('https://looktheapp.com/validations/', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: data
        }).then(res => res.json());

        await this.setState({
            visible: false
        });


        this.props.navigation.navigate('ValidateAnswer');

    };


    _goBack(){
        this.props.navigation.navigate('ImagePicker',{event_n:this.state.event_name, eventD:this.state.event_date});
    }

    render(){

        return(
            [

                    <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />,
                <ImageBackground
                    style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: null,

                    }}
                    source={require('./backgroundvalidate.png')}>

                    <Image style={{width:250, height:300, alignSelf:'center', marginTop:100}} source={{uri:this.state.outfit.uri}}/>
                    <Button onPress={() => this.fetchData()}>
                        <Text>Send to Look</Text>
                    </Button>
                    <Button onPress={() => this._goBack()}>
                        <Text>Change the picture</Text>
                    </Button>
                </ImageBackground>
            ]

        );
    }


}

export default DisplayImage;

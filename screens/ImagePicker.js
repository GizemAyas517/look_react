import React, {Component} from 'react'
import {View, StyleSheet, ImageBackground, Image} from "react-native";
import {Button, Text} from "native-base";



class ImagePicker extends Component{
    constructor(props){
        super(props);
        const { params } = this.props.navigation.state;
        const my_event = params ? params.event_n : null;
        const my_date = params ? params.eventD : null;
        this.state={
            event_name:my_event,
            event_date:my_date,

        }
    }


    _handleCameraRoll(){
        this.props.navigation.navigate('CameraRoll',{event_n:this.state.event_name, event_d:this.state.event_date})
    }

    render(){
        return (
            <ImageBackground

                style={{
                flex: 1,
                alignSelf: 'stretch',
                width: null,

                }}

                source={require('./backgroundvalidate.png')}>

                <Text style={styles.title}>
                    Please upload your outfit for the event
                </Text>
                <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column', margin:20}}>
                        <Image style={styles.icon} source={require('./picture.png')}/>
                        <Button style={styles.button}>
                            <Text style={{color:"#000"}}>
                                Roll
                            </Text>
                        </Button>
                    </View>
                    <View style={{flexDirection:'column', margin:20}}>
                        <Image style={styles.icon} source={require('./photo-camera.png')}/>
                        <Button style={styles.button} onPress={()=>this._handleCameraRoll()}>
                            <Text style={{color:"#000"}}>
                                Camera
                            </Text>
                        </Button>
                    </View>
                </View>
                </View>
            </ImageBackground>

        );
    }


}

const styles= StyleSheet.create(
    {
        container:{
          marginTop:50,
          marginLeft:80
        },
        button: {
            backgroundColor:"#fff",

        },
        icon:{
            width:50,
            height:50,
            margin:10
        },
        title:{
            color:"#fff",
            fontSize:20,
            fontFamily:"Arial",
            marginLeft:50,
            marginTop:80

        },
    }
);

export default ImagePicker;

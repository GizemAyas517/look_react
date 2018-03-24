import React, {Component} from 'react'
import {View, StyleSheet} from "react-native";
import {Button, Text} from "native-base";
import AnimatedLinearGradient from "react-native-animated-linear-gradient";


const myColors= ['rgb(255,255,255)', 'rgb(132,143,165)'];

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
            <AnimatedLinearGradient customColors={myColors} speed={4000} >
                <View style={styles.container}>
                <Text>
                    Let's see your outfit
                </Text>
                <View style={{flexDirection:'row'}}>
                    <Button style={styles.button}>
                        <Text>
                            Camera
                        </Text>
                    </Button>
                    <Button style={styles.button} onPress={()=>this._handleCameraRoll()}>
                        <Text>
                            Roll
                        </Text>
                    </Button>
                </View>

                </View>
            </AnimatedLinearGradient>

        );
    }


}

const styles= StyleSheet.create(
    {
        buttonContainer:{
            flexDirection:'row'
        },

        container: {
            flex:1,
            justifyContent:'center',
            alignItems:'center'

        },
        button: {
            margin:30
        }
    }
);

export default ImagePicker;

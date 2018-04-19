import React, {Component} from 'react'
import {DatePickerIOS, View, StyleSheet, ImageBackground, Image} from "react-native";
import AnimatedLinearGradient,{presetColors} from "react-native-animated-linear-gradient";
import {Button, Text} from "native-base";
import ImagePicker from "./ImagePicker";

const myColors= ['rgb(255,255,255)', 'rgb(132,143,165)'];



class EventDate extends Component{

    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        const my_name = params ? params.event_n : null;
        this.state = {
            chosenDate: new Date(),
            eventName:my_name
        };

        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({chosenDate: newDate})
    }

    render() {
        return (
            <ImageBackground
                style={{
                flex: 1,
                alignSelf: 'stretch',
                width: null,
                }}
                source={require('./backgroundvalidate.png')}
                >
            <Image style={styles.icon} source={require('./calendar.png')} />
            <Text style={styles.title}>Please pick the event date</Text>
            <DatePickerIOS
                    date={this.state.chosenDate}
                    onDateChange={this.setDate}
            />


            <Button style={styles.button} onPress={() => this.props.navigation.navigate('ImagePicker',{event_n:this.state.eventName, eventD:this.state.chosenDate})}>
                    <Text>
                        Next
                    </Text>
            </Button>
            </ImageBackground>

        )
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    button:{
        position: 'absolute',
        backgroundColor:"#DB3069",
        borderRadius:100,
        bottom:10,
        right:10,

    },
    title:{
        color:"#fff",
        fontSize:20,
        fontFamily:"Arial",
        marginLeft:80,

    },
    icon:{
        width:50,
        height:50,
        marginTop:150,
        marginLeft:165,
        marginBottom:30,
    },

});




export default EventDate;

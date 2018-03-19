import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {Button, Form, Input, Item, Label, Text} from "native-base";
import AnimatedLinearGradient from "react-native-animated-linear-gradient";
import EventDate from "./EventDate";

const myColors= ['rgb(255,255,255)', 'rgb(132,143,165)'];

class EventName extends Component{


    _handleButton(){
        return <EventDate/>
    }


    render(){
        return (
            <AnimatedLinearGradient customColors={myColors} speed={4000}>
                        <Form style={styles.container}>
                            <Item floatingLabel>
                                <Label>Please enter event type</Label>
                                <Input />
                            </Item>
                            <Button block style={styles.button} onPress={() => this._handleButton()}>
                                <Text style={{color:"#ffffff", opacity:1}}>
                                    Next
                                </Text>
                            </Button>
                        </Form>

            </AnimatedLinearGradient>

        );
    }

}


const styles= StyleSheet.create(
    {
        container:{
            alignItems:'center',
            justifyContent:'center',
            flex:1

        },
        button:{
            marginTop: 40,
            marginLeft:20,
            marginRight:20,

        }
    }
);

export default EventName;
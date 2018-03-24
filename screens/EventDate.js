import React, {Component} from 'react'
import {DatePickerIOS, View, StyleSheet} from "react-native";
import AnimatedLinearGradient,{presetColors} from "react-native-animated-linear-gradient";
import {Button, Text} from "native-base";
import ImagePicker from "./ImagePicker";

const myColors= ['rgb(255,255,255)', 'rgb(132,143,165)'];



class EventDate extends Component{

    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        const my_name = params ? params.event_name : null;
        this.state = {
            chosenDate: new Date(),
            eventName:my_name
        };

        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({chosenDate: newDate})
    }

    _handlePress(){
        this.props.navigation.navigate('ImagePicker',{event_n:this.state.eventName, eventD:this.state.chosenDate});

    }

    render() {
        return (
            <AnimatedLinearGradient customColors={myColors} speed={4000}>
            <View style={styles.container}>
                <DatePickerIOS
                    date={this.state.chosenDate}
                    onDateChange={this.setDate}
                />
            </View>
                <Button block onPress={() => this._handlePress()}>
                    <Text>
                        Next
                    </Text>
                </Button>
            </AnimatedLinearGradient>
        )
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

});




export default EventDate;

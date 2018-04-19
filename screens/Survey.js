import React, {Component} from 'react'
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'
import Answers from "./Answers";
import {ImageBackground} from "react-native";



class Survey extends Component{
    constructor(props){
        super(props);
        this.state={
            number:0,
            surveyState:'',
        }


    }
    /*
     <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000}>
     </AnimatedLinearGradient>
     */


    render(){
        return(
            <ImageBackground style={{
                flex: 1,
                alignSelf: 'stretch',
                width: null,
            }}
            source={require('./backgroundsurvey.png')}
            >
                <Answers
                    num={this.state.number}
                    navigation={this.props.navigation}
                />
            </ImageBackground>

        );
    }



}

export default Survey;
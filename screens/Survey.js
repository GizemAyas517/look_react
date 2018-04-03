import React, {Component} from 'react'
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'
import Answers from "./Answers";



class Survey extends Component{
    constructor(props){
        super(props);
        this.state={
            number:0,
            surveyState:'',
        }


    }





    render(){
        return(
            <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000}>
                <Answers
                    num={this.state.number}
                    navigation={this.props.navigation}
                />

            </AnimatedLinearGradient>
        );
    }



}

export default Survey;
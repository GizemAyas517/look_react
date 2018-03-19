import React, {Component} from 'react'
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'
import Answers from "./Answers";


const questions= [
    {
        question: "If we opened your closet, what color palette would we mostly see?",
        ans1: "Black",
        ans2: "Neutrals",
        ans3: "Rainbow",
        ans4: "Earth Tones",
    },
    {
        question:"How would your friends describe you?",
        ans1:"Traditional",
        ans2:"Sharp",
        ans3:"Playful",
        ans4:"Relaxed",
    },
    {
        question:"How adventurous are you with your style?",
        ans1:"Not at all",
        ans2:"Normal",
        ans3:"One piece at a time",
        ans4:"Quite adventurous",
    }
];


class Survey extends Component{
    constructor(props){
        super(props);
        this.state={
            number:0,
            surveyState:'',
        }

    }




    render(){
        console.log('render called');
        return(
            <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000}>
                <Answers
                    questions={questions}
                    num={this.state.number}
                />
            </AnimatedLinearGradient>
        );
    }



}

export default Survey;
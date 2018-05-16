import React, {Component} from 'react'
import {ImageBackground, View} from "react-native";
import {Button, Text} from "native-base";
import Feedback from "./Feedback";
import Congrats from "./Congrats";
import Wrong from "./Wrong";


class ValidateRequest extends Component{

    constructor(props){
        super(props);
        const { params } = this.props.navigation.state;
        const my_name = params ? params.event_n : null;
        this.state={
            event_name:my_name,
            answer:""
        }
    }

    getAnswer(){
        if(this.state.answer == "true"){
            return <Congrats/>;
        } else{
            return <Wrong/>
        }

    }

    componentWillMount(){
        this.getResponse()
            .then((data) => {
                this.setState({answer:data.result})
            }).catch((error)=>{
            console.log("Api call error");
            alert(error.message);
        });

    }


    async getResponse() {
        const response = await fetch("https://looktheapp.com/validate/?event_type="+this.state.event_name, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).catch(function(error) {
            throw error
        });
        const json = await response.json();
        return json;
    }


    render(){
        return(
            <ImageBackground
                style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    width: null,

                }}
                source={require('./backgroundvalidate.png')}>

                {this.getAnswer()}
                <Feedback navigation={this.props.navigation}/>

            </ImageBackground>
        );


    }


}


export default ValidateRequest;

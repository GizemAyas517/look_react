import React, {Component} from 'react'
import {ImageBackground} from "react-native";
import Logo from "./Logo";
import Form from "./Form";
import ButtonSubmit from "./ButtonSubmit";
import SignupSection from "./SignupSection";


class LoginScreen extends Component{
    render(){
        return (
            <ImageBackground
                style={{
                flex: 1,
                alignSelf: 'stretch',
                width: null,

            }}
                source={require('./loginback.png')}>
                <Logo/>
                <Form/>
                <SignupSection/>
                <ButtonSubmit navigation={this.props.navigation}/>


        </ImageBackground>
        );
    }
}


export default LoginScreen;
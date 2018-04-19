/**
 * Created by gizemayas on 11.03.2018.
 */
import React, {Component} from 'react'
import {TabBarIOS, View, StyleSheet} from "react-native";
import {Button, Footer, Text, FooterTab,} from "native-base";
import Validate from './Validate'
import Suggest from './Suggest'
import EventName from "./EventName";
import ImagePicker from "./ImagePicker";


class MyFooterTab extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedTab:'',
        }
    }


    _handleValidate(){
        this.props.navigation.navigate('ValidationName')
    }


    _handleSuggestion(){
        this.props.navigation.navigate('SuggestEventName')
    }

    _handleWardrobe(){
        this.props.navigation.navigate('ImagePicker')
    }


    render(){
        return(

            <Footer>
                <FooterTab>
                    <Button onPress={()=> this._handleValidate()}>
                        <Text>Validate</Text>
                    </Button>
                    <Button onPress={()=> this._handleWardrobe()}>
                        <Text>My Wardrobe</Text>
                    </Button>
                    <Button onPress={()=> this._handleSuggestion()}>
                        <Text>Suggest Look</Text>
                    </Button>
                </FooterTab>
            </Footer>

        );

    }


}


export default MyFooterTab;
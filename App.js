import React, { Component } from 'react';
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Survey from "./screens/Survey";
import Profile from "./screens/Profile";
import EventName from "./screens/EventName";
import ImagePicker from "./screens/ImagePicker";
import EventDate from "./screens/EventDate";
import CameraRoll from "./screens/CameraRoll";
import DisplayImage from "./screens/DisplayImage";
import Wardrobe from "./screens/Wardrobe";
import SuggestEventName from "./screens/Suggest";


const RootStack = StackNavigator(
    {
        Home: {
            screen: Survey,
        },
        Profile: {
            screen: Profile,
        },
        ValidationName:{
            screen: EventName,
        },
        ValidationList:{
            screen: EventDate,
        },
        ImagePicker:{
            screen: ImagePicker,
        },
        CameraRoll:{
            screen: CameraRoll,
        },
        DisplayImage:{
            screen: DisplayImage,
        },
        Wardrobe:{
            screen: Wardrobe,
        },
        SuggestEvent:{
            screen: SuggestEventName,
        }
    },
    {
        initialRouteName: 'Profile',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }

);



export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }

    }


    render() {

        return (<RootStack/>
        );
    }

}

const styles= StyleSheet.create(
    {
        container:{

        }
    }
);

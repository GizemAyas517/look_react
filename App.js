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
import EventList from "./screens/EventList";
import ImagePicker from "./screens/ImagePicker";
import EventDate from "./screens/EventDate";
import CameraRoll from "./screens/CameraRoll";


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
        }
    },
    {
        initialRouteName: 'Home',
    }
);



export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }

    }

    componentWillMount(){
        this.fetchData();
    }

    fetchData = async() => {
        const response = await fetch('https://facebook.github.io/react-native/movies.json');
        const json = await response.json();
        this.setState({data: json.movies});

    };


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

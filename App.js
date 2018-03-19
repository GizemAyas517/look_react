
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'
import Survey from "./screens/Survey";
import Profile from "./screens/Profile";
import EventName from "./screens/EventName";
import EventDate from "./screens/EventDate";
import ImagePicker from "./screens/ImagePicker";
import Validate from './screens/Validate';

export default class App extends Component {
  render() {
    return (
          <Survey/>
    );
  }
}

import React, {Component} from 'react'
import {Text, View, StyleSheet, ImageBackground, Image, Dimensions} from "react-native";
import {Button} from 'native-base'
import Swiper from 'react-native-swiper'
import {YellowBox} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


class Tutorial extends Component{

    constructor(props){
        super(props);

        console.disableYellowBox = true;
    }



    render(){
        return(
            <Swiper>
            <ImageBackground style={styles.slide}
                             source={require('./tuto1.png')}>
                <Image style={styles.icon} source={require('./dress.png')}/>
                <Text style={styles.text}>Validate Your Outfit!</Text>
                <Text style={styles.small_text}>Choose an event you are planning and send your outfit to Look! Look will tell you if you are dressed appropriately.</Text>

            </ImageBackground>
            <ImageBackground style={styles.slide}
                                 source={require('./tuto3.png')}>
                <Image style={styles.icon} source={require('./clothes.png')}/>
                <Text style={styles.text}>Discover new outfits!</Text>
                <Text style={styles.small_text}>Look is your personal stylist! Give us an event and we'll suggest clothes that you will mostly like!</Text>
            </ImageBackground>
            <ImageBackground style={styles.slide} source={require('./tuto2.png')}>
                <Image style={styles.icon} source={require('./dressingroom.png')}/>
                <Text style={styles.text}>Get Started!</Text>
                <Button style={styles.button} onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text>Get started</Text>
                </Button>
            </ImageBackground>
        </Swiper>
        );
    }


}

const styles = StyleSheet.create({
    icon:{
        height:90,
        width:90,
        position:'absolute',
        bottom:260,
        left:DEVICE_WIDTH/2 - 45,

    },
   slide:{
       flex: 1,
       alignSelf: 'stretch',
       justifyContent: 'center',
       alignItems: 'center',
       width: null,
   },
    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        position:'absolute',
        bottom:210,

    },
    small_text:{
        position:'absolute',
        bottom:90,
        color: '#fff',
        fontSize: 15,
        height:100,
        width:250,
        textAlign:'center'
    },
    button:{
        position:'absolute',
        bottom:60,
        left:130,
        opacity:0.7,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding:15,
        borderRadius:50,
        borderColor:"white",
        borderStyle:'solid',
        borderWidth:3,
        alignSelf:'center'

    }
});


export default Tutorial;
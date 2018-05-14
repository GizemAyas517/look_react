import React, {Component} from 'react'
import {Text, View, StyleSheet, ImageBackground, Image} from "react-native";
import {Button} from 'native-base'
import Swiper from 'react-native-swiper'


class Tutorial extends Component{

    constructor(props){
        super(props);

        console.disableYellowBox = true;
    }

    render(){
        return(
            <Swiper>
            <ImageBackground style={styles.slide}
                             source={require('./tutorialone.png')}>
                <Image style={styles.icon} source={require('./dress.png')}/>
                <Text style={styles.text}>Validate Your Outfit!</Text>
                <Button style={styles.button} onpress={() => this.props.navigation.navigate('Profile')}>
                    <Text>Get started</Text>
                </Button>
            </ImageBackground>
            <ImageBackground style={styles.slide}
                                 source={require('./tutorialtwo.png')}>
                <Image style={styles.icon} source={require('./clothes.png')}/>
                <Text style={styles.text}>Discover new outfits!</Text>
                <Button style={styles.button} onpress={() => this.props.navigation.navigate('Profile')}>
                    <Text>Get started</Text>
                </Button>
            </ImageBackground>
            <ImageBackground style={styles.slide} source={require('./tutorialthree.png')}>
                <Image style={styles.icon} source={require('./dressingroom.png')}/>
                <Text style={styles.text}>Get Started!</Text>
                <Button style={styles.button} onpress={this.props.navigation.navigate('Profile')}>
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
        marginBottom:10
    },
   slide:{
       flex: 1,
       alignSelf: 'stretch',
       justifyContent: 'center',
       alignItems: 'center',
       width: null,
   },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default Tutorial;
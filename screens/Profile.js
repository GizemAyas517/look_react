import React, {Component} from 'react'
import {FlatList, Image, ImageBackground, StyleSheet, View, Dimensions} from 'react-native'
import MyFooterTab from "./MyFooterTab";
import {Body, Button, Card, CardItem, Container, Content, List, Text, Thumbnail} from "native-base";
import ProfileCard from "./ProfileCard";
import { Col, Row, Grid } from "react-native-easy-grid";


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class Profile extends Component{

    constructor(props){
        super(props);

    }


    render(){

        return(
            <ImageBackground
                style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    width:null

                }}
                source={require('./wallback.png')}>
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <ProfileCard/>
                    <Button style={styles.button} onPress={() => this.props.navigation.navigate('Survey')}>
                        <Text style={{color:"#000000"}}>
                            Take the survey
                        </Text>
                    </Button>
                    <Grid style={styles.grid}>
                        <Row style={{marginLeft:20}}>
                            <Col>
                                <Thumbnail style={styles.thumb} square source={require("./shoe1.png")}/>
                            </Col>

                            <Col>
                                <Thumbnail style={styles.thumb} square source={require("./dress1.png")}/>
                            </Col>

                            <Col>
                                <Thumbnail style={styles.thumb} square source={require("./shoe2.png")}/>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
                <MyFooterTab navigation={this.props.navigation}/>
            </Container>
        </ImageBackground>
        );
    }



}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,

        },
        title:{
            color:"white",
            fontSize:20,
            margin:10
        },
        content:{
            marginTop:30,
        },
        button: {
            opacity:0.7,
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding:15,
            borderRadius:50,
            borderColor:"white",
            borderStyle:'solid',
            borderWidth:3,
            alignSelf:'center'
        },
        small_button:{
            margin:10,
            opacity:0.7,
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding:15,
            borderRadius:50,
            borderColor:"white",
            borderStyle:'solid',
            borderWidth:3
        },
        button_text:{
            color:"#000000",
            opacity:0.7,
            alignItems: 'center',
            alignSelf:"center"
        },
        thumb:{
            height:90,
            width:90,
        },
        grid:{
            marginTop:20
        },

    }
);

export default Profile
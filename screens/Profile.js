import React, {Component} from 'react'
import {FlatList, Image, ImageBackground, StyleSheet, View} from 'react-native'
import MyFooterTab from "./MyFooterTab";
import EventList from "./EventList"
import LookList from './LookList'
import {Button, Container, Content, Text} from "native-base";


class Profile extends Component{

    constructor(props){
        super(props);
        this.state={
            event_list:[],
        }
    }

    componentWillMount(){
        this.getData()
            .then((data) => {
                for (let i=0; i<data.count; i++){
                    let joined = this.state.event_list.concat(data.results[i].event_type_details.name);
                    this.setState({event_list: joined});
                }

            }).catch((error)=>{
            console.log("Api call error");
            alert(error.message);
        });

    }


    async getData() {
        const response = await fetch("https://looktheapp.com/validations/", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
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
        <ImageBackground style={{
            flex: 1,
            alignSelf: 'stretch',
            width: null,

        }}
               source={require('./background.png')}>

            <Container style={styles.container}>
                <Content style={styles.content}>
                    <Text style={{color:"#ffffff", fontSize:35, marginTop:20, marginLeft:10}}>
                        Alice Westbrook
                    </Text>
                    <Text style={styles.title}>Events</Text>
                    <FlatList horizontal data={this.state.event_list}
                              renderItem={({item}) => (<Button style={styles.small_button}>
                                  <Text style={styles.button_text}>
                                      {item}
                                  </Text>
                            </Button>)}/>
                    <Button style={styles.button} onPress={()=>this.props.navigation.navigate('Home')}>
                        <Text style={{color:"#000000"}}>
                            Take the survey
                        </Text>
                    </Button>
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
            marginTop: 300,
            marginLeft:80,
            opacity:0.7,
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding:15,
            borderRadius:50,
            borderColor:"white",
            borderStyle:'solid',
            borderWidth:3

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
            color:"#000000"
        }
    }
);

export default Profile
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import MyFooterTab from "./MyFooterTab";
import EventList from "./EventList"
import LookList from './LookList'
import {Container, Content, Text} from "native-base";


class Profile extends Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            events:'',
            looks:'',
            event_list:null,

        }
    }

    componentWillMount(){
        return fetch('http://188.166.114.155:8000/validations/')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    event_list: responseJson.results,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });

    }

    render(){
        return(


                <Container style={styles.container}>
                    <Content style={styles.content}>
                        <Text>
                            Alice Westbrook
                        </Text>
                        <EventList list={this.state.event_list}/>
                    </Content>
                    <MyFooterTab navigation={this.props.navigation}/>
                </Container>

        );
    }



}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#E5DCC5',
        },
        content:{
            marginTop:30,
        }
    }
);

export default Profile
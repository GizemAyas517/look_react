import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import MyFooterTab from "./MyFooterTab";
import EventList from "./EventList"
import LookList from './LookList'
import {Container, Content, Header, Text} from "native-base";


class Profile extends Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            events:'',
            looks:'',

        }
    }

    render(){
        return(


                <Container style={styles.container}>
                    <Content style={styles.content}>
                        <Text>
                            Alice Westbrook
                        </Text>
                        <EventList/>
                        <LookList/>
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
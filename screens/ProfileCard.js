import React, {Component} from 'react'
import {View, StyleSheet} from "react-native";
import {Body, Card, CardItem, Left, Right, Text, Thumbnail} from "native-base";


class ProfileCard extends Component {

    constructor(props){
        super(props);
        this.state={
            event_count:0,
        };

        this.getEventData()
            .then((data) => {
                this.setState({event_count:data.count});
            }).catch((error)=>{
            console.log("Api call error");
            alert(error.message);
        });
    }

    async getEventData() {
        const response = await fetch("https://looktheapp.com/events/", {
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
        return (
                <Card style={styles.card}>
                        <CardItem>
                            <Left/>
                            <Body style={styles.profilePic}>
                                <Thumbnail style={{height:75, width:75}} source={require('./profilepicture.png')} />

                            </Body>
                            <Right/>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Amy Waterhouse
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={styles.text}>
                                    Events: {this.state.event_count}
                                </Text>
                            </Left>
                            <Right>
                                <Text style={styles.text}>
                                    Wardrobe: 3
                                </Text>
                            </Right>
                        </CardItem>
                    </Card>
                    );

            }

        }


const styles= StyleSheet.create(
    {
        card:{
            backgroundColor: '#ffffff',
            opacity:0.8,
            justifyContent: 'center',
            alignSelf:'center',
            alignItems: 'center',
            height:200,
            width:300,
            marginTop:200
        },
        profilePic:{
            alignSelf:'center'
        },
        text:{
            fontSize:15
        }

    }
);


export default ProfileCard;

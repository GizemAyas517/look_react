import React, {Component} from 'react'
import {Image, ImageBackground, Picker, StyleSheet, View} from 'react-native'
import {Button, Form, Input, Item, Label, Text} from "native-base";


class SuggestEventName extends Component{

    constructor(props){
        super(props);
        this.state={
            options:[],
            chosen: '',
        }
    }




    componentWillMount(){
        this.getoptions()
            .then((data) => {
                for (let i=0; i<data.count; i++ ){
                    let joined = this.state.options.concat(data.results[i].name);
                    this.setState({options: joined});

                }

            }).catch((error)=>{
            console.log("Api call error");
            alert(error.message);
        });

    }

    async getoptions() {
        const response = await fetch("https://looktheapp.com/events/", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).catch(function(error) {
            throw error
        });
        const json = await response.json();
        return json;
    }

    updateUser = (value) => {
        this.setState({chosen:value})
    };


    /*



     */



    render(){
        return (
            <ImageBackground
                style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    width: null,

                }}
                source={require('./backgroundsuggest.png')}>

                <Image style={styles.icon} source={require('./invitation.png')} />
                <Text style={styles.title}>Please pick a event type</Text>
                <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                    {this.state.options.map((i,index) =>
                        (<Picker.Item key={index} label={i} value={i} />)
                    )}
                </Picker>


                <Button style={styles.button} onPress={() => this.props.navigation.navigate('Suggest',{event_n:this.state.chosen})}>
                    <Text>
                        Next
                    </Text>
                </Button>

            </ImageBackground>

        );
    }

}


const styles= StyleSheet.create(
    {
        container:{
            alignItems:'center',
            justifyContent:'center',
            flex:1

        },
        icon:{
            width:50,
            height:50,
            marginTop:150,
            marginLeft:165,
            marginBottom:30,
        },
        button:{
            position: 'absolute',
            backgroundColor:"#DB3069",
            borderRadius:100,
            bottom:20,
            right:20,

        },
        title:{
            color:"#fff",
            fontSize:20,
            fontFamily:"Arial",
            marginLeft:80,

        }
    }
);

export default SuggestEventName;
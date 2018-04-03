import React, {Component} from 'react'
import {Text, View, TouchableHighlight, StyleSheet, AlertIOS, Image, ScrollView} from 'react-native'
import Profile from './Profile'
import Carousel from 'react-native-carousel';
import {Button} from "native-base";



class Answers extends Component{
    constructor(props){
        super(props);
        this.state={
            question_text:'',
            choice_1_uri:'',
            choice_2_uri:'',
            choice_3_uri:'',
            choice_4_uri:'',
            number:0,

        }
    }

   handleQuestion = () => {
            if (this.state.number < 4){
                this.setState({number: this.state.number+1});
                this.componentWillMount();
            } else if (this.state.number == 4){
             AlertIOS.alert("Survey Completed",null,[{text:'Go to profile', onPress:()=>this.props.navigation.navigate('Profile')},])
             }
    };



    _handleDone(){
       const { navigate } = this.props.navigation;
        return navigate('Profile');
    }


    componentWillMount() {
        this.getData()
            .then((data) => {
                this.setState({
                    choice_1_uri: data.results[this.state.number].option_1.answer_image,
                    choice_2_uri: data.results[this.state.number].option_2.answer_image,
                    choice_3_uri: data.results[this.state.number].option_3.answer_image,
                    choice_4_uri: data.results[this.state.number].option_4.answer_image,
                    question_text: data.results[this.state.number].text,
                });

            }).catch((error)=>{
            console.log("Api call error");
            alert(error.message);
            });




    }


    async getData() {
        const response = await fetch("https://looktheapp.com/questions/", {
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

    question(){
        return (
            <Text style={styles.question}>
                {this.state.question_text}
            </Text>
        );
    }





    render(){

        return(
            <ScrollView>

                {this.question()}

                <Carousel width={375} animate={false}>
                    <View style={styles.container}>
                        <Image style={{height:400, width:300}} source={{uri:this.state.choice_1_uri.replace("http","https")}}/>
                    </View>
                    <View style={styles.container}>
                        <Image style={{height:400, width:300}} source={{uri:this.state.choice_2_uri.replace("http","https")}}/>
                    </View>
                    <View style={styles.container}>
                        <Image style={{height:400, width:300}} source={{uri:this.state.choice_3_uri.replace("http","https")}}/>
                    </View>
                    <View style={styles.container}>
                        <Image style={{height:400, width:300}} source={{uri:this.state.choice_4_uri.replace("http","https")}}/>
                    </View>
                </Carousel>
                */
                <Button onPress={this.handleQuestion}>
                    <Text>
                        Next
                    </Text>
                </Button>

            </ScrollView>
        );

    }

}

const styles =StyleSheet.create(
    {
        button:{
            margin: 10,
            opacity:0.7,
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding:15,
            borderRadius:50,
            borderColor:"white",
            borderStyle:'solid',
            borderWidth:3

        },

        answer:{
            opacity:1,
            fontSize:15
        },

        question:{
            marginBottom: 50,
            marginTop:30,
            marginLeft:30,
            marginRight:30,
            fontSize:20,
            color:'white',
        },
        container: {
            width: 375,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'transparent',
        },

    }
);



export default Answers;
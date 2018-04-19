import React, {Component} from 'react'
import {Text, View, TouchableHighlight, StyleSheet, AlertIOS, Image, ScrollView} from 'react-native'
import Profile from './Profile'
import Carousel from 'react-native-carousel';
import {Button} from "native-base";
import ModalDropdown from 'react-native-modal-dropdown';



class Answers extends Component{
    constructor(props){
        super(props);
        this.state={
            question_text:'',
            choice_1_uri:'',
            choice_2_uri:'',
            choice_3_uri:'',
            choice_4_uri:'',
            id:"",
            number:0,
            radius:0,
            select:'',

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



    blur(value){
        this.setState({radius:1, select:value})
    }

    fetchData = async(selected)=>{

        const data = new FormData();
        data.append("question", this.state.id);
        data.append("user", 1);
        data.append("chosen_option", selected);
        let x = await fetch('https://looktheapp.com/answers/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
            },
            body: data
        }).then(res => res.json());
    };


    _handleDone(value){
        this.fetchData(value);
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
                    id: data.results[this.state.number].id,
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
                <View>

                    <View style={styles.survey}>
                        {this.question()}

                        <View style={{flexDirection:'row'}}>

                            <TouchableHighlight style={styles.highlight} onPress={()=> this.fetchData(1)}>
                                <Image blurRadius={this.state.radius} style={styles.image} source={{uri:this.state.choice_1_uri.replace("http","https")}}/>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.highlight} onPress={()=> this.fetchData(2)}>
                                <Image style={styles.image} source={{uri:this.state.choice_2_uri.replace("http","https")}}/>
                            </TouchableHighlight>

                        </View>

                        <View style={{flexDirection:'row'}}>

                            <TouchableHighlight style={styles.highlight} onPress={()=> this.fetchData(3)}>
                                <Image style={styles.image} source={{uri:this.state.choice_3_uri.replace("http","https")}}/>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.highlight} onPress={()=> this.fetchData(4)}>
                                <Image style={styles.image} source={{uri:this.state.choice_4_uri.replace("http","https")}}/>
                            </TouchableHighlight>

                        </View>
                    </View>

                <Button style={styles.button} onPress={this.handleQuestion}>
                    <Text style={{color:"#000000"}}>
                        Next
                    </Text>
                </Button>
        </View>
        );

    }

}


const styles =StyleSheet.create(
    {
        button:{
            marginTop: 40,
            alignSelf: 'center',
            backgroundColor: '#ffffff',
            padding:15,
            borderRadius:100,
            borderColor:"white",
            borderStyle:'solid',
            borderWidth:3,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,


        },

        answer:{
            opacity:1,
            fontSize:15
        },

        question:{
            marginBottom: 10,
            marginTop:60,
            alignSelf: 'center',
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
        image:{
            height:170,
            width:130
        },
        highlight:{
            margin:20,

        },
        survey:{
            alignSelf: 'center',
        }

    }
);



export default Answers;
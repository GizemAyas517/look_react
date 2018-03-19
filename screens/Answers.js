import React, {Component} from 'react'
import {Text, View, TouchableHighlight, StyleSheet, AlertIOS} from 'react-native'
import Profile from './Profile'



class Answers extends Component{
    constructor(props){
        super(props);
        this.state={
            questions:props.questions,
            number:props.num,
        }
    }

    _handleQuestion(){
        if (this.state.number < this.state.questions.length -1){
            this.setState({number:this.state.number+1})
        } else if (this.state.number == this.state.questions.length -1){
            AlertIOS.alert("Survey Completed",null,[{text:'Go to profile', onPress:()=>this._handleDone()},])
        }


    }

    _handleDone(){
        return (<Profile/>)
    }

    choice(id){
        return (<TouchableHighlight
            style={styles.button}
            onPress={()=>this._handleQuestion()}
        >
            <Text style={styles.answer}>
                {this.state.questions[this.state.number]["ans" + (id + 1)]}
            </Text>
        </TouchableHighlight>)
    }

    render(){
        return(
            <View>
                <Text style={styles.question}>
                    {this.state.questions[this.state.number].question}
                </Text>

                {this.choice(0)}
                {this.choice(1)}
                {this.choice(2)}
                {this.choice(3)}

            </View>
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
            marginTop:200,
            marginLeft:30,
            marginRight:30,
            fontSize:20,
            color:'white',
        }

    }
);



export default Answers;
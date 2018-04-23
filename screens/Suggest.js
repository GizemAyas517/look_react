import React, {Component} from 'react'
import {ImageBackground, Text,StyleSheet} from "react-native";
import SwipeCards from 'react-native-swipe-cards';
import Card from "./Card";
import NoMoreCards from "./NoMoreCards";

const cards = [
    {name: '1', image: 'https://looktheapp.com/media/72._mg_6801_900x.jpg'},
    {name: '2', image: 'https://looktheapp.com/media/46._8ec2c1bf34eb942c8509910a3ab5c137.jpg'},
    {name: '3', image: 'https://looktheapp.com/media/44._set-3162rm8c-10885530-eggplant.jpg'},
];

const cards2 = [
    {name: '3', image: 'https://looktheapp.com/media/44._set-3162rm8c-10885530-eggplant.jpg'},
];


 class Suggest extends Component{

     constructor(props) {
         super(props);
         this.state = {
             cards: cards,
             outOfCards: false
         }
     }

     handleYup (card) {
         console.log("yup");
     }

     handleNope (card) {
         console.log("nope");
     }

     cardRemoved (index) {
         console.log(`The index is ${index}`);

         let CARD_REFRESH_LIMIT = 3;

         if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {

             if (!this.state.outOfCards) {

                 this.setState({
                     cards: this.state.cards.concat(cards2),
                     outOfCards: true
                 })
             }

         }

     }

    render(){
        return (
        <ImageBackground
            style={{
                flex: 1,
                alignSelf: 'stretch',
                width: null,

            }}
            source={require('./backgroundsuggest.png')}>
            <Text style={styles.title}>Here are some suggestions for you</Text>
            <SwipeCards
                cards={this.state.cards}
                loop={false}

                renderCard={(cardData) => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}
                showYup={true}
                showNope={true}

                handleYup={this.handleYup}
                handleNope={this.handleNope}
                cardRemoved={this.cardRemoved.bind(this)}
            />

        </ImageBackground>
        );

    }
 }

 const styles = StyleSheet.create({
     title:{
         alignSelf:'center',
         marginTop:30,
         color:"#ffffff",
         fontSize:15
     }
 });


 export default Suggest; 
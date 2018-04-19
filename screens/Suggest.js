import React, {Component} from 'react'
import {ImageBackground, Text} from "react-native";
import SwipeCards from 'react-native-swipe-cards';

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
             console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

             if (!this.state.outOfCards) {
                 console.log(`Adding ${cards2.length} more cards`);

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
            source={require('./backgroundvalidate.png')}>
            <Text>Here are some suggestions for you</Text>
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


 export default Suggest; 
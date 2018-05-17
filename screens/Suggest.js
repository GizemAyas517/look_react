import React, {Component} from 'react'
import {ImageBackground, Text,StyleSheet} from "react-native";
import SwipeCards from 'react-native-swipe-cards';
import Card from "./Card";
import NoMoreCards from "./NoMoreCards";



 class Suggest extends Component{

     constructor(props) {
         super(props);
         const { params } = this.props.navigation.state;
         const my_name = params ? params.event_n : null;
         this.state = {
             event:my_name,
             cards: [],
             outOfCards: false
         }
     }



     componentWillMount(){
         this.getData()
             .then((data) => {
                 this.setState({
                     cards:data
                 });
             }).catch((error)=>{
             console.log("Api call error");
             alert(error.message);
         });

     }


     async getData() {
         let event = this.state.event.toLowerCase().replace(" ", "-");
         const response = await fetch('https://looktheapp.com/suggestion/images/?event_type='+ event+'&count=5', {
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

                renderCard={(cardData) => <Card image={cardData.url} />}
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
         marginTop:50,
         color:"#ffffff",
         fontSize:20
     }
 });


 export default Suggest; 
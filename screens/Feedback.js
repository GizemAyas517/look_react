import React, {Component} from 'react'
import {Text, View, StyleSheet} from "react-native";
import {Button} from "native-base";
import {Col, Grid, Row} from "react-native-easy-grid";


class Feedback extends Component{

    constructor(props){
        super(props);
    }




    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                   Was this helpful?
                </Text>
                <Grid style={styles.grid} >
                    <Row>
                        <Col style={styles.col}>
                            <Button style={styles.button} onPress={() => this.props.navigation.navigate('Profile')}>
                                <Text style={styles.text}>
                                    Yes
                                </Text>
                            </Button>
                        </Col>

                        <Col style={styles.col}>
                            <Button style={styles.button} onPress={() => this.props.navigation.navigate('Profile')}>
                                <Text style={styles.text}>
                                    No
                                </Text>
                            </Button>
                        </Col>
                    </Row>
                </Grid>

            </View>
        );
    }

}

const styles = StyleSheet.create(
    {
        container:{
            alignSelf:'center',
            marginTop:40,

        },
        button:{
            backgroundColor:"#FFFFFF",
            width:70,
            height:40,
            alignItems:'center'

        },
        title:{
            color:"#fff",
            fontSize:20,
            fontFamily:"Arial",

        },
        text:{
            color:'#000000',
            alignSelf:'center',
            fontSize:20
        },
        grid:{
            marginTop:50
        },
        col:{
            margin:20,
        }
    }
);

export default Feedback;

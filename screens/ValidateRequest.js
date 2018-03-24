import React, {Component} from 'react'
import {View} from "react-native";
import {Button, Text} from "native-base";


class ValidateRequest extends Component{

    constructor(props){
        super(props);
        this.state={
            event_name:this.props.event_name,
            event_date:this.props.event_date,
            outfit:this.props.outfit
        }
    }



    render(){
        return(
            <View>
                <Button onPress={()=>this.fetchData()}>
                    <Text>
                        Send Request
                    </Text>
                </Button>

            </View>
        );


    }


}


export default ValidateRequest;

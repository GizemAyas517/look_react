import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {RNCamera} from "react-native-camera";
import {Button, Text} from "native-base";



class CameraRoll extends Component{
    constructor(props){
        super(props);
        const { params } = this.props.navigation.state;
        const my_event = params ? params.event_n : null;
        const my_date = params ? params.eventD : null;
        this.state={
            event_name:my_event,
            event_date:my_date,
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style = {styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />
                <TouchableOpacity
                    onPress={this.takePicture.bind(this)}
                    style = {styles.capture}
                >
                    <Text style={{fontSize: 14}}> SNAP </Text>
                </TouchableOpacity>
        </View>
        );
    }

    takePicture = async function() {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            this.props.navigation.navigate('DisplayImage',{my_image:data, my_date:this.state.event_date, my_name:this.state.event_name});
        }
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});

export default CameraRoll;
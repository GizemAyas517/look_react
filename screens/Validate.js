/**
 * Created by gizemayas on 11.03.2018.
 */
import React, {Component} from 'react'
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'
import {View} from "react-native";
import {CameraKitCamera} from "react-native-camera-kit";



class Validate extends Component{

    render(){
        return (
            <View>
                <CameraKitCamera
                    ref={cam => this.camera = cam}
                    style={{
                        flex: 1,
                        backgroundColor: 'white'
                    }}
                    cameraOptions={{
                        flashMode: 'auto',             // on/off/auto(default)
                        focusMode: 'on',               // off/on(default)
                        zoomMode: 'on',                // off/on(default)
                        ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
                        ratioOverlayColor: '#00000077' // optional
                    }}


                />
            </View>

        );
    }


}

export default Validate;
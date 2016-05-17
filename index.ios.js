/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';
 import React, {
   AppRegistry,
   Component,
   Dimensions,
   StyleSheet,
   Text,
   TouchableHighlight,
   View
 } from 'react-native';
 import Camera from 'react-native-camera';
 var VIDEO_HEIGH = (Dimensions.get('window').width/4)*3;
 var VIDEO_WIDTH = Dimensions.get('window').width;
 class AwesomeProject extends Component {

   render() {
     return (
       <View style={styles.container}>
         <Camera
           ref={(cam) => {
             this.camera = cam;
           }}
           style={styles.preview}
           captureMode= {Camera.constants.CaptureMode.video}
           captureTarget= {Camera.constants.CaptureTarget.disk}
           aspect={Camera.constants.Aspect.fill}
           orientation={Camera.constants.Orientation.portrait}
           videoWidthForCrop={VIDEO_WIDTH}
           videoHeightForCrop={VIDEO_HEIGH}>
           <Text style={styles.capture} onPress={this.captureVideo.bind(this)}>[START]</Text>
           <Text style={styles.stop} onPress={this.stopVideo.bind(this)}>[STOP]</Text>
           <Text style={styles.statusLabel}>[Status]</Text>

         </Camera>
       </View>
     );
   }

   captureVideo() {
     this.camera.capture()
     .then(
       (data) => {
         console.log(data)
         this.setState({videodata:data})
         this.showVideoStatus()
       }
   )
     .catch(err => console.error(err));
   }

   stopVideo() {
     this.camera.stopCapture()
   }

   showVideoStatus(){
    console.log(this.state.videodata['width']);
   }
 }

 const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
   },
   preview: {
     height: VIDEO_HEIGH,
     width:  VIDEO_WIDTH
   },
   capture: {
     backgroundColor: '#fff',
     borderRadius: 5,
     color: '#000',
     padding: 10,
     margin: 10,
     width: 80
   },
   stop:{
     backgroundColor: '#fff',
     borderRadius: 5,
     color: '#000',
     padding: 10,
     margin: 10,
     width: 80
   },
   statusLabel:{
     backgroundColor: '#fff',
     borderRadius: 5,
     color: '#000',
     padding: 10,
     marginTop: 150,
     width: 80
   }
 });

 AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

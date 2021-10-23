import React from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native"

export default class WelcomScreen extends React.Component {
    render(){
       return(
          <View>
              <TextInput
              style={{width:200,height:30,borderWidth:3,alignSelf:"center",marginBottom:6}}
              placeholder = {"emailId"}>

              </TextInput>

              <TextInput
              style={{width:200,height:30,borderWidth:3,alignSelf:"center",marginBottom:30}}
              placeholder = {"password"}
              secureTextEntry = {true}>

              </TextInput>

              <TouchableOpacity
              style={{width:200,height:30,borderWidth:3,alignSelf:"center",backgroundColor:"red",marginBottom:10}}
              onPress = {()=>{

              }}>
               <Text
               style={{alignSelf:"center",color:"white"}}
               >Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
              style={{width:200,height:30,borderWidth:3,alignSelf:"center",backgroundColor:"red"}}
              onPress = {()=>{

              }}>
              <Text
              style={{alignSelf:"center",color:"white"}}
              >sign up</Text>
              </TouchableOpacity>

          </View>
       );
    }
}
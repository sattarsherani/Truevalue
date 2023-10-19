import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";


const SignUpScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#85ed2f', height: 250, padding: 15 }}>
        <Text style={{ fontSize: 25, color: 'black' }}>Login</Text>
        <Text style={{ fontSize: 20, color: 'black' }}>please sign in to conttinue</Text>
      </View>
      <View style={{ backgroundColor: 'white', height: 430, marginTop: -30, borderRadius: 30, padding: 20 }}>
        <TextInput style={{ borderBottomWidth: 1, borderColor: 'gray', marginTop: 20, fontSize: 20 }} placeholder="Email/Phone " placeholderTextColor={'black'} />
        <TextInput style={{ borderBottomWidth: 1, borderColor: 'gray', marginTop: 20, fontSize: 20 }} placeholder="password" placeholderTextColor={'black'} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Text style={{ fontSize: 15, color: 'black' }}>remember me </Text>
          <Text style={{ fontSize: 15, color: 'black' }}>Forgot password</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#85ed2f', alignItems: 'center', borderRadius: 20, padding: 10, marginTop: 20 }}>
          <Text style={{ fontSize: 25, color: 'black' }}>SIGN IN </Text>

        </TouchableOpacity>

        <View style={{ marginTop: 20, borderBottomWidth: 1, marginTop: 20 }}>
        </View>

        <Text style={{ color: 'black', fontSize: 20, backgroundColor: 'gray', backgroundColor: 'white', alignSelf: 'center', marginTop: -15 }}>OR</Text>

        <View style={{ flexDirection: 'row', justifyContent:'center',marginTop:20}}>
          <Image style={{ height: 40, width: 40, borderRadius: 30 }} source={require('../asstes/image/faecbook1.png')} />

          <Image style={{ height: 40, width: 40, borderRadius: 30 }} source={require('../asstes/image/google.png')} />

        </View>


      </View>

    </View>
  )
}
export default SignUpScreen;

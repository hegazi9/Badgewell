import React, {useEffect , useState } from 'react';
import {View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './styles';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import { Container, Header } from '../../components';
import {SIGNIN , USERNAME , PASSWORD , ERROR  , PASSVALID , PASSEMPTY , USEREMPTY, USERNAMEVALID, SIGNUP } from '../../utils/constance';

const Signup = ({navigation}) => {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

 const login = ()=>{
  if(!validate())
  {
    navigation.navigate('Signin')
  }
 }   

 const showToast = (msg) => {
  Toast.show({
    type: 'error',
    text1: ERROR ,
    text2: msg ,
    visibilityTime: 3000,
    autoHide: true,
  });
 }
 const validate = ()=>{
   if(username == '')
   {
    showToast(USEREMPTY)
    return true
   }
   else if (password == '')
   {
    showToast(PASSEMPTY)
    return true
   }
   else if (password.length < 6)
   {
    showToast(PASSVALID)
    return true
   } 
   else if (username.length < 3)
   {
    showToast(USERNAMEVALID)
    return true
   }
   else false 
 } 

  return (
    <>
    <Container/>
    <View style = {styles.container}>
      <Header title = {SIGNIN}/>
      <View style = {styles.body}>
      <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            onChangeText={(username) => setUsername(username)}
            keyboardType = "email-address"
            placeholder={USERNAME}
          />
        </View>
         <View style={[styles.viewInput , {marginTop : 0}]}>
          <TextInput
            style={styles.input}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry
            placeholder={PASSWORD}
          />
        </View>

        <TouchableOpacity style = {styles.btn} onPress={login} >
          <Text style = {styles.txt}>{SIGNUP}</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

export default Signup;

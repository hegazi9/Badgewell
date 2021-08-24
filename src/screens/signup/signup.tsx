import React, {useEffect , useState  } from 'react';
import {View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './styles';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import { Container, Header } from '../../components';
import {SIGNIN , USERNAME , PASSWORD ,
  PASSVALID , PASSEMPTY , USEREMPTY, USERNAMEVALID, SIGNUP } from '../../utils/constance';
import {registeruser } from '../../redux/actions';
import {CommonActions} from '@react-navigation/native';
import { Loading } from '../../components/loading';
import { COLORS } from '../../common';

interface Props {
  navigation : any
}

const Signup : React.FC <Props> = ({navigation}) => {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state : any) => state.userState.user );
    const error = useSelector((state:any) => state.userState.error );
    const loading = useSelector((state:any) => state.userState.loading );


    useEffect(() => {
      if(user?.token)
      {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Home'}],
          }),
        );
      }  
  }, [user]);


  useEffect(() => {
    if(error) showToast(error)
}, [error ]);

  const login = async () => {
    if (!validate()) {
      await dispatch(registeruser(username, password));
    }
  };
 const showToast = (msg: any) => {
  Toast.show({
    type: 'error',
    text1: msg ,
    visibilityTime: 2000,
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
      <Header title = {SIGNIN} navigation = {navigation} home = {false}/>
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
          {
            loading ? <Loading size={"small"}  color = {COLORS.white}/>
             :  <Text style = {styles.txt}>{SIGNUP}</Text>
          }
         
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

export default Signup;

import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch , useSelector } from 'react-redux';
import {COLORS} from '../../common/colors';
import {WELCOME, LOGOUT} from '../../utils/constance';
import {logoutuser} from '../../redux/actions';
import {CommonActions} from '@react-navigation/native';

interface Props 
{
  title : String ,
  home : boolean ,
  navigation : any , 
  name : String
}

export const Header : React.FC <Props>= ({title, home , navigation , name}) => {

const dispatch = useDispatch();

const logout = async ()=>{
 await dispatch(logoutuser())
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: 'Signin'}],
    }),
  );
}

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        {home ? 
        <>
          <Text onPress = {()=>logout()} style={[styles.txt,{textAlign:'right'}]}>{LOGOUT}</Text>
          <Text style={styles.txt}>{WELCOME}{" "}{name}</Text>
        </>
         : null
        }

        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  txt: {
    textAlign: 'left',
    color: COLORS.hint,
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    textAlign: 'left',
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: hp('2%'),
  },
  container : {
    padding: 30 , height : hp('20%')
  }
});

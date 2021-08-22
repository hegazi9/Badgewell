import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../common/colors';
import {WELCOME, LOGOUT} from '../../utils/constance';

export const Header = ({title, home}) => {
  return (
    <>
      <SafeAreaView />
      <View style={{padding: 30}}>
        {home ? (
          <Text style={[styles.txt,{textAlign:'right'}]}>{LOGOUT}</Text>
        ) : (
          <Text style={styles.txt}>{WELCOME}</Text>
        )}
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
});

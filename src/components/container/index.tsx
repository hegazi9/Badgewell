import React , {useState , useEffect} from "react";
import { StyleSheet, View , Text , Image } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../common/colors";

const errorImg = require('../../assets/img/error.png')

export const Container = () => {
  const [networkState, setNetworkState] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected && state.isInternetReachable) {
        setNetworkState(true);
      } else {
        setNetworkState(false);
      }
    });
    return unsubscribe;
  }, [NetInfo.useNetInfo().isConnected]);


  return (
    !networkState ? 
    <View style = {styles.container}>
    <Image style = {styles.img} 
    source = {errorImg} />
    <Text style={styles.txt}>No Internet Connection </Text>
    </View>
    : null
  );
};

const styles = StyleSheet.create({
  
  container: {
    justifyContent: 'center',
    alignItems:'center',
    height : hp('100%'),
    width : wp('100%'),
  },
  img : 
  {
    height : 130,
    width : 130,
  },
  txt: {
    color: COLORS.black,
    textAlign: 'center',
    margin : 10
  }

});


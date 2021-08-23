import React, {useEffect , useState } from 'react';
import {View , Text , Animated } from 'react-native';
import styles from './styles';
import {CommonActions} from '@react-navigation/native';
import { useSelector} from 'react-redux';
import {SplashTxt} from '../../utils/constance'

const Splash = ({navigation}) => {
  const user = useSelector((state) => state.userState.user );
  const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(0))

const animate = () => {
  Animated.timing(fadeAnimation, {
    toValue: 1,
    duration: 3000
  }).start();
 }
  
  useEffect(() => {
    console.log('token splash ---> ', user);

    animate()
    setTimeout(() => {
      if(user)
      {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Home'}],
          }),
        );
      }
      else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Signin'}],
          }),
        );
      }
    }, 3000);
  }, []);

  return (
  
      <View style={styles.container}>
           <Animated.View
              style={{ opacity: fadeAnimation }}>
              <Text style={styles.txt}>{SplashTxt}</Text>
            </Animated.View>
      </View>
 
  );
};

export default Splash;

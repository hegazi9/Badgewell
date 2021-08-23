import { StyleSheet, I18nManager } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../common";

const styles = StyleSheet.create({
  container: {
    width : wp('100%') , height : hp('100%') ,
    alignItems : 'center' , justifyContent : 'center'
  },
  txt : 
  {
    fontSize : 30  , fontWeight : 'bold' , color : COLORS.primary
  }
});

export default styles;

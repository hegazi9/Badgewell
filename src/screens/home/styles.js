import { StyleSheet, I18nManager } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../common";

const styles = StyleSheet.create({
  container: {
    backgroundColor : COLORS.primary,
    width : wp('100%') , height : hp('100%') ,
  },
  body : 
  {
    width : wp('100%') , borderTopLeftRadius  :  40  ,  alignItems : 'center',
    height : hp('100%') , backgroundColor : COLORS.white , 
  },
  flat : 
  {
     marginTop : hp('5%'),
    backgroundColor : COLORS.white , 
  },
  card : 
  {
    width: wp('100%'),
    padding : 20 , 
    backgroundColor : COLORS.white,
    marginTop : hp('2%'),
    elevation : 3 ,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  footer : 
  {
    height : hp('30%')
  },
  img : 
  {
    width : 70 , height : 70 
  },
  name  : 
  {
    fontSize : 16 , fontWeight : 'bold' , width : wp('50%')
  },
  phone  : 
  {
    fontSize : 14 , color : COLORS.hint , width : wp('50%')
  }
});

export default styles;

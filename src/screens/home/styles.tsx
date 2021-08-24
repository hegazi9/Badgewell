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
    height : hp('65%') ,
    marginTop : hp('5%'),
    backgroundColor : COLORS.white , 
    paddingVertical : 10
  },
  card : 
  {
    width: wp('100%'),
    padding : 5 , 
    backgroundColor : COLORS.white,
    marginTop : hp('1%'),
    elevation : 3 ,
    alignItems : 'center' ,
    justifyContent : 'center' ,
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
    width : 70 , height : 70 , borderRadius : 5 , margin : 5
  },
  name  : 
  {
    fontSize : 16 , fontWeight : 'bold' , width : wp('50%')
  },
  phone  : 
  {
    fontSize : 14 , color : COLORS.hint , width : wp('50%')
  },
  loading:
   {
    alignItems : 'center' , marginTop : hp('40%'),  justifyContent : 'center'
   }
});

export default styles;

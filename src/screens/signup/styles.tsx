import { StyleSheet } from "react-native";
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
    width : wp('100%') , borderTopLeftRadius  :  80 , borderBottomRightRadius  :  80 ,  alignItems : 'center',
       height : hp('100%') , backgroundColor : COLORS.white , marginTop : hp('5%') 
  },
  viewInput: {
    alignItems: 'center',
    marginTop:'10%',
    width: wp('80%'),
    padding : 20 ,
  },
  input: {
    width: wp('80%'),
    height: hp('8%'),
    fontSize: 16,
    padding : 10,
    backgroundColor : COLORS.white,
    borderRadius : 10 ,
    elevation : 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  btn : 
  {
    width: wp('35%'),
    height: hp('7%'),
    marginTop : hp('10%'),
    alignItems : 'center' , 
    justifyContent : 'center' ,
    backgroundColor : COLORS.primary,
    borderRadius : 10 ,
    elevation : 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  txt : 
  {
    textAlign: 'center',
    color : COLORS.white ,
    fontWeight : 'bold' ,
    fontSize : 20 ,
  },
  
 
});

export default styles;

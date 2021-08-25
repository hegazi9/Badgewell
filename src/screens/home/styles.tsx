import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../common";

const styles = StyleSheet.create({
  container: {
    backgroundColor : COLORS.primary,
    flex : 1 
  },
  body : 
  {
     borderTopLeftRadius  :  40  ,  alignItems : 'center',
     backgroundColor : COLORS.white , height : hp('80%') ,
  },
  flat : 
  {
    backgroundColor : COLORS.white , 
    paddingVertical :  10 ,
    paddingBottom : Platform.OS == "ios" ? 50 : 0
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
    zIndex : -1
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

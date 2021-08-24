import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../../common/colors";

interface Props 
{
  title : String , 
  center : String, 
  width : any , 
  onPress : () => void ,
  backgroundColor : String, 
  radius : String 
}

export const Button : React.FC <Props> = ({ title, onPress, center, width, backgroundColor, radius }) => {

  return ( 
  <TouchableOpacity
      style={[styles.buttonContainer,
      width && { width },
      backgroundColor && { backgroundColor },
      radius && { borderRadius: '2%' },
      center && styles.center]
      }
      onPress={onPress}>

      <Text style={styles.txt}>{title}</Text>

    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: '4%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  center: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  txt: {
    color: COLORS.white,
    textAlign: 'center'
  }
});

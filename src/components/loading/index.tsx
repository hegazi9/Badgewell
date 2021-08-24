import React from "react";
import {ActivityIndicator} from "react-native";

interface Props {
  color : any ,
  size : any
}

export const Loading : React.FC <Props> = ({size , color }) => {

  return ( 
    <ActivityIndicator 
    size = {size} color = {color}/>
  );
};


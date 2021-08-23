import React from "react";
import {ActivityIndicator} from "react-native";
export const Loading = ({size , color }) => {

  return ( 
    <ActivityIndicator 
    size = {size} color = {color}/>
  );
};


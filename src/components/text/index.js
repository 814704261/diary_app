import React from "react";
import {Text} from "react-native";

export default (props) => {
    return (
      <Text {...props}>
        <Text style={{fontFamily:'Cold_stone'}}>
          {props.children}
        </Text>
      </Text>
    )
}


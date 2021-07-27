import React from "react";
import {Text} from "react-native";

export default (props) => {

    return (
        <Text style={{fontFamily:'Cold_stone'}}>
            <Text {...props}>
                {props.children}
            </Text>
        </Text>
    )
}


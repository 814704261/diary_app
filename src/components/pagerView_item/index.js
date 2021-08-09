import React, { PureComponent} from 'react';
import {View, TouchableOpacity, ScrollView} from "react-native";
import Text from '../../components/text'


import styles from './styles'
import Icon from "react-native-vector-icons/FontAwesome";
import {WebView} from "react-native-webview";


export default class PagerView_item extends PureComponent{

  state = {

  }

  render() {
    let {item, index} = this.props

    return (
        <View style={styles.container}>

        </View>
    )
  }
}
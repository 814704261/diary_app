import React, {PureComponent} from "react";
import {View, Button, Image, TouchableOpacity} from 'react-native'
import Text from '../text'

import styles from './styles'

export default class Card_two extends PureComponent{

  //跳转到编辑页面
  gotoEdit = () => {
    this.props.navigation.navigate('Edit')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={require('../../static/images/cover.jpg')} style={styles.topImg} />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={this.gotoEdit}>
            <View style={styles.bottomBtn}>
              <Text style={styles.bottomBtnText}>去写日记吧</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
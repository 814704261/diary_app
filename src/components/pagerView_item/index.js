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

          <View style={styles.header}>
            <TouchableOpacity>
              <View style={styles.header_left}>
                <Icon name='angle-left' size={30} color='black' />
              </View>
            </TouchableOpacity>
            <View>
              <Text style={{fontSize: 20, color: 'black'}}>{item.diaryTitle}</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.header_right}>
                <Icon name='ellipsis-h' size={30} color='black' />
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.time}>
              <View style={styles.timeItem}>
                <Icon style={{marginRight: 10}} name='calendar-times-o' size={30} color='black' />
                <Text style={styles.timeTitle}>时间：</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
              <Icon name='angle-right' size={30} color='black' />
            </View>
            <View style={styles.mood}>
              <View style={styles.moodLeft}>
                <Icon style={{marginRight: 10}} name='pagelines' size={30} color='black' />
                <Text style={styles.timeTitle}>心情：</Text>
                {
                  item.mood.map(value => {
                    return (
                      <View key={value} style={styles.moodItem}>
                        <Text style={styles.moodItemText}>{value}</Text>
                      </View>
                    )
                  })
                }
              </View>
              <Icon name='angle-right' size={30} color='black' />
            </View>

          </View>

          <WebView
            originWhiteList={['*']}
            allowFileAccessFromFileURLs={true}
            allowUniversalAccessFromFileURLs={true}
            scrollEnabled={true}
            source={{ uri: 'http://m.cloud.ownlonely.ltd:1234/', html: item.diaryContent }}
          />
        </View>
    )
  }
}
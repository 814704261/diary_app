import React, {Component, createRef, PureComponent} from 'react';
import {
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
    Button,
    PermissionsAndroid,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';
import Text from '../../components/text'
import Header from "../../components/header";
import Icon from 'react-native-vector-icons/FontAwesome'
import {WebView} from "react-native-webview";
import * as Store from '../../store/sync'
import PagerView from 'react-native-pager-view';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import PagerViewItem from "../../components/pagerView_item";
import styles from './styles';


export default class DiaryDetail extends PureComponent{

    constructor(props) {
        super(props);
        this.PagerView = createRef()
        this.webview = createRef()
    }

    state = {
        navigation: this.props.navigation,
        initialPage: 0,
        data: []
    }

    componentDidMount() {
        // this.PagerView.current.setPage(1)
        let {route} = this.props
        Store.findAllDataByKey('diary')
          .then(res => {
              this.setState({
                  data: res,
                  initialPage: route.params.index
              })
          })
          .catch(err => {
              throw new Error(err)
          })
    }

    onPageScrollHandle = () => {

    }

    onBackHandle = () => {
        let {navigation} = this.state
        navigation.goBack()
    }

    render() {
        let {initialPage, data} = this.state
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <View style={styles.header_left}>
                            <Icon name='angle-left' size={30} color='black' />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={{fontSize: 20, color: 'black'}}>这是日记的标题</Text>
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
                            <Text style={styles.timeText}>2020-01-09</Text>
                        </View>
                        <Icon name='angle-right' size={30} color='black' />
                    </View>
                    <View style={styles.mood}>
                        <View style={styles.moodLeft}>
                            <Icon style={{marginRight: 10}} name='pagelines' size={30} color='black' />
                            <Text style={styles.timeTitle}>心情：</Text>
                            {
                                ['愉快', '开心'].map(value => {
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
                <View style={{flex:1}}>
                    <WebView
                      ref={this.webview}
                      originWhiteList={['*']}
                      allowFileAccessFromFileURLs={true}
                      allowUniversalAccessFromFileURLs={true}
                      scrollEnabled={true}
                      // containerStyle={{ marginTop: 20,fontSize:20,height:'100%',flex:0 }}
                      // textZoom={100}
                      scalesPageToFit={false}
                      source={{ html: html }}
                    />
                </View>

            </SafeAreaView>
        )
    }
}


const html = `
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Document</title>
 <style>
  *{
    box-sizing: border-box;
  }
  body{
    font-size: 18px;
    background-color: #00BCD4;
  },
  img: {
    width: 100%;
  }
 </style>
</head>
<body>
  <h1>这是标题</h1>
  <h2>这是副标题</h2>
</body>
</html>

`

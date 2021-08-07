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
                <PagerView
                    style={styles.pagerView}
                    initialPage={initialPage}
                    onPageScroll={this.onPageScrollHandle}
                    transitionStyle='curl'
                    orientation="horizontal"
                    layoutDirection="ltr"
                    ref={this.PagerView}
                >
                    {
                        data.map((item, index) => {
                            return <PagerViewItem key={item.createTime} item={item} index={index} />
                        })
                    }
                </PagerView>
            </SafeAreaView>
        )
    }
}


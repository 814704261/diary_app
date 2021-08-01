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
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import Text from '../../components/text'
import Header from "../../components/header";
import Icon from 'react-native-vector-icons/FontAwesome'
import {WebView} from "react-native-webview";
import PagerView from 'react-native-pager-view';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';


export default class DiaryDetail extends PureComponent{

    constructor(props) {
        super(props);
        this.PagerView = createRef()
    }

    state = {
        navigation: this.props.navigation,
        initialPage: 0,
    }

    componentDidMount() {
        // this.PagerView.current.setPage(1)
    }

    onPageScrollHandle = () => {

    }

    onBackHandle = () => {
        let {navigation} = this.state
        navigation.goBack()
    }

    render() {
        let {initialPage} = this.state
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
                    <View key="1" style={styles.pagerViewItem}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={this.onBackHandle}>
                                <View style={styles.header_left}>
                                    <Icon name="chevron-left" size={16} color="black"/>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title_text} ellipsizeMode='tail' numberOfLines={1}>这是日记的标题</Text>
                            </View>
                            <TouchableOpacity>
                                <View style={styles.header_right}>
                                    <Icon name='ellipsis-h' size={22} color='black' />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pagerItemScroll}>
                            <View>
                                <View style={styles.time}>
                                    <Text style={styles.moodTitleText}>日期：</Text>
                                    <Text style={styles.timeText}>2020.01.09</Text>
                                </View>
                                <View style={styles.mood}>
                                    <Text style={styles.moodTitleText}>心情：</Text>
                                    <View style={styles.moodItem}>
                                        <Text style={{color: 'white'}}>愉快</Text>
                                    </View>
                                    <View style={styles.moodItem}>
                                        <Text style={{color: 'white'}}>开心</Text>
                                    </View>
                                    <View style={styles.moodItem}>
                                        <Text style={{color: 'white'}}>高兴</Text>
                                    </View>
                                </View>
                            </View>

                            <WebView
                                style={{flex:1}}
                                originWhiteList={['*']}
                                allowFileAccessFromFileURLs={true}
                                allowUniversalAccessFromFileURLs={true}
                                source={{ uri: 'http://m.cloud.ownlonely.ltd:1234/',html: '' }}
                            />

                        </View>
                    </View>
                    <View key="2">
                        <Text>Second page</Text>
                    </View>
                </PagerView>
            </SafeAreaView>
        )
    }
}


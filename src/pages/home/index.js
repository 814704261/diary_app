import React, {Component, PureComponent} from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
    Button,
    PermissionsAndroid,
    Dimensions,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import * as Store from '../../store/sync'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from "../../components/header";
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import Modal from 'react-native-modalbox';

import CardOne from '../../components/card'
import CardTwo from '../../components/card_two'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {getHeight, getWidth} from "../../utils/fitSize";

const coverImage = require('../../static/images/cover.jpg');

import styles from './styles'
import {dateToStr} from "../../utils/date";

export default class Home extends PureComponent{

    state = {
        diaryData: [],  //用户日记列表
        activeIndex: 0,
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3,
    }


    componentWillUnmount() {
        // console.warn('home unmount')
        this._unsubscribe()
    }

    componentDidMount() {
        this.initData()
        SplashScreen.hide() //关闭启动屏幕

        let {navigation} = this.props
        this._unsubscribe = navigation.addListener('focus', ()=>{
            this.initData()
        })
    }

    //初始化数据，读取日记列表
    initData(){
        Store.findAllDataByKey('diary')
            .then(r => {
                console.log('用户日记', r.length)
                this.setState({
                    diaryData: r
                })
            })
            .catch(err => {
                throw new Error(err)
            })
    }


    _renderItem = ({item, index}) => {

        //打开更换封面的弹窗
        let changeCover = () => {
            this.modal.open()
        }

        return (
            <CardOne data={item} index={index} navigation={this.props.navigation} changeCover={changeCover} />
        );
    }

    clickCover = () => {

    }

    //跳转编辑页面
    gotoEdit = () => {
        this.props.navigation.navigate('Edit')
        // this.props.navigation.navigate('PreviewPdf')
    }

    render() {
        let {diaryData} = this.state
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#00BCD4',}}>
                <Header
                    title="首页"
                    right={
                        <TouchableOpacity onPress={this.gotoEdit}>
                            <Icon name='edit' size={26} color='black' />
                        </TouchableOpacity>
                    }
                />

                {diaryData.length > 0 && (<View style={styles.carousel}>
                    <Carousel
                      layout={"default"}
                      loop
                      ref={ref => this.carousel = ref}
                      data={diaryData}
                      sliderWidth={windowWidth}
                      itemWidth={getWidth(900)}
                      renderItem={this._renderItem}
                      onSnapToItem={index => this.setState({activeIndex: index})}
                    />
                </View>)}

                {/*如果没有日记就显示去写日记的卡片*/}
                {diaryData.length === 0 && (<View style={styles.carousel}>
                    <CardTwo navigation={this.props.navigation} />
                </View>)}


                <Modal
                    style={[styles.modal]}
                    ref={r => this.modal = r}
                    position='bottom'
                    backButtonClose
                    swipeArea={20}
                >
                    <ScrollView style={{flex:1}} horizontal={true}>
                        <View style={styles.scrollWrap}>
                            <TouchableOpacity onPress={this.clickCover}>
                                <View style={styles.scrollItem}>
                                    <Image source={coverImage} style={styles.scrollItemImg} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Modal>

            </SafeAreaView>
        )
    }
}


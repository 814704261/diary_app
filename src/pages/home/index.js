import React, {Component} from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    PermissionsAndroid, Dimensions,
} from 'react-native';
import * as Store from '../../store/sync'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from "../../components/header";
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import Modal from 'react-native-modalbox';

import CardOne from '../../components/card'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {getHeight, getWidth} from "../../utils/fitSize";

import styles from './styles'

export default class Home extends Component{

    state = {
        diaryData: [],  //用户日记列表
        activeIndex: 0,
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3,
    }


    componentWillUnmount() {
        console.warn('home unmount')
    }

    componentDidMount() {
        let {navigation} = this.props
        navigation.addListener('focus', ()=>{
            console.warn('home focus')
        })
        navigation.addListener('blur', ()=>{
            console.warn('home blur')
        })
        this.initData()
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
            <CardOne changeCover={changeCover} />
        );
    }

    render() {
        let {data} = this.state
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'pink',}}>
                <Header title="首页"/>
                <View style={styles.carousel}>
                    <Carousel
                        layout={"default"}
                        loop
                        ref={ref => this.carousel = ref}
                        data={this.state.diaryData}
                        sliderWidth={windowWidth}
                        itemWidth={getWidth(900)}
                        renderItem={this._renderItem}
                        onSnapToItem = { index => this.setState({activeIndex:index}) }
                    />
                </View>

                <Modal
                    style={[styles.modal]}
                    ref={r => this.modal = r}
                    position='bottom'
                    backButtonClose
                >
                    <Text>模态框</Text>
                </Modal>

            </SafeAreaView>
        )
    }
}


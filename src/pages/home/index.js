import React, {Component} from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    PermissionsAndroid,
} from 'react-native';
import * as Store from '../../store/sync'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from "../../components/header";
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';

import CardOne from '../../components/card'


export default class Home extends Component{

    state = {
        diaryData: [],  //用户日记列表
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
                console.log('用户日记', r)
                this.setState({
                    diaryData: r
                })
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    _renderItem = ({item, index}) => {
        return (
            <CardOne navigation={this.props.navigation} />
        );
    }

    render() {
        let {data} = this.state
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'pink',}}>
                <Header title="首页"/>

                <View>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.diaryData}
                        sliderWidth={300}
                        itemWidth={200}
                        renderItem={this._renderItem}
                        onSnapToItem = { index => this.setState({activeIndex:index}) }
                    />
                </View>

            </SafeAreaView>
        )
    }
}


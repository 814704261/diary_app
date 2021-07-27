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
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from "../../components/header";
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
const RNFS = require('react-native-fs');
import CardOne from '../../components/card'
export default class Home extends Component{

    state = {
        data: [
            {
                title:"Item 1",
                text: "Text 1",
                color: 'pink'
            },
            {
                title:"Item 2",
                text: "Text 2",
                color: 'blue'
            },
            {
                title:"Item 3",
                text: "Text 3",
                color: 'yellow'
            },
            {
                title:"Item 4",
                text: "Text 4",
                color: 'skip'
            },
            {
                title:"Item 5",
                text: "Text 5",
                color: 'green'
            },
        ],
        activeIndex:0,
    }

    componentWillUnmount() {
        console.warn('home unmount')
    }


    componentDidMount() {
        // this.props.navigation.navigate('Edit')
        // this.props.navigation.addListener('focus', ()=>{
        //     console.warn('home focus')
        // })
        // this.props.navigation.addListener('blur', ()=>{
        //     console.warn('home blur')
        // })
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={{
                backgroundColor: item.color,
                borderRadius: 5,
                height: '100%',
                padding: 50,
                marginLeft: 25,
                marginRight: 25, }}>
                <Text style={{fontSize: 30}}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>
        );
    }

    render() {
        let {data} = this.state
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'pink',}}>
                <Header title="首页"/>
                <CardOne navigation={this.props.navigation} />
                {/*<Carousel*/}
                {/*    layout={'stack'}*/}
                {/*    data={data}*/}
                {/*    renderItem={this._renderItem}*/}
                {/*    ref={(c) => { this._carousel = c; }}*/}
                {/*    sliderWidth={600}*/}
                {/*    itemWidth={600}*/}
                {/*    layoutCardOffset={9}*/}
                {/*    activeSlideOffset={-30}*/}
                {/*    sliderHeight={700}*/}
                {/*    itemHeight={700}*/}
                {/*    loop*/}
                {/*    onSnapToItem = { index => this.setState({activeIndex:index}) }*/}
                {/*/>*/}
            </SafeAreaView>
        )
    }
}


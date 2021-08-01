import React, {Component} from "react";
import {
    View,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import Text from '../../components/text'
import styles from './styles'
const coverImage = require('../../static/images/cover.jpg')

export default class MyCard extends Component{

    //更换封面
    changeCover = () => {
        this.props.changeCover()
    }

    //跳转详情页
    goToDetail = () => {
        this.props.navigation.navigate('DiaryDetail', {data: 123})
    }

    render() {
        return (
            <View style={styles.card}>
                <View style={styles.title}>
                    <TouchableOpacity onPress={this.changeCover}>
                        <View style={styles.title_icon}>
                            <Icon name='ellipsis-h' size={25} color='white' />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableWithoutFeedback style={{flex:1}} onPress={this.goToDetail}>
                    <View style={styles.touch}>
                        <View style={styles.body}>
                            <Image style={styles.body_image} source={coverImage}/>
                        </View>
                        <View style={styles.bottom}>
                            <View style={styles.bottom_title}>
                                <Text style={styles.bottom_title_text} ellipsizeMode='tail' numberOfLines={1}>啊哈哈这是标题</Text>
                            </View>
                            <View style={styles.bottom_line}>
                                <Text style={styles.bottom_line_text}>---</Text>
                            </View>
                            <View style={styles.bottom_time}>
                                <Text style={styles.bottom_time_text}>2021-09-01</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
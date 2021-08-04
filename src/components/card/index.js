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


    state = {

    }


    //更换封面
    changeCover = (index) => {
        this.props.changeCover(index)
    }

    //跳转详情页
    goToDetail = (index) => {
        this.props.navigation.navigate('DiaryDetail', {index})
    }

    render() {
        let {data, index} = this.props
        let cover = data.coverImage? {uri: data.coverImage} : coverImage
        return (
            <View style={styles.card}>
                <View style={styles.title}>
                    <TouchableOpacity onPress={() => this.changeCover(index)}>
                        <View style={styles.title_icon}>
                            <Icon name='ellipsis-h' size={25} color='white' />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableWithoutFeedback style={{flex:1}} onPress={() => this.goToDetail(index)}>
                    <View style={styles.touch}>
                        <View style={styles.body}>
                            <Image style={styles.body_image} source={cover}/>
                        </View>
                        <View style={styles.bottom}>
                            <View style={styles.bottom_title}>
                                <Text style={styles.bottom_title_text} ellipsizeMode='tail' numberOfLines={1}>{data.diaryTitle}</Text>
                            </View>
                            <View style={styles.bottom_line}>
                                <Text style={styles.bottom_line_text}>---</Text>
                            </View>
                            <View style={styles.bottom_time}>
                                <Text style={styles.bottom_time_text}>{data.time}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
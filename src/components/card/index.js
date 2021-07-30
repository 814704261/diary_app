import React, {Component} from "react";
import {
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import Text from '../../components/text'
import styles from './styles'

export default class MyCard extends Component{



    //更换封面
    changeCover = () => {
        this.props.changeCover()
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
                <View style={styles.body}>
                    <Image style={styles.body_image} source={require('../../static/images/cover.jpg')}/>
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
        )
    }
}
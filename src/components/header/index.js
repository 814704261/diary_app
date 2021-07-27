import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    header: {
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header_title:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        // letterSpacing: 8,
        textAlign: 'center',
        lineHeight: 50,
    },
    comLR: {
        height: '100%',
        minWidth: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
})



export default class Header extends Component{

    headerLeftPress(){
        this.props.onLeftPress && this.props.onLeftPress()
    }

    render() {
        let {left, title, right, border=false} = this.props
        return (
            <View style={[styles.header, {borderColor: '#999999',borderBottomWidth: (border? 1 : 0)}]}>
                <TouchableOpacity onPress={this.headerLeftPress.bind(this)}>
                    <View style={styles.comLR}>
                        {left}
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.header_title}>{title}</Text>
                </View>
                <View style={styles.comLR}>
                    {right}
                </View>
            </View>
        )
    }
}



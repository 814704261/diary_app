import React, {Component, PureComponent} from "react";
import {View} from "react-native";
import Text from '../../components/text'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export default class Statistical_calendar extends PureComponent{
    render(){
        return (
            <SafeAreaView>
                <View>
                    <Text>这是统计的图表界面</Text>
                </View>
            </SafeAreaView>
        )
    }
}
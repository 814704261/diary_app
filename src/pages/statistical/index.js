import React, {PureComponent} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {View} from "react-native";
import Text from '../../components/text';
import PieChart from "../../components/pieChart";
import Header from "../../components/header";

import styles from "./styles";

export default class Statistical extends PureComponent{
  render() {
    return (
      <SafeAreaView>

        <Header title='统计分析' />

        <PieChart />

        <View>

        </View>
      </SafeAreaView>
    )
  }
}
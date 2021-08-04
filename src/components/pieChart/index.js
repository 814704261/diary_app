import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import {PieChart} from 'react-native-charts-wrapper';

class PieChartScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      legend: {
        enabled: true,
        textSize: 15,
        form: 'CIRCLE',

        horizontalAlignment: "RIGHT",
        verticalAlignment: "CENTER",
        orientation: "VERTICAL",
        wordWrapEnabled: true
      },
      data: {
        dataSets: [{
          values: [
              {value: 20, label: 'Sandwiches'},
              {value: 20, label: 'Salads'},
              {value: 20, label: 'Soup'},
              {value: 20, label: 'Beverages'},
              {value: 20, label: 'Desserts'},
              {value: 20, label: 'Sandwhes'},
              {value: 20, label: 'Salads'},
              {value: 20, label: 'Soup'},
              {value: 20, label: 'Beverages'},
              {value: 20, label: 'Desserts'}
          ],
          // label: '心情统计扇图',
          config: {
            colors: [
              processColor('#C0FF8C'),
              processColor('#FFF78C'),
              processColor('#FFD08C'),
              processColor('#8CEAFF'),
              processColor('#FF8C9D'),
              processColor('#C0FF8C'),
              processColor('#FFF78C'),
              processColor('#FFD08C'),
              processColor('#8CEAFF'),
              processColor('#FF8C9D'),
            ],
            valueTextSize: 20,
            valueTextColor: processColor('green'),
            sliceSpace: 10,
            selectionShift: 13,
            // xValuePosition: "OUTSIDE_SLICE",
            // yValuePosition: "OUTSIDE_SLICE",
            valueFormatter: "#.#'%'",
            valueLineColor: processColor('green'),
            valueLinePart1Length: 0.5
          }
        }],
      },
      // highlights: [{x:0}],
      description: {
        text: '你的心情是怎样的呢',
        textSize: 20,
        textColor: processColor('black'),
      }
    };
  }

  handleSelect(event) {
    // console.log(event.nativeEvent)
  }

  render() {
    return (
          <PieChart
            style={styles.chart}
            logEnabled={true}
            chartBackgroundColor={processColor('')}
            chartDescription={this.state.description}
            data={this.state.data}
            legend={this.state.legend}
            highlights={this.state.highlights}

            extraOffsets={{left: 5, top: 5, right: 5, bottom: 5}}

            entryLabelColor={processColor('green')}
            entryLabelTextSize={20}
            entryLabelFontFamily='HelveticaNeue-Medium'
            drawEntryLabels={true}

            rotationEnabled={true}
            rotationAngle={45}
            usePercentValues={true}
            styledCenterText={{text:'心情', color: processColor('pink'), fontFamily: 'HelveticaNeue-Medium', size: 20}}
            centerTextRadiusPercent={100}
            holeRadius={40}
            holeColor={processColor('#f0f0f0')}
            transparentCircleRadius={45}
            transparentCircleColor={processColor('#f0f0f088')}
            maxAngle={350}
            onSelect={this.handleSelect.bind(this)}
            onChange={(event) => console.log(event.nativeEvent)}
          />
    );
  }
}

const styles = StyleSheet.create({
  chart: {
    width: '100%',
    height: 400,
  }
});

export default PieChartScreen;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReactNativeFusionCharts from 'react-native-fusioncharts';
import React, { Component } from 'react'
import { useState } from 'react';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
// } from 'react-native-chart-kit'

 
// export default function App() {

//   // Preparing the chart data
// const dat = [
//   {
//     label: "Venezuela",
//     value: "290"
//   },
//   {
//     label: "Saudi",
//     value: "260"
//   },
//   {
//     label: "Canada",
//     value: "180"
//   },
//   {
//     label: "Iran",
//     value: "140"
//   },
//   {
//     label: "Russia",
//     value: "115"
//   },
//   {
//     label: "UAE",
//     value: "100"
//   },
//   {
//     label: "US",
//     value: "30"
//   },
//   {
//     label: "China",
//     value: "30"
//   }
// ];

// // Create a JSON object to store the chart configurations
// const chartConfigs = {
//   type: "column2d", // The chart type
//   width: "700", // Width of the chart
//   height: "400", // Height of the chart
//   dataFormat: "json", // Data type
//   dataSource: {
//     // Chart Configuration
//     chart: {
//       caption: "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
//       subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
//       xAxisName: "Country", //Set the x-axis name
//       yAxisName: "Reserves (MMbbl)", //Set the y-axis name
//       numberSuffix: "K",
//       theme: "fusion" //Set the theme for your chart
//     },
//     // Chart Data - from step 2
//     data: dat
//   }
// };


 
//   //STEP 2 - Chart Data
//   const chartData = [
//     { label: "Venezuela", value: "250" },
//     { label: "Saudi", value: "260" },
//     { label: "Canada", value: "180" },
//     { label: "Iran", value: "140" },
//     { label: "Russia", value: "115" },
//     { label: "UAE", value: "100" },
//     { label: "US", value: "30" },
//     { label: "China", value: "30" },
//   ];
//   //STEP 3 - Chart Configurations
//   const chartConfig = {
//     type: "column2D",
//     width: "100%",
//     height: "400",
//     dataFormat: "json",
//     dataSource: {
//       chart: {
//         caption: "Countries With Most Oil Reserves [2017-18]",
//         subCaption: "In MMbbl = One Million barrels",
//         xAxisName: "Country",
//         yAxisName: "Reserves (MMbbl)",
//         numberSuffix: "K",
//         theme: "fusion",
//         exportEnabled: 1 // to enable the export chart functionality
//       },
//       data: chartData
//     }
//   };














//   return (
//     <View style={styles.container}>
//         <Text style={styles.heading}>
//           FusionCharts Integration with React Native
//         </Text>
//         <View style={styles.chartContainer}>
//           <ReactNativeFusionCharts
//             chartConfig={chartConfig}
//           />
         
//         </View>
//       </View>
//   );
//   }


// Preparing the chart data
const chartData = [
  {
    label: "Venezuela",
    value: "290"
  },
  {
    label: "Saudi",
    value: "260"
  },
  {
    label: "Canada",
    value: "180"
  },
  {
    label: "Iran",
    value: "140"
  },
  {
    label: "Russia",
    value: "115"
  },
  {
    label: "UAE",
    value: "100"
  },
  {
    label: "US",
    value: "30"
  },
  {
    label: "China",
    value: "30"
  }
];
// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
      subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
      xAxisName: "Country", //Set the x-axis name
      yAxisName: "Reserves (MMbbl)", //Set the y-axis name
      numberSuffix: "K",
      theme: "fusion" //Set the theme for your chart
    },
    // Chart Data - from step 2
    data: chartData
  }
};
export default class App extends Component {

  





  constructor(props) {
    super(props);
    //STEP 2 - Chart Data
    const chartData = [
      { label: "Venezuela", value: "250" },
      { label: "Saudi", value: "260" },
      { label: "Canada", value: "180" },
      { label: "Iran", value: "140" },
      { label: "Russia", value: "115" },
      { label: "UAE", value: "100" },
      { label: "US", value: "30" },
      { label: "China", value: "30" },
    ];
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "column2D",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Countries With Most Oil Reserves [2017-18]",
          subCaption: "In MMbbl = One Million barrels",
          xAxisName: "Country",
          yAxisName: "Reserves (MMbbl)",
          numberSuffix: "K",
          theme: "fusion",
          exportEnabled: 1 // to enable the export chart functionality
        },
        data: chartData
      }
    };

    this.state = {
      chartConfig
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          FusionCharts Integration with React Native
        </Text>
        <View style={styles.chartContainer}>
         
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  chartContainer: {
    height: 200
  }
});

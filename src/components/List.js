import React, { Component } from "react";
import Chart from "./Chart";

// 参考这个
// https://gallery.echartsjs.com/editor.html?c=xgH-H4fcpY
// https://gallery.echartsjs.com/editor.html?c=xBUoVxcGB01
// https://gallery.echartsjs.com/editor.html?c=xBkS-KMvQQ
// https://gallery.echartsjs.com/editor.html?c=x0oxzn-I3i
// https://gallery.echartsjs.com/editor.html?c=xkZFtowaDl

const options1 = {
  color: "#093ff9",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ["利润", "支出", "收入"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [
    {
      type: "value",
      axisTick: { show: false },

      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      type: "category",
      
      axisTick: { show: false },
      axisLine: {
        show: false
      },
      data: ["周一", "周二", "周三"]
    },
    {
      type: "category",
      axisTick: { show: false },
      axisLine: {
        show: false
      },
      data: ["周一", "周二", "周三"]
    }
  ],
  series: [
    {
      name: "利润",
      type: "bar",
      barWidth: 4,
      label: {
        normal: {
          show: true,
          position: [0, '-20'],
        }
      },
      data: [100, 170, 240]
    }
  ]
};

class List extends Component {
  render() {
    return (
      <div>
        <Chart options={options1} />
      </div>
    );
  }
}

export default List;

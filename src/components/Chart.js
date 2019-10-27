import React, { Component } from "react";
import echarts from "echarts";

class Chart extends Component {
  componentDidMount() {
    const { options } = this.props;
    // 引入 ECharts 主模块
    const myChart = echarts.init(this.chartDom);
    // 绘制图表
    myChart.setOption(options);
  }
  render() {
    return (
      <div>
        <div
          ref={chart => {
            this.chartDom = chart;
          }}
          style={{ width: 370, height: 192 }}
        ></div>
      </div>
    );
  }
}

export default Chart;

import React, { Component } from "react";
import "./App.css";

import Chart from "./components/Chart";
import List from "./components/List";

const options1 = {
  title: {
    text: "今日案件事件区域分布",
    top: 15,
    left: 30,
    textStyle: {
      color: "red"
    }
  },
  grid: {
    x: 60,
    x2: 20,
    height: 100
  },

  xAxis: {
    type: "category",
    axisLine: {
      show: false
    },
    boundaryGap: false,
    axisLabel: {
      fontSize: 9
    },
    axisTick: {
      show: false
    },
    data: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ]
  },
  yAxis: {
    type: "value",
    max: 600,
    axisLine: {
      show: false
    },
    axisLabel: {
      fontSize: 9,
      margin: 25,
      textStyle: {
        align: "left"
      }
    },
    axisTick: {
      show: false
    }
  },
  color: "rgba(0, 0, 0, .6)",
  backgroundColor: "rgba(0, 0, 0, .1)",

  series: [
    {
      data: [
        200,
        210,
        220,
        230,
        340,
        450,
        560,
        270,
        280,
        290,
        300,
        310,
        320,
        330,
        240,
        250,
        260,
        270,
        280,
        290,
        200,
        410,
        420,
        430,
        440,
        450,
        460,
        470,
        480,
        490,
        500
      ],
      type: "line",
      lineStyle: {
        color: "yellow"
      },
      itemStyle: {
        borderColor: "red"
      },
      label: {
        show: false
      },
      symbol: "none",
      areaStyle: {
        color: "yellow",
        opacity: 0.2
      }
    }
  ]
};

const options11 = {
  title: {
    text: "今日案件事件区域分布",
    top: 15,
    left: 30,
    textStyle: {
      color: "red"
    }
  },
  grid: {
    x: 60,
    x2: 20,
    height: 100
  },
  xAxis: {
    type: "category",
    axisLine: {
      show: false
    },
    boundaryGap: false,
    axisLabel: {
      fontSize: 9
    },
    axisTick: {
      show: false
    },
    data: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ]
  },
  yAxis: {
    type: "value",
    max: 600,
    axisLine: {
      show: false
    },
    axisLabel: {
      fontSize: 9,
      margin: 25,
      textStyle: {
        align: "left"
      }
    },
    axisTick: {
      show: false
    }
  },
  color: "rgba(0, 0, 0, .6)",
  backgroundColor: "rgba(0, 0, 0, .1)",
  series: [
    {
      data: [
        200,
        210,
        220,
        230,
        340,
        450,
        560,
        270,
        280,
        290,
        300,
        310,
        320,
        330,
        240,
        250,
        260,
        270
      ],
      type: "line",
      lineStyle: {
        color: "#f1bb15"
      },
      itemStyle: {
        borderColor: "red"
      },
      label: {
        show: false
      },
      symbol: "none",
      areaStyle: {
        color: "#f1bb15",
        opacity: 0.2
      }
    },
    {
      data: [
        150,
        160,
        170,
        180,
        190,
        200,
        210,
        220,
        230,
        240,
        250,
        260,
        270,
        280,
        290,
        300,
        310,
        320,
        330,
        340,
        350,
        360,
        370,
        380,
        390,
        400,
        410,
        420,
        430,
        440,
        450
      ],
      type: "line",
      lineStyle: {
        type: "dashed",
        color: "#f1bb15"
      },
      itemStyle: {
        borderColor: "red"
      },
      label: {
        show: false
      },
      symbol: "none",
      areaStyle: {
        opacity: 0
      }
    }
  ]
};

const options12 = {
  title: {
    text: "今日案件事件区域分布",
    top: 15,
    left: 30,
    textStyle: {
      color: "red"
    }
  },
  grid: {
    x: 60,
    x2: 20,
    height: 100
  },
  xAxis: {
    type: "category",
    axisLine: {
      show: false
    },
    boundaryGap: false,
    axisLabel: {
      fontSize: 9
    },
    axisTick: {
      show: false
    },
    data: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ]
  },
  yAxis: {
    type: "value",
    max: 600,
    axisLine: {
      show: false
    },
    axisLabel: {
      fontSize: 9,
      margin: 25,
      textStyle: {
        align: "left"
      }
    },
    axisTick: {
      show: false
    }
  },
  color: "rgba(0, 0, 0, .6)",
  backgroundColor: "rgba(0, 0, 0, .1)",
  series: [
    {
      data: [
        200,
        210,
        220,
        230,
        340,
        450,
        560,
        270,
        280,
        290,
        300,
        310,
        320,
        330,
        240,
        250,
        260,
        270
      ],
      type: "line",
      lineStyle: {
        color: "#00c28f"
      },
      itemStyle: {
        borderColor: "red"
      },
      label: {
        show: false
      },
      symbol: "none",
      areaStyle: {
        color: "#00c28f",
        opacity: 0.2
      }
    },
    {
      data: [
        150,
        160,
        170,
        180,
        190,
        200,
        210,
        220,
        230,
        240,
        250,
        260,
        270,
        280,
        290,
        300,
        310,
        320,
        330,
        340,
        350,
        360,
        370,
        380,
        390,
        400,
        410,
        420,
        430,
        440,
        450
      ],
      type: "line",
      lineStyle: {
        type: "dashed",
        color: "#00c28f"
      },
      itemStyle: {
        borderColor: "red"
      },
      label: {
        show: false
      },
      symbol: "none",
      areaStyle: {
        opacity: 0
      }
    }
  ]
};

const options13 = {
  title: {
    text: "今日案件事件区域分布",
    top: 15,
    left: 30,
    textStyle: {
      color: "red"
    }
  },
  grid: {
    x: 60,
    x2: 20,
    height: 100
  },
  xAxis: {
    type: "category",
    axisLine: {
      show: false
    },
    boundaryGap: false,
    axisLabel: {
      fontSize: 9
    },
    axisTick: {
      show: false
    },
    data: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ]
  },
  yAxis: {
    type: "value",
    max: 600,
    axisLine: {
      show: false
    },
    axisLabel: {
      fontSize: 9,
      margin: 25,
      textStyle: {
        align: "left"
      }
    },
    axisTick: {
      show: false
    }
  },
  color: "rgba(0, 0, 0, .6)",
  backgroundColor: "rgba(0, 0, 0, .1)",
  series: [
    {
      data: [
        200,
        210,
        220,
        230,
        340,
        450,
        560,
        270,
        280,
        290,
        300,
        310,
        320,
        330,
        240,
        250,
        260,
        270
      ],
      type: "line",
      lineStyle: {
        color: "#6a37fd"
      },
      itemStyle: {
        borderColor: "red"
      },
      label: {
        show: false
      },
      symbol: "none",
      areaStyle: {
        color: "#6a37fd",
        opacity: 0.2
      }
    },
    {
      data: [
        150,
        160,
        170,
        180,
        190,
        200,
        210,
        220,
        230,
        240,
        250,
        260,
        270,
        280,
        290,
        300,
        310,
        320,
        330,
        340,
        350,
        360,
        370,
        380,
        390,
        400,
        410,
        420,
        430,
        440,
        450
      ],
      type: "line",
      lineStyle: {
        type: "dashed",
        color: "#6a37fd"
      },
      itemStyle: {
        borderColor: "red"
      },
      label: {
        show: false
      },
      symbol: "none",
      areaStyle: {
        opacity: 0
      }
    }
  ]
};

const options2 = {
  title: {
    text: "漏斗图",
    subtext: "纯属虚构"
  },
  backgroundColor: "rgba(0, 0, 0, .1)",
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  legend: {
    data: ["展现", "点击", "访问", "咨询", "订单"]
  },
  series: [
    {
      name: "实际",
      type: "funnel",
      left: "10%",
      width: "80%",
      minSize: "30%",
      maxSize: "80%",
      label: {
        normal: {
          position: "inside",
          formatter: "{c}%",
          textStyle: {
            color: "#fff"
          }
        },
        emphasis: {
          position: "inside",
          formatter: "{b}实际: {c}%"
        }
      },
      itemStyle: {
        normal: {
          borderColor: "#fff",
          borderWidth: 2
        }
      },
      data: [
        { value: 30, name: "访问" },
        { value: 10, name: "咨询" },
        { value: 5, name: "订单" },
        { value: 50, name: "点击" },
        { value: 80, name: "展现" }
      ],
      markArea: {
        label: {
          show: true,
          borderWidth: 10
        },
        itemStyle: {
          color: "red",
          borderWidth: 1,
          borderColor: "yellow",
          borderType: "dashed"
        }
      }
    }
  ]
};

const options3 = {
  title: {
    text: "今日案件事件区域分布",
    top: 15,
    left: 30,
    textStyle: {
      color: "red"
    }
  },
  backgroundColor: "rgba(0, 0, 0, .1)",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },

  grid: {
    x: 60,
    x2: 20,
    height: 100
  },
  xAxis: [
    {
      type: "category",
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: 9
      },
      data: [
        "金毛",
        "哈士奇",
        "拉布拉多",
        "金毛",
        "哈士奇",
        "拉布拉多",
        "金毛",
        "哈士奇",
        "拉布拉多",
        "哈士奇"
      ]
    }
  ],
  yAxis: [
    {
      type: "value",
      max: 600,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: 9
      }
    }
  ],
  series: [
    {
      name: "直接访问",
      type: "bar",
      barWidth: 8,
      stack: "1",
      color: "#00c28f",
      data: [320, 332, 301, 320, 332, 301, 320, 332, 301, 320]
    }
  ]
};

const options4 = {
  backgroundColor: "rgba(0, 0, 0, .1)",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999"
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar"] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ["蒸发量", "降水量", "平均温度"]
  },
  xAxis: [
    {
      type: "category",
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      axisPointer: {
        type: "shadow"
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "水量",
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: "{value} ml"
      }
    },
    {
      type: "value",
      name: "温度",
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: "{value} °C"
      }
    }
  ],
  series: [
    {
      name: "蒸发量",
      type: "bar",
      data: [
        32.0,
        24.9,
        32.0,
        23.2,
        25.6,
        26.7,
        35.6,
        32.2,
        32.6,
        20.0,
        6.4,
        3.3
      ]
    },
    {
      name: "平均温度",
      type: "line",
      yAxisIndex: 0,
      data: [12.0, 23.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};

class App extends Component {
  render() {
    return (
      <div className="items">
        <div className="item">
          <Chart options={options1} />
        </div>
        <div className="item">
          <Chart options={options11} />
        </div>
        <div className="item">
          <Chart options={options12} />
        </div>
        <div className="item">
          <Chart options={options13} />
        </div>
        <div className="item">
          <Chart options={options3} />
        </div>
        <List />
        <div className="item">
          <Chart options={options2} />
        </div>

        <div className="item">
          <Chart options={options4} />
        </div>
      </div>
    );
  }
}

export default App;

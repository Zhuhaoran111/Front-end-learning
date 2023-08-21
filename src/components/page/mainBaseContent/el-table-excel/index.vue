<template>
  <div>
    <!-- 折线图2 -->
    <div id="mainTwo" style="width: 600px;height:400px; "></div>
    <!-- 折线图1 -->
    <!-- <div id="main" style="width: 100%;height:400px"></div> -->
    <!-- 表格区域 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="display:flex;flex-wrap:wrap;width:700px;background-color: pink;">
      <el-form-item label="供电单位:">
      <el-select v-model="formInline.region" placeholder="南京供电单位">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    <el-form-item label="户号:">
      <el-input v-model="formInline.user" placeholder="请输入" ></el-input>
    </el-form-item>
       <el-form-item label="户名:" style="margin-left:27px">
        <el-input v-model="formInline.user" placeholder="请输入"></el-input>
      </el-form-item>
    <el-form-item >
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
    <div>
          <el-table
        :data="tableData"
        style="width:37%">
        <el-table-column
          prop="date"
          label="用户编号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="市(州)公司"
          width="180"
          >
        </el-table-column>
          <el-table-column
          prop="address"
          label="状态">
          </el-table-column>
          <el-table-column
           prop="address"
          label="最大可负荷(万kW)">
          </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>

export default {
  data() {
      return{
        formInline: {

        }
      }
  },

  mounted() {
    // this.getEcharts()
    this.getEchartsTwo()
  },
  methods: {
    getEchartsTwo() {
      let data = {
        "title": ["基线负荷", "实测负荷", "目标负荷", "响应时段"],
        "xData": ["0时", "3时", "6时", "9时", "18时", "21时", "24时"],
        "yData": [{
          "data": [0, 0, 4, 0, 0, 0, 0, 0, 63, 51, 27, 0, 0, 0],
          "name": "基线负荷",
          "type": "line",
          "yAxisIndex": 0,
          "symbol": "circle",
          "symbolSize": 2
        },
        {
          "data": [23, 63, 40, 83, 6, 0, 27, 14, 137, 59, 15, 0, 0, 0],
          "name": "实测负荷",
          "type": "line",
          "yAxisIndex": 0,
          "symbol": "circle",
          "symbolSize": 2
        },
        {
          "data": [0, 10, 6, 17, 12, 0, 3, 0, 39, 21, 0, 0, 0, 0],
          "name": "目标负荷",
          "type": "line",
          "yAxisIndex": 0,
          "symbol": "circle",
          "symbolSize": 2
        },
           {
          "data": [0, 10, 5, 14, 12, 0, 3, 0, 39, 21, 0, 0, 0, 0],
          "name": "响应时段",
          "type": "line",
          "yAxisIndex": 1,
          "smooth": true,
          "symbol": "circle",
          "symbolSize": 2
        },

        ]
      }
      const calMax = (arr, type = 0) => {
        let max = 0;
        arr.forEach((el) => {
          el.yAxisIndex === type && el.data.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
              if (max < el1) {
                max = el1;
              }
            }
          })
        })
        let maxint = Math.ceil(max / 9.5); //不让最高的值超过最上面的刻度
        let maxval = maxint * 10; //让显示的刻度是整数
        return maxval;
      }

      var myChart = this.$echarts.init(document.getElementById('mainTwo'));
      let option = {
         grid: {
          left: 50, //距离左边的距离
          right: 50, //距离右边的距离
          bottom: '14%', //距离下边的距离
          top: '22%', //距离上边的距离
        },
        color: ['#fba723', '#2f73f2', '#36f8d1', '#e6ebf1',],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          itemWidth: 12,  //指标线长度
          itemGap: 24,   //指标距离
          itemHeight: 1, //指标高度，为1可去掉圆点
          data: data.title,
          right: 20,
        },
        xAxis: [{
          type: 'category',
          data: data.xData,
          axisLine: {
            lineStyle: {
              color: '#545454'
            }
          },
        }],
        yAxis: [{
          type: 'value',
          name: '单位:万千瓦',
          min: 0,
          max: calMax(data.yData, 0),
          interval: calMax(data.yData, 0) / 5,
          axisLabel: {
            formatter: '{value}'
          },
          axisLine: {
            lineStyle: {
              // color: '#5a6',
              opacity: 0, //y轴显示 0 - 1
            }
          },
          axisTick: { //刻度线显示
            show: false
          },
          splitLine: {
            lineStyle: { //分割线样式
              type: 'dashed'
            },
          },
        },
        {
          type: 'value',
          name: '人数',
          min: 0,
          max: calMax(data.yData, 1),
          interval: calMax(data.yData, 1) / 5,
          axisLabel: {
            formatter: '{value}'
          },
          axisLine: {
            lineStyle: {
              opacity: 0, //y轴显示 0 - 1
            }
          },
          axisTick: { //刻度线显示
            show: false
          },
          splitLine: {
            lineStyle: {
              opacity: 0,
            },
          },
        }
        ],
        series: data.yData,
      }
      myChart.setOption(option);
    },


//--------------------------------------------------


    getEcharts(){
        // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
   let  option = {
        tooltip: {
          trigger: 'axis',  //以横坐标为标题
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            },
        },
       formatter: function (params) {
         console.log(params)
            let html = params[0].name + "<br>";  //获取X轴的名称
            for (let i = 0; i < params.length; i++) {
              html += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>'
              if (params[i].seriesIndex == 2) {
                html += params[i].seriesName + ":" +(params[i].value * 100) + "%<br>";
              } else {
                html += params[i].seriesName + ":" + params[i].value + "<br>";
              }
            }
            return html;
          }
        },

        legend: {
          left: 'right',
          data: ['负荷调控指标', '实际调控负荷', '执行到位率']
        },
        xAxis: [
          {
            type: 'category',
            data: ['南京', '扬州', '镇江', '盐城', '泰州', '苏州', '南通','连云港','淮安','宿迁','徐州','无锡','常州'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '单位: 万kW',
            min: 0,
            max: 50,
            interval: 10,
            axisLabel: {
              formatter: '{value} kW'
            }
          },
          {
            type: 'value',
            name: '单位:%',

            // interval: 5, 百分比间隔数
            axisLabel: {
              formatter: function (value) {
                return value*100+'%'
              }
            },
             splitLine: {
              show: false
            }
          },

     ],
         grid: {
           top: "80px",
           right: "50px",
           left:"50px"
        },
        series: [
          {
            name: '负荷调控指标',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            barWidth: 20, // 设置每个柱子的宽度为20
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ],
            itemStyle: {
              color:"#2f73f3"
            }
          },
          {
            name: '实际调控负荷',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                debugger
                return value + ' ml';
              }
            },
            barWidth:20,
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ],
               itemStyle: {
              color: "#26cdf2"
            }
          },
          {
            name: '执行到位率',
            type: 'line',
            yAxisIndex: 1, //主要是设置哪个y轴，默认左边是0，然后右边是1，2顺序来
            smooth: false,//是否要线条圆滑展示
            data: [0.27, 0.28, 0.5, 0.23, 0.12, 0.45, 0.38, 0.22, 0.3, 0.28, 0.51, 0.44],
            lineStyle: {
              color: 'blue' // 设置线的颜色为红色
            },
            symbol: 'circle', //折线点设置为实心点
            symbolSize: 6, //折线点的大小
            itemStyle: {
              normal: {
                color:"red", //折线点的颜色
                borderColor: '#ffffff', //拐点边框颜色
                borderWidth: 2, //拐点边框大小
              },
            },
          }
        ]
     };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  }
}
</script>

<style>

</style>

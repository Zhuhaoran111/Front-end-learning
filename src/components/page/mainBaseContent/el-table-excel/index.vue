<template>
  <div>
   <div id="main" style="width: 100%;height:400px;"></div>
  </div>
</template>

<script>

export default {
  data() {
      return{

      }
  },

  mounted() {
    this.getEcharts()
  },
  methods:{
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
                color:red, //折线点的颜色
                borderColor: '#ffffff', //拐点边框颜色
                borderWidth: 2, //拐点边框大小
              },
            },
          }
        ]
   };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
     }
  }
}
</script>

<style>

</style>

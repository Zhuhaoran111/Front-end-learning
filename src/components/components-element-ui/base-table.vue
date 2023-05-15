<template>
  <div>
    <!-- row-dblclick:表格双击事件的回调 -->
    <el-table
      :data="tableData"
      border
      row-key="id"
      ref="multipleTable"
      fit
      v-adaptive="{bottomOffset:bottomOffset || 42,needAdaptive:needAdaptive,minHeight:minHeight || 300}"
      @selection-change="handleSelectionChange"
      @row-dblclick="handleSelection"
      >
    <el-table-column
      type="selection"
      v-if="needChecked"
      width="55">
    </el-table-column>

    <el-table-column
      label="选择"
      :show-overflow-tooltip="false"
      type="radio"
      v-if="needChecked"
      width="55">
      <template slot-scope="scope">
        <!-- 中间的&nbsp是为了占位用的，如果不写默认radio按钮后面会有1,2,3... -->
        <el-radio  id="selectGroup"  v-model="radioVal" :label="scope.row.id"  @change.native="handleRadioChange(scope.$index,scope.row)">&nbsp;</el-radio>
      </template>
    </el-table-column>

      <el-table-column
        align="center"
        label="序号"
        v-if="needIndex"
        type="index"
        width="60">
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        v-for="(item,index) in columns"
        :key="'column'+index"
        :prop="item.prop"
        :label="item.label"
        :fixed="item.fixed || null"
        :align="item.align || 'center'"
        :width="item.minWidth ? null : (item.width || 150)"
        :min-width="item.minWidth || null"

      >
      <!--
        prop:属性名称(英文字段)
        label:属性名称(中文字段)
        fixed:是否固定头部
        show-overflow-tooltip:宽度不够用省略号显示，鼠标移入显示全部信息
        width是表格的宽度，先判断是否设置了minWidth,如果设置了则设置为空,因为下面有min-width这个属性进行设置
           如果没有minWidth则就用(item.width || 150),item.width存在就用item.width.没有就用固定的150
           有minWidth就没有width的意义了
       -->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'base-form',
   props:{
      //列表的字段
      columns:{
         type:Array,
         default: function () {
          return []
        }
      },
      //是否需要序号--默认需要
      needIndex:{
          type:Boolean,
          default:true
      },
      //是否需要复选框
      needChecked:{
          type:Boolean,
          default:true
      },
      //是否双击表格,默认不需要---不常用
      doubleClick:{
        type:Boolean,
        default:false
      }
   },

  data () {
    return {
      //单选按钮绑定的值,这里的值就是label中的值,
      //这里的值与绑定的label值对应，label对应什么，这里就是什么
      //这里的值是什么，在radio中选中的就是哪个
      radioVal:'',
      tableData: [{
            id:1,
            name: '王小虎',
            sex:'男',
            address: '上海市普陀区金沙江路 1518 弄',
            date: '2016-05-02',
            hobby:'羽毛球'
          }, {
            id:2,
            date: '2016-05-04',
            sex:'女',
            name: '小红',
            address: '上海市普陀区金沙江路 1517 弄',
            date: '2016-05-03',
            hobby:'跳绳'
          }, {
            id:3,
            date: '2016-05-01',
            sex:'男',
            name: '王小张',
            address: '上海市普陀区金沙江路 1519 弄',
            date: '2016-05-03',
            hobby:'足球'
          }, {
            id:4,
            date: '2016-05-03',
            sex:'男',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            date: '2016-05-03',
            hobby:'篮球'
          }]
    }
  },
  created () {},
  mounted () {},
  methods: {
    //复选框选中的回调---这里接收的是一个数组，里面是选中的对象
    handleSelectionChange(value){
       console.log(value)
    },
    //单选按钮的回调--index是点击的索引,data是所点击对应行的值
    handleRadioChange(inedx,data){

    },
    //表格双击事件的回调
    handleSelection(row) {
      //判断是否双击表格的行
        if (this.doubleClick) {
          this.$emit('handleSelection', row)
        }
      },
  }
}
</script>

<style scoped lang="scss">

</style>

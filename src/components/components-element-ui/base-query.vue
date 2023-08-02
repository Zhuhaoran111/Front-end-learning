<template>
  <div>
    <el-form :inline="true" :mode="valueTmp" ref="form" :label-width="labelWidth">
      <el-form-item v-for="(item,index) in queryProps"  :key="'formItem' + index" :label="item.label">
            <el-input v-if="item.type == 'input'"
                      :style="{ width: item.width || '200px' }"
                      :size="size || 'medium'"
                      v-model="valueTmp[item.prop]"
                      :clearable="!item.clearDisable"
                      :placeholder="item.label"
                      :maxlength="item.maxlength || 100"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<!--
  inline:行内表单模式
  mode:表单数据对象
  label-width:表单域标签的宽度
 -->

<script>
export default {
  data() {
    return {
      valueTmp: {
        name: '1111',
        region: ''
        },

      queryProps: [
        {
        label: '设备名称',
        prop: 'deviceName',
        type: 'input',
        width: '200px',
        maxlength: '100'
         },

      //   {
      //   label: '故障类型',
      //   prop: "faultType",
      //   type: 'select',
      //   codeTypeId: '185',
      //   width: '200px',
      //   maxlength: '100'

      //  },
      //  {
      //   label: '处理状态',
      //   prop: "handleStatus",
      //   type: 'select',
      //   codeTypeId: '186',
      //   width: '200px',
      //   maxlength: '100'

      // },
      // {
      //   label: '创建日期',
      //   type: 'dateRange',
      //   prop: "createTime",
      //   width: '350px',
      //   maxlength: '100',
      //   startDateProp: 'createStartTime',
      //   endDateProp: 'createEndTime',
      // }
      ],
    }
  }
}
</script>


<style></style>

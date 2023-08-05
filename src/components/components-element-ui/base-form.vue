<template>
  <div>
  <el-form style="width: 100%;" :label-width="formConfig.labelWidth" :inline="formConfig.inline" :ref="formConfig.ref"
          :model="formParams">

          <el-form-item :label="item.label" v-for="(item, index) in formDataList" :key="index" :prop="item.prop"
            :rules="item.rules">

            <el-input
               v-if="item.type == 'input'"
               v-model="formParams[item.prop]"
              :disabled="item.disabled"
              :type="item.inputType"
              :placeholder="item.placeholder">
            </el-input>

            <el-select v-if="item.type == 'select'" v-model="formParams[item.prop]" :placeholder="item.placeholder">
              <el-option v-for="(option, index) in item.options" :key="index" :label="option.label" :value="option.value">
              </el-option>
            </el-select>

            <!-- value-format="yyyy-MM-dd":  日期格式 -->
            <el-date-picker v-if="item.type === 'date'" :type="item.datetype" v-model="formParams[item.prop]"
              :placeholder="item.placeholder" range-separator="至" :value-format="item.format" :start-placeholder="item.startDate"
              :end-placeholder="item.endDate">
            </el-date-picker>

            <el-switch v-if="item.type === 'switch'" v-model="formParams[item.prop]">
            </el-switch>

            <!-- 关于v-model用法 -->
            <el-checkbox-group v-if="item.type === 'checkBox'" v-model="checkList">
              <el-checkbox v-for="(check, index) in item.checkboxList" :key="'check' + index" :label="check.label"
                @change="changeCheck"></el-checkbox>
            </el-checkbox-group>
             <!-- 关于el-radio中label绑定的是用户看到的，lebel中是什么值,v-model中绑定就是什么值,
            但是有时候绑定的是名称，但是想传给后端是id字段，这时候就要在 <el-radio>{{radioItem.label}}</el-radio>
            展示显示的选项,lebel中绑定啥就绑定啥。
           -->
            <el-radio-group v-if="item.type === 'radio'" v-model="radioValue" @input="radioChange"  :placeholder="item.placeholder">
              <el-radio :label="radioItem.id" :value="radioItem.id" v-for="(radioItem, index) in item.radioList"  :key="index" :rules="item.rules">
                {{ radioItem.label }}
              </el-radio>
            </el-radio-group>

            <el-input v-if="item.type === 'textarea'" type="textarea" style="width: 500px;" v-model="formParams[item.prop]"
              :placeholder="item.placeholder">
            </el-input>
          </el-form-item>
        </el-form>
  </div>
</template>

<script>
export default {
  name: 'base-form',
  props: {
    //表单的宽度input,
    // formWidth: {
    //   type: String,
    //   default: "300px",
    // },
    //弹窗上的文字title
    title: {
      type: String,
      default: ""
    },
    //表单的配置
    formConfig: {
      type: Object,
      default: () => {
        return {};
      }
    },

    //表单的绑定的数据
    formParams: {
      type: Object,
      default: () => {
        return {};
      }
    },
    //表单的数据prop.label等
    formDataList: {
      type: Object,
      default: () => {
        return {};
      }
    },
    checkList: {
      type: Array,
      default: () => {
        return [];
      }
    },

  },
  name: "",

  watch:{
    formParams: {
        immediate: true,
        handler(formVal) {
          this.formData = { ...formVal };

      }
  }
 },

  data() {
    return {
      formData:{},
      formParams:this.formParams,
      radioValue:'',
      form: {
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
      }

    };
  },
  created() { },
  mounted() { },
  methods: {
    //复选框选中事件(这里可以把每次选中的数组给打印下来，复选框改变的时候)
    changeCheck() {
      console.log(this.checkList)
    },
    //单选框选中的事件(把每次选中的id或者名字记录)
    radioChange(e) {
      console.log(this.radioValue)
    },
  }
};
</script>

<style scoped lang="scss">

/deep/.el-input {
  width: 250px
}

/deep/.el-select {
  width: 250px
}
</style>

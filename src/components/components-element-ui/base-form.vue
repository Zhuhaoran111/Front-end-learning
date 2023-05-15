<template>
  <div>
    <el-dialog :visible="isShow" :title="title" :width="diaLogwidth" @close="btnCancel">
      <el-form style="width: 100%;" :label-width="formConfig.labelWidth" :inline="formConfig.inline" :ref="formConfig.ref"
        :model="formParams">

        <el-form-item :label="item.label" v-for="(item, index) in formDataList" :key="index" :prop="item.prop"
          :rules="item.rules">

          <el-input v-if="item.type == 'input'" v-model="formParams[item.prop]" :disabled="item.disabled"
            :placeholder="item.placeholder">
          </el-input>

          <el-select v-if="item.type == 'select'" v-model="formParams[item.prop]" :placeholder="item.placeholder">
            <el-option v-for="(option, index) in item.options" :key="index" :label="option.label" :value="option.value">
            </el-option>
          </el-select>


          <el-date-picker v-if="item.type === 'date'" :type="item.datetype" v-model="formParams[item.prop]"
            :placeholder="item.placeholder" range-separator="至" :start-placeholder="item.startDate"
            :end-placeholder="item.endDate">
          </el-date-picker>

          <el-switch v-if="item.type === 'switch'" v-model="formParams[item.prop]">
          </el-switch>

          <!-- 关于v-model用法 -->
          <el-checkbox-group v-if="item.type === 'checkBox'" v-model="checkList">
            <el-checkbox v-for="(check, index) in item.checkboxList" :key="'check' + index" :label="check.label"
              @change="changeCheck"></el-checkbox>
          </el-checkbox-group>

          <el-radio-group v-if="item.type === 'radio'" v-model="formParams[item.prop]" :placeholder="item.placeholder">
            <el-radio :label="opItem.label" v-for="(opItem, index) in item.radioList" :key="index" :rules="item.rules">
            </el-radio>
          </el-radio-group>

          <el-input v-if="item.type === 'textarea'" type="textarea" v-model="formParams[item.prop]"
            :placeholder="item.placeholder">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="btnCancel">取 消</el-button>
        <el-button type="primary" @click="btnOk">确 定</el-button>
      </span>
    </el-dialog>
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
    //弹窗的宽度
    diaLogwidth: {
      type: String,
      default: "60%",
    },
    //弹窗的显示与隐藏
    isShow: {
      type: Boolean,
      default: false
    },
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
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
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
    //取消的回调事件
    btnCancel(e) {
      this.$emit("closeDialog");
    },
    //确定的回调事件
    btnOk() { }

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

<template>
  <div>
    <baseButon btnName="基本form表单" type="primary" @btnClick="btnOneClick">
    </baseButon>

 <!--由于每个弹窗的宽度不一样，就把弹窗提到父组件中 -->
     <el-dialog
      :visible="isShow"
      title="新增"
      width="40%"
      @close="btnCancel">
      <!-- 下面是表单的内容 -->
      <baseForm  ref="refForm" :formDataList="formDataList" :title="title" :formConfig="formConfig" :checkList="checkList"
        @closeDialog="closeDialog">
      </baseForm>
        <span slot="footer" class="dialog-footer">
          <el-button @click="btnCancel">取 消</el-button>
          <el-button type="primary" @click="confirm">保 存</el-button>
        </span>
      </el-dialog>

  </div>
</template>

<script>
import baseForm from '../../../components/components-element-ui/base-form.vue'
import baseButon from '../../../components/components-element-ui/base-button.vue'
export default {
  components: { baseForm, baseButon },
  name: '',
  data() {
    return {
      isShow: false,
      title: '',
      //这里是绑定的表单字段
      formParams: {
        userName: "",   //用户名
        userLoginName: "",  //登陆账户
        userPassword: "",   //用户密码
        userPhone: "",   //手机号码
        userEmali: "",   //用户邮政
        roleId: "",    //角色id

      },
      checkList: [],  //checkList绑定
      //表单的数据
      formDataList: [
        {
          label: "用户昵称",
          prop: "userName",
          type: "input",
          placeholder: '请输入用户昵称',
          rules: [
            { required: true, message: "用户昵称不能为空", trigger: "blur" },
          ],
        },
        {
          label: "密码",
          prop: "userPassword",
          type: "input",
          inputType:'password',
          placeholder: '请输入密码',
          rules: [{ required: true, message: "密码不能为空", trigger: "blur" }],
        },
        {
          label: "用户角色",
          prop: "roleId",
          type: "select",
          options: [
            { label: "管理员", value: 1 },
            { label: "店长", value: 2 },
          ],
          rules: [
            { required: true, message: "用户角色不能为空", trigger: "blur" },
          ],
        },
        {
          label: "日期",
          prop: "date",
          type: "date",  //类型是日期
          datetype: 'datetime',
          placeholder: '请选择日期',
          format:'yyyy-MM-dd HH:mm:ss',
          rules: [{ required: true, message: "请选择日期", trigger: "blur" }],
        },
        {
          label: "日期和时间范围",
          prop: "rangeDate",
          type: "date",  //类型是日期
          format: 'yyyy-MM-dd HH:mm:ss',
          datetype: 'datetimerange',
          startDate: '开始日期',
          endDate: '结束日期'
        },

        {
          label: "复选框",
          type: "checkBox",
          prop: 'checkList',
          checkboxList: [
            {
              label: '王者荣耀'
            },
            {
              label: 'qq飞车'
            },
            {
              label: '穿越火线'
            },
            {
              label: '英雄联盟'
            }
          ],
        },

        {
          label: "单选框",
          type: "radio",
          prop:'radioValue',
          radioList: [
            {
              id:1,
              label: '西游记'
            },
            {
              id: 2,
              label: '三国演义'
            },
            {
              id: 3,
              label: '水浒传'
            },
            {
              id: 4,
              label: '红楼梦'
            }
          ],
        },

         {
          label: "描述",
          prop: "description",
          type: "textarea",
          placeholder: '描述信息',
          rules: [
            { required: true, message: "描述信息不能为空", trigger: "blur" },
          ],
        },

      ],
      //表单的样式配置
      formConfig: {
        labelWidth: "110px",
        inline: true,
        ref: "formRef",
      },
    }
  },
  created() { },
  mounted() { },
  methods: {
    //打开弹窗的回调
    btnOneClick() {
      this.isShow = true
    },
    //关闭弹窗的回调
    closeDialog() {
      this.isShow = false
    },
    //弹框取消的回调事件
     btnCancel(e) {
      this.isShow=false
    },
    //保存form表单
    confirm() {
        console.log(this.$refs.refForm.formData)
    }
  }
}
</script>

<style scoped lang="scss"></style>

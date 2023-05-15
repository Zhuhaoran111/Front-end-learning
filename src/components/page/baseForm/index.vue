<template>
  <div>
    <baseButon btnName="弹框1" type="primary" @btnClick="btnOneClick">
    </baseButon>
    <baseForm :isShow="isShow" :formDataList="formDataList" :title="title" :formConfig="formConfig" :checkList="checkList"
      @closeDialog="closeDialog">
    </baseForm>
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
        checkList: [],
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
          label: "登录账户",
          prop: "userLoginName",
          type: "input",
          placeholder: '请输入登录账户',
          rules: [
            { required: true, message: "登录账户不能为空", trigger: "blur" },
          ],
        },
        {
          label: "密码",
          prop: "userPassword",
          type: "input",
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
          rules: [{ required: true, message: "请选择日期", trigger: "blur" }],
        },
        {
          label: "日期",
          prop: "date",
          type: "date",  //类型是日期
          datetype: 'datetime',
          placeholder: '请选择日期',
          rules: [{ required: true, message: "请选择日期", trigger: "blur" }],
        },
        {
          label: "日期和时间范围",
          prop: "rangeDate",
          type: "date",  //类型是日期
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
          radioList: [
            {
              label: '西游记'
            },
            {
              label: '三国演义'
            },
            {
              label: '水浒传'
            },
            {
              label: '红楼梦'
            }
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
      this.title = '新增'
    },
    //关闭弹窗的回调
    closeDialog() {
      this.isShow = false
    }
  }
}
</script>

<style scoped lang="scss"></style>

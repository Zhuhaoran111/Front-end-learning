<template>
  <div>
    <el-button
    :type=type
    :size=size
    :plain="plain"
    :round="round"
    :circle="circle"
    :disabled="disabled"
    :loading="loading"
    :icon="icon"
    style="margin-top:5px;">{{btnName}}</el-button>
  </div>
</template>

<script>
export default {
  name: '',

  props:{
    //按钮的类型 //primary / success / warning / danger / info / text
      type:{
        type:String,
        default:''
      },
    //按钮的大小  //medium / small / mini
      size:{
        type:String,
        default:'medium'
      },
      //按钮自定义名称
      btnName:{
        type:String,
        default:'默认'
      },
       //按钮是否为朴素按钮(朴素按钮:文字为按钮颜色，背景色是浅色)
      plain:{
        type:Boolean,
        default:false
      },
      //是否为圆角按钮(默认为false)
      round:{
        type:Boolean,
        default:false
      },
       //是否为原型按钮(默认为false)---注意这种里面是一个字符或一个图标的为原型，多个就会撑开变扁
       circle:{
        type:Boolean,
        default:false
      },
      //是否禁用按钮(默认为false)
      disabled:{
         type:Boolean,
         default:false
      },
      //是否需要加载中的状态(默认为false)
      loading:{
        type:Boolean,
         default:false
      },
      //图标按钮
      icon:{
        type:String,
        default:''
      }
  },
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss"></style>

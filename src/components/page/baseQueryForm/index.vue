<template>
     <div>
        <baseQueryForm></baseQueryForm>
    </div>
</template>

<!--
  inline:行内表单模式
  mode:表单数据对象
  label-width:表单域标签的宽度
 -->

<script>
import baseQueryForm from '../../../components/components-element-ui/base-query.vue'
export default {
      components: {
        baseQueryForm
      },
       data() {
         return {
           valueTmp: {
             name: '1111',
             region:''
            }
       }
     }
 }
</script>


<style>


</style>

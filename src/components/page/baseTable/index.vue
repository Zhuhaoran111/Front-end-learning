<template>
  <div>
    <base-table :columns="columns"></base-table>
  </div>
</template>

<script>
import baseTable from '../../../components/components-element-ui/base-table.vue'
export default{
  components:{baseTable},
  name: '',
  data () {
    return {
      columns:[
        {
           prop:'name',  //英文字段名称
           label:'名字',       //中文字段名称
           width:'180',

        },
        {
           prop:'sex',
           label:'性别',
           width:'180',
        },
        {
           prop:'address',
           label:'地区',
           width:'180',
        },
        {
           prop:'hobby',
           label:'爱好',
           width:'180',
        },
        {
           prop:'date',
           label:'日期',
           width:'180',
        },
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss"></style>

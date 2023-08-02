<template>
  <div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
//后端是这种一级的数据，现在来数据进行组装
  treeList: [
        {
          id: "604e115c7bfcfa45d019d3e9", pid: "-1", name: "传智教育", code: "1", introduce: "程序员的摇篮"
        },
        {
          id: "604e21feb205b95968e13129", pid: "", name: "总裁办", code: "1001", manager: "管理员"
        },
        {
          id: "604e222bb205b95968e1312a", pid: "", name: "行政部", code: "XZB", manager: "管理员", introduce: "行政部"
        },
        {
          id: "604e223fb205b95968e1312b", pid: "", name: "人事部", code: "RSB", manager: "管理员", introduce: "人事部"
        },
        {
          id: "604e2251b205b95968e1312c", pid: "", name: "财务部", code: "CWB", manager: "管理员", introduce: "财务部"
        },
        {
          id: "604e2262b205b95968e1312d", pid: "604e2251b205b95968e1312c", name: "财务核算部", code: "CWHSB", manager: "管理员", introduce: "财务核算部"
        },
        {
          id: "604e227db205b95968e1312e", pid: "604e2251b205b95968e1312c", name: "税务管理部", code: "SWGLN", manager: "管理员", introduce: "财务部"
        },
        {
          id: "604e2297b205b95968e1312f", pid: "604e2251b205b95968e1312c", name: "薪资管理部", code: "XZGLB", manager: "管理员", introduce: "薪资管理部"
        },
        {
          id: "6051ad90e93db6522c1d00d2", pid: "", name: "技术部", code: "JSB", manager: "孙财", introduce: "技术部"
        },
        {
        id: "6051adb6e93db6522c1d00d3", pid: "6051ad90e93db6522c1d00d2", name: "Java研发部", code: "JYFB", manager: "管理员", introduce: "JAVA研发部"
        },
        {
        id: "6051add6e93db6522c1d00d4", pid: "6051ad90e93db6522c1d00d2", name: "Python研发部", code: "PYFB", manager: "罗晓晓", introduce: "Python研发部"
       },
       {
       id: "6051adefe93db6522c1d00d5", pid: "6051ad90e93db6522c1d00d2", name: "Php研发部", code: "PhpYFB", manager: "孙财", introduce: "Php研发部"
       },
       {
      id: "6051ae03e93db6522c1d00d6", pid: "", name: "运营部", code: "YYB", manager: "孙财", introduce: "运营部"
      },
      {
      id: "6051ae15e93db6522c1d00d7", pid: "", name: "市场部", code: "SCB", manager: "孙财", introduce: "市场部"
      },
      {
       id: "6051ae28e93db6522c1d00d8", pid: "6051ae15e93db6522c1d00d7", name: "北京事业部", code: "BJSYB", manager: "孙财", introduce: "BJSYB"
      },
      {
      id: "6051ae3de93db6522c1d00d9", pid: "6051ae15e93db6522c1d00d7", name: "上海事业部", code: "SHSYB", manager: "文吉星", introduce: "上海事业部"
      }
      ]
    }
  },
  created() {
    this.changeList()
  },
  mounted() { },
  methods: {
    changeList() {
        console.log(this.treeList)
    }
  }
}
</script>

<style scoped lang="scss"></style>

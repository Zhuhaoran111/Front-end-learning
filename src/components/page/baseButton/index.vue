<template>
  <div style="display: flex;">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="常规按钮配置" name="first" class="commonTab" >
      <div class="commonStyle">
      <div>常规按钮</div>
      <base-button type="primary" size="medium" btnName="按钮1" ></base-button>
     <base-button type="success" size="small" btnName="按钮2"></base-button>
     <base-button type="warning" size="mini" btnName="按钮3"></base-button>
      </div>
      <div class="commonStyle">
        <div>朴素按钮plain</div>
     <base-button type="primary" size="medium" btnName="按钮1" plain ></base-button>
     <base-button type="success" size="small" btnName="按钮2" plain></base-button>
     <base-button type="warning" size="mini" btnName="按钮3" plain></base-button>
      </div>

      <div class="commonStyle">
        <div>圆角按钮round</div>
     <base-button type="primary" size="medium" btnName="按钮1" round ></base-button>
     <base-button type="success" size="small" btnName="按钮2" round></base-button>
     <base-button type="warning" size="mini" btnName="按钮3" round></base-button>
      </div>

      <div class="commonStyle">
        <div>圆型按钮circle</div>
     <base-button type="primary" size="medium" btnName="一" circle ></base-button>
     <base-button type="success" size="small" btnName="二" circle></base-button>
     <base-button type="warning" size="mini" btnName="三" circle></base-button>
     </div>


     <div class="commonStyle">
     <div>禁用按钮disabled</div>
     <base-button type="primary" size="medium" btnName="按钮1" :disabled="true" ></base-button>
     <base-button type="success" size="small" btnName="按钮2" :disabled="true"></base-button>
     <base-button type="warning" size="mini" btnName="按钮3" :disabled="true"></base-button>
     </div>

     <div class="commonStyle">
     <div>加载中状态loadding</div>
     <base-button type="primary" size="medium" btnName="按钮1" :loading="true" ></base-button>
     <base-button type="success" size="small" btnName="按钮2" :loading="true"></base-button>
     <base-button type="warning" size="mini" btnName="按钮3" :loading="true"></base-button>
     </div>

     <div class="commonStyle">
     <div>自定义图标按钮icon</div>
     <base-button type="primary" size="medium" btnName="按钮1" icon="el-icon-edit" ></base-button>
     <base-button type="success" size="small" btnName="按钮2" icon="el-icon-share"></base-button>
     <base-button type="warning" size="mini" btnName="按钮3" icon="el-icon-search"></base-button>
     </div>

    </el-tab-pane>
    <el-tab-pane label="自定义按钮" name="second">
       自定义按钮修改element-ui内部样式即可
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>


  </div>
</template>

<script>
import baseButton from '../../../components/components-element-ui/base-button.vue'
export default {
  components:{baseButton},
  name: '',
  data () {
    return {
      type:'',
      size:'',
      activeName: 'first'
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.commonTab{
  display: flex;
  flex-wrap: wrap;
  justify-content:flex-start;
}
.commonStyle{
  border: 1px solid #ccc;
  width: 500px;
  margin:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

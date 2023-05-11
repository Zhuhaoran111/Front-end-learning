<template>
  <div>
   7777777
  </div>
</template>

<script>
  export default {
    name: "Tab",
    data() {
      return {
        activeTab: 'first',
        showHeader: false,
        unread: [
          {
            date: '2018-08-20 20:00:00',
            title: '【系统通知】该系统将于次日凌晨2点到5点进行升级维护',
          },
          {
            date: '2018-08-19 21:00:00',
            title: '【天气预报】明日成都全市范围内会有大面积降雨',
          },
          {
            date: '2018-08-19 20:00:00',
            title: '【系统通知】该系统将于次日凌晨2点到5点进行升级维护',
          }
        ],
        read: [
          {
            date: '2018-08-17 20:00:00',
            title: '【系统通知】该系统将于次日凌晨2点到5点进行升级维护'
          }
        ],
        trash: [
          {
            date: '2018-08-17 21:00:00',
            title: '【天气预报】明日成都龙泉驿区将会出现罕见高温'
          }
        ]
      };
    },
    methods: {
      handleRead(index) {

        this.read.push(this.unread.splice(index, 1)[0]);
      },
      handleReadAll() {

        this.read = this.read.concat(this.unread.splice(0));
      },
      handleDel(index) {

        this.trash.push(this.read.splice(index, 1)[0]);
      },
      handleDelAll() {

        this.trash = this.trash.concat(this.read.splice(0));
      },
      handleRestore(index) {

        this.read.push(this.trash.splice(index, 1)[0]);
      },
      handleRestoreAll() {

        this.read = this.read.concat(this.trash.splice(0));
      }
    }
  }
</script>

<style scoped lang="less">
  .el-tab-pane {
    padding: 20px 0;
    .border-radius;
  }
  .btn-batch {
    margin: 20px 0 0 10px;
  }
</style>

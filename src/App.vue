<template>
  <div id="app">
    {{number}}
    <div class="nav-child">
      <router-link :to="menu.path" v-for="menu in menus" :key="menu.name">{{menu.name}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import routes from "./router"
import actions from "@/shared/actions";

export default {
  name: 'App',
  data(){
    return{
      menus:routes,
      number:0
    }
  },
  mounted() {
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange(state => {
      const { index } = state;
      // 未登录 - 返回主页
      if (!index) {
        console.log('未检测到登录信息')
      }
      this.number = index
    }, true);
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

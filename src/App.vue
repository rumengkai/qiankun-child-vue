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
import {watchIndex} from "@/utils/actions";

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
    watchIndex((state, prevState) => {
          // state: 变更后的状态; prevState: 变更前的状态
          console.log("主应用观察者：number 改变前的值为 ", prevState.index);
          console.log("主应用观察者：登录状态发生改变，改变后的 number 的值为 ", state.index);
          this.number = state.index
      });
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

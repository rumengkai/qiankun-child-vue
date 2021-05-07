<template>
  <div id="app">
    {{ number }}
    <div class="nav-child">
      <router-link :to="menu.path" v-for="menu in menus" :key="menu.name">
        {{ menu.name }}
        <br />
      </router-link>
    </div>
    <button @click="reduce()">
      发送消息
    </button>
    <br />
    <button @click="goReactAbout()">
      goReactAbout
    </button>
    <router-view></router-view>
  </div>
</template>

<script>
  import routes from "./router"
  import { sendIndex, watchIndex } from "@/utils/actions"

  export default {
    name: "App",
    data() {
      return {
        menus: routes,
        number: 0
      }
    },
    methods: {
      reduce() {
        this.number--
        //改变index状态
        sendIndex(this.number)
      },
      goReactAbout() {
        console.log("~~~ goReactAbout", this.goReactAbout)
        history.pushState(null, null, "/#/cdp-react/holmes/platform")
      }
    },
    mounted() {
      // 注册观察者函数
      // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
      watchIndex((state, prevState) => {
        // state: 变更后的状态; prevState: 变更前的状态
        console.log("主应用观察者：number 改变前的值为 ", prevState.index)
        console.log("主应用观察者：登录状态发生改变，改变后的 number 的值为 ", state.index)
        this.number = state.index
      }, true)
    }
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

import Home from "../components/HelloWorld.vue"
import List from "../components/list.vue"

const packageName = require('../../package.json').name;

// 判断是 qiankun 环境则增加路由前缀
let prefix = ''
if(window.__POWERED_BY_QIANKUN__){
    prefix = '/'+packageName
  }

const routes = [
    {
        path:prefix + "/",
        name:"Home",
        component:Home
    },
    {
        path:prefix + "/list",
        name:"List",
        component:List
    }
]

export default routes
import Home from "../components/HelloWorld.vue"
import List from "../components/list.vue"

const routes = [
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/list",
        name:"List",
        component:List
    }
]

export default routes
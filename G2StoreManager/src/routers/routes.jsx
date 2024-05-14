import TabScreens from '../components/BottomTab/TabScreens.jsx'
import Login from '../screens/Login/Login.jsx'
import Orders from '../screens/Orders/Orders.jsx'

const publicScreens = [
    { name:'TabScreens', component: TabScreens },
    { name:'Login', component: Login },
    { name:'Orders', component: Orders }
]


export { publicScreens }
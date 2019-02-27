import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../views/homeView/component/home'
import Login from '../views/loginView/component/login'
import Signin from '../views/signinView/component/signIn'
import Init from '../views/initView/component/init'
import Menu from '../views/menuView/component/menu'
import Detail from '../views/detailView/component/detail'

const IndexStack = createStackNavigator(
  {
    Login: { screen: Login },
    Signin: { screen: Signin }
  }, {
    headerMode: 'none',
  }
)

const AppStack = createStackNavigator(
  {
    Home: { screen: Home },
    Menu: { screen: Menu },
    Detail: { screen: Detail }
  }, {
    headerMode: 'none',
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    Init: Init,
    Index: IndexStack,
    App: AppStack
  },
  {
    initialRouteName: 'App'
  }
)
);
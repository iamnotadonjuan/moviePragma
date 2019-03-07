import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import LoginController from '../controllers/LoginController'
import Init from '../views/initView/component/init'
import Menu from '../views/menuView/component/menu'
import Detail from '../views/detailView/component/detail'
import SignInController from '../controllers/SignInController'
import HomeController from '../controllers/HomeController'

const IndexStack = createStackNavigator(
  {
    Login: { screen: LoginController },
    Signin: { screen: SignInController }
  }, {
    headerMode: 'none',
  }
)

const AppStack = createStackNavigator(
  {
    Home: { screen: HomeController },
    Menu: { screen: Menu },
    Detail: { screen: Detail }
  }, {
    headerMode: 'none',
  }
)

export default createAppContainer(createSwitchNavigator(
  {
    Init: Init,
    Index: IndexStack,
    App: AppStack
  },
  {
    initialRouteName: 'Init'
  }
))
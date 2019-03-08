import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import LoginController from '../controllers/LoginController'
import Init from '../views/initView/component/init'
import MenuController from '../controllers/MenuController'
import DetailController from '../controllers/DetailController'
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
    Menu: { screen: MenuController },
    Detail: { screen: DetailController }
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
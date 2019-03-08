import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import LoginController from '../controllers/LoginController'
import InitController from '../controllers/InitController'
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
    Init: InitController,
    Index: IndexStack,
    App: AppStack
  },
  {
    initialRouteName: 'Init'
  }
))
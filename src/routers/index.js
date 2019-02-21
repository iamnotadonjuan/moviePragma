import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../views/homeView/component/home'
import Login from '../views/loginView/component/login'
import Init from '../views/initView/component/init'

const IndexStack = createStackNavigator(
  {
    Login: { screen: Login },
  }, {
    headerMode: 'none',
  }
)

const AppStack = createStackNavigator(
  {
    Home: { screen: Home },
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
    initialRouteName: 'Init'
  }
)
);
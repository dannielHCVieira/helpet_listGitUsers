import { createStackNavigator, StackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '~/screens/Home/index';
import Profile from '~/screens/Profile/index';

const screens = {
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
};

// home stack navigator screens
const basicStack = createStackNavigator(screens, { headerMode: "none" });

export default createAppContainer(basicStack);
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import SelectedResultScreen from "./src/screens/SelectedResultScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: SelectedResultScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);

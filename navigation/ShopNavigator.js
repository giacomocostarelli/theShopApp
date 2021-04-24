import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Colors from "../constants/Colors";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";

const ProductsNavigator = createStackNavigator(
	{
		productOverview: ProductOverviewScreen,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Colors.primary,
			},
			headerTintColor: "white",
		},
	}
);

export default createAppContainer(ProductsNavigator);

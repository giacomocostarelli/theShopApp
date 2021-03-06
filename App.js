import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";

import { StatusBar } from "expo-status-bar";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productReducer from "./store/reducers/product";
import ShopNavigator from "./navigation/ShopNavigator";

//For better performances.
enableScreens();

//store redux creator
const rootReducer = combineReducers({
	products: productReducer,
});

const store = createStore(rootReducer);

export default function App() {
	return (
		<Provider store={store}>
			<ShopNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

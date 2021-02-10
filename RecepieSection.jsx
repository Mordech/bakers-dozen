import React, { useRef } from "react";
import { Text, View } from "react-native";
import appStyles from "./app-styles/appStyles";
import Ingredients from "./components/Ingredients/Ingredients";
import Recepie from "./components/recepie/Recepie";
import ButtonAlt from "./components/button-alt/ButtonAlt";
import RecepieTitle from "./components/recepie-title/RecepieTitle";
import shareView from "./utils/shareView";
import themeColor from "./app-styles/ThemeColors";
import colors from "./app-styles/colors";
import shareRecepie from "./recepies/shareRecepie";

function RecepieSection() {
	const recepieViewRef = useRef();

	return (
		<View style={appStyles().recepiePanel}>
			<RecepieTitle />
			<View>
				<Text style={appStyles().subHeadline}>Ingredients</Text>
			</View>
			<Ingredients />
			<View>
				<Text style={appStyles().subHeadline}>Recepie</Text>
			</View>
			<Recepie />
			<ButtonAlt
				lable='Share recipie'
				press={() => {
					shareRecepie();
				}}
			/>
		</View>
	);
}

export default RecepieSection;

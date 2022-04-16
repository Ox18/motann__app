import { useState } from "react";

export const useThemeColor = () => {
	const [themeColor, setThemeColor] = useState("light");

	const selectThemeLight = () => {
		setThemeColor("light");
	};

	const selectThemeDark = () => {
		setThemeColor("dark");
	};

	return {
		themeColor,
		selectThemeLight,
		selectThemeDark,
	};
};

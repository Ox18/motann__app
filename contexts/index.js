import React, { useContext, createContext } from "react";
import { useThemeColor } from "./useThemeColor";

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
	const { themeColor, selectThemeLight, selectThemeDark } = useThemeColor();
	//ComponentDidMouunt
	React.useEffect(() => {}, []);

	//
	const values = React.useMemo(
		() => ({
			themeColor,
			selectThemeLight,
			selectThemeDark
		}),
		[themeColor]
	); // States que serán visibles en el contexto.

	// Interface donde será expuesto como proveedor y envolverá la App.
	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

//
export function useAppContext() {
	const context = useContext(AppContext);

	if (!context) {
		console.error("Error deploying App Context!!!");
	}

	return context;
}

export default useAppContext;

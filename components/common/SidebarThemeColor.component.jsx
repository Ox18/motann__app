import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { useAppContext } from "../../contexts";

export const SidebarThemeColorComponent = ({ notBorder = false }) => {
	const [isDarkMode] = React.useState(false);

	const { themeColor, selectThemeLight, selectThemeDark } = useAppContext();

	const onClickLightMode = () => selectThemeLight();

	const onClickDarkMode = () => selectThemeDark();

	return (
		<Box
			bg={"white"}
			borderTop={notBorder ? "none" : "1px solid #e8e9ee"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			pt={notBorder ? "none" : "20px"}
			pl={notBorder ? "none" : "15px"}
			pr={notBorder ? "none" : "15px"}
		>
			<Box
				bg={"#f2f2f2"}
				w={"100%"}
				display={"grid"}
				gridTemplateColumns={"1fr 1fr"}
				borderRadius={"20px"}
				p={"3px"}
			>
				<Button
					fontSize={"sm"}
					leftIcon={<BiSun />}
					variant={themeColor === "dark" ? "theme-color-inactive" : "theme-color-active"}
					onClick={onClickLightMode}
				>
					Claro
				</Button>
				<Button
					fontSize={"sm"}
					leftIcon={<BiMoon />}
					variant={themeColor === "dark" ? "theme-color-active" : "theme-color-inactive"}
					onClick={onClickDarkMode}
				>
					Oscuro
				</Button>
			</Box>
		</Box>
	);
};

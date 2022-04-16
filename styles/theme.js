import { extendTheme } from "@chakra-ui/react";
import { Box, Heading, Button } from "./components";

export const theme = extendTheme({
	colors: {
		blueLight: "#238bff",
		grayLight: "#d2d2d4",
		dark: "#2e2e2e",
		blue: "#0177fc",
		gray: "#c3c3c3",
	},
	components: {
		Box,
		Heading,
		Button,
	},
	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "4rem",
	},
});

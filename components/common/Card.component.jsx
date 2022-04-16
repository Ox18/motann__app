import { Box } from "@chakra-ui/react";
import React from "react";

export const Card = ({ children }) => {
	return (
		<Box bg={"white"} p={"20px"} borderRadius={"10px"}>
			{children}
		</Box>
	);
};

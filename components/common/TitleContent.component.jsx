import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export const TitleContent = ({ label }) => {
	return (
		<Box mt={"10px"} mb={"20px"} display={["none", "none", "flex"]} color={"dark"}>
			<Heading>{label}</Heading>
		</Box>
	);
};

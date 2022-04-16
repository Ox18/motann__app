import { Box } from "@chakra-ui/react";
import React from "react";

export const ContentLayout = ({ children }) => {
	return <Box className="container-layout-content" p={"20px"}>{children}</Box>;
};
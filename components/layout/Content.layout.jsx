import { Box } from "@chakra-ui/react";
import React from "react";

export const ContentLayout = ({ children }) => {
	return <Box className="container-layout-content animate__animated animate__fadeIn" p={"10px"}>{children}</Box>;
};

import React from "react";
import {
	Sidebar,
	NavigationBar,
	NavbarPrimaryComponent,
	NavbarSecondaryComponent,
	SeoComponent,
} from "components";
import { Box } from "@chakra-ui/react";

export const MainLayout = ({ children, seo = {} }) => {
	return (
		<>
		<SeoComponent 
			{...seo}
		/>
		<Box
			display={["flex", "flex", "grid", "grid"]}
			gridTemplateColumns={"220px auto"}
			bg={"#f4f6fa"}
			height={"100vh"}
			flexDirection={"column"}
		>
			<Sidebar />
			<Box display={"flex"} flexDirection={"column"}>
				<Box display={["none", "none", "block", "block"]}>
					<NavbarPrimaryComponent />
				</Box>
				<Box display={["block", "block", "none", "none"]}>
					<NavbarSecondaryComponent />
				</Box>
				{children}
			</Box>
			<NavigationBar />
		</Box>
		</>
	);
};

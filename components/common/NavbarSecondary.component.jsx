import { Box } from "@chakra-ui/react";
import React from "react";
import { LogoComponent } from "./Logo.component";
import { SidebarThemeColorComponent } from "./SidebarThemeColor.component";

export const NavbarSecondaryComponent = () => {
	return (
		<Box bg="white"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={"15px"}
      boxShadow={"0px -2px 10px rgb(0 0 0 / 15%)"}
    >
			<LogoComponent />
      <SidebarThemeColorComponent
        notBorder
      />
		</Box>
	);
};

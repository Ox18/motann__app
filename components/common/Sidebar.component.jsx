import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { SidebarItemComponent } from "./SidebarItem.component";
import { BiShoppingBag, BiUserCircle, BiBook, BiCog } from "react-icons/bi";
import { SidebarProfileComponent } from "./SidebarProfile.component";
import { SidebarThemeColorComponent } from "./SidebarThemeColor.component";

export const Sidebar = () => {
	return (
		<Box bg={"white"} h={"100%"} display={["none", "none", "block", "block"]}>
			<SidebarProfileComponent />
			<Box
				display={"flex"}
				flexDirection={"column"}
				alignItems={"space-between"}
				justifyContent={"space-between"}
				h={"calc(100% - 200px)"}
			>
				<Box
					display={"flex"}
					flexDirection={"column"}
					gap={"80px"}
				>
					<Box>
						<SidebarItemComponent
							label={"Presupuestos"}
							icon={BiBook}
							path={"/presupuestos"}
						/>
						<SidebarItemComponent
							label={"Clientes"}
							icon={BiUserCircle}
							path={"/clientes"}
						/>

						<SidebarItemComponent
							label={"Materiales"}
							icon={BiShoppingBag}
							path={"/materiales"}
							isLast
						/>
					</Box>
					<Box>
					<Heading
						color={"gray"}
						fontSize={"sm"}
						pl={"30px"}
						pt={"10px"}
						pb={"10px"}
					>
						Preferencias
					</Heading>
					<Box>
						<SidebarItemComponent
							label={"Configuración"}
							icon={BiCog}
							path={"/configuracion"}
						/>
					</Box>
					</Box>
				</Box>
				<SidebarThemeColorComponent />
			</Box>
		</Box>
	);
};

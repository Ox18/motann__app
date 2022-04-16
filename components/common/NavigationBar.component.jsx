import { Avatar, Box } from "@chakra-ui/react";
import React from "react";
import { BiShoppingBag, BiUserCircle, BiBook, BiCog } from "react-icons/bi";
import { NavigationBarItemComponent } from "./NavigationBarItem.component";

export const NavigationBar = () => {
	return (
		<Box
			position={"fixed"}
			bg={"white"}
			zIndex={"500"}
			bottom={0}
			width={"100%"}
		>
			<Box
				display={["flex", "flex", "none", "none"]}
				zIndex={"600"}
				boxShadow={"0px 2px 10px rgb(0 0 0 / 15%)"}
				h={"56px"}
				position={"relative"}
				flexDir={"row"}
				alignItems={"center"}
				justifyContent={"space-between"}
				pl={"15px"}
				pr={"15px"}
			>
				<NavigationBarItemComponent path={"/presupuestos"} icon={<BiBook />} />
				<NavigationBarItemComponent
					path={"/clientes"}
					icon={<BiUserCircle />}
				/>
				<NavigationBarItemComponent
					path={"/materiales"}
					icon={<BiShoppingBag />}
					isLast
				/>
				<NavigationBarItemComponent path={"/configuracion"} icon={<BiCog />} />
				<NavigationBarItemComponent
					path={"/profile"}
					icon={
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<Avatar name="Jaime Delgado" size="xs" />
						</Box>
					}
				/>
			</Box>
		</Box>
	);
};

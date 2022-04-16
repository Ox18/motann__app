import { Box, Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const SidebarItemComponent = ({ label, icon: Icon, path, isLast }) => {
	const router = useRouter();

	const isActive = router.pathname === path;

	const onClick = () => {
		router.push(path);
	};

	return (
		<Box cursor={"pointer"} className={"opacity"} onClick={onClick}>
			<Box display={"flex"} alignItems={"center"} justifyContent={"center"}
				pt={"5px"}
				pb={"5px"}
			>
				<Divider color={"#e8e9ee"} width={"80%"} />
			</Box>
			<Box
				display={"grid"}
				gridTemplateColumns={"50px auto"}
				borderLeft={isActive ? "4px solid #0177fc" : "none"}
				pl={isActive ? "25px" : "29px"}
				pr={"10px"}
				pt={"10px"}
				pb={"10px"}
				alignItems={"center"}
			>
				<Box fontSize={"2xl"} color={isActive ? "blueLight" : "dark"}>
					<Icon />
				</Box>
				<Box
					width={"100%"}
					color={isActive ? "blue" : "dark"}
					fontWeight={"bold"}
					className={"effect"}
					fontSize={"sm"}
				>
					{label}
				</Box>
			</Box>
		</Box>
	);
};

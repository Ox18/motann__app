import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const NavigationBarItemComponent = ({ icon, path }) => {
	const router = useRouter();

	const onClick = () => {
		router.push(path);
	};

	const isActive = router.pathname === path;

	return (
		<Box fontSize={"1.5rem"} onClick={onClick}
			color={isActive ? "blue" : "dark"}
			cursor={"pointer"}
			className={"opacity"}
		>
			{icon}
		</Box>
	);
};

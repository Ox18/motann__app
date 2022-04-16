import { Avatar, Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const SidebarProfileComponent = () => {
	const router = useRouter();

	const onClickProfile = () => {
		router.push("/profile");
	};

	return (
		<Box w={"100%"} position={"relative"} mb={"30px"}>
			<Box w={"100%"} h={"100px"} bg={"blue"} />
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				w={"100%"}
				flexDirection={"column"}
				position={"relative"}
			>
				<Box position={"absolute"} top={"-30px"}>
					<Avatar
						name="TT"
						cursor={"pointer"}
						className={"opacity"}
						onClick={onClickProfile}
					/>
				</Box>
				<Box h={"20px"} />
				<Heading fontSize={["2xl", "3xl", "xl", "xl"]} color={"dark"}>
					TT
				</Heading>
			</Box>
		</Box>
	);
};

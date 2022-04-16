import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const LogoComponent = () => {
	const router = useRouter();

	const onClick = () => {
		router.push("/");
	};

	return (
		<Image
			src="/static/logo_transparent.png"
			alt="Logo"
			w={"120px"}
			cursor={"pointer"}
			filter={"brightness(1.3)"}
			onClick={onClick}
		/>
	);
};

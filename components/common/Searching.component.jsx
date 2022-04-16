import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";

export const Searching = ({ placeholder }) => {
	return (
		<InputGroup>
			<InputLeftElement pointerEvents="none">
				<BiSearchAlt2 />
			</InputLeftElement>
			<Input type="tel" placeholder={placeholder} />
		</InputGroup>
	);
};

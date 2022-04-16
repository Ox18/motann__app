import React from "react";
import { Tr, Td, Button } from "@chakra-ui/react";
import { BiTrash, BiEdit, BiInfoCircle } from "react-icons/bi";

export const RowCliente = ({ index, nombre, direccion, provincia }) => {
	return (
		<Tr>
			<Td>{index}</Td>
			<Td>{nombre}</Td>
			<Td display={["none", "none", "block", "block"]}>{provincia}</Td>
			<Td>{direccion}</Td>
			<Td display={"flex"} gap={"5px"}>
				<Button size="xs" colorScheme={"facebook"} variant="solid">
					<BiInfoCircle />
				</Button>
				<Button size="xs" colorScheme={"yellow"} variant="solid">
					<BiEdit />
				</Button>
				<Button size="xs" colorScheme={"red"} variant="solid">
					<BiTrash />
				</Button>
			</Td>
		</Tr>
	);
};

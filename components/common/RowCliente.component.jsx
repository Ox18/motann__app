import React, { useState } from "react";
import { Tr, Td, Button, useToast } from "@chakra-ui/react";
import { BiTrash, BiEdit, BiInfoCircle } from "react-icons/bi";
import { deleteCliente } from "services";

export const RowCliente = ({ index, nombre, direccion, provincia, id }) => {
	const toast = useToast();
	const [loading, setLoading] = useState(false);
	const [isDeleted, setIsDeleted] = useState(false);

	const onClickDelete = () => {
		deleteCliente(id)
			.then((res) => {
				toast({
					title: "Cliente eliminado",
					description: "El cliente ha sido eliminado correctamente",
					status: "success",
					duration: 3000,
					isClosable: true,
				});
				setIsDeleted(true);
			})
			.catch((err) => {
				console.log(err);
				toast({	
					title: "Error",
					description: "Ha ocurrido un error al eliminar el cliente",
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			})
			.finally(() => {
				setLoading(false);
			});
	};

	if (isDeleted) {
		return null;
	}

	return (
		<Tr>
			<Td>{index}</Td>
			<Td>{nombre}</Td>
			<Td display={["none", "none", "block", "block"]}>{provincia}</Td>
			<Td>{direccion}</Td>
			<Td display={"flex"} gap={"5px"}>
				<Button
					size="xs"
					colorScheme={"facebook"}
					variant="solid"
					loading={loading}
				>
					<BiInfoCircle />
				</Button>
				<Button
					size="xs"
					colorScheme={"yellow"}
					variant="solid"
					loading={loading}
				>
					<BiEdit />
				</Button>
				<Button
					size="xs"
					colorScheme={"red"}
					variant="solid"
					onClick={onClickDelete}
					loading={loading}
				>
					<BiTrash />
				</Button>
			</Td>
		</Tr>
	);
};

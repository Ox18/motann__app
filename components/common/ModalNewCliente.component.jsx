import React, { useState, useRef } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	FormControl,
	FormLabel,
	Input,
	useToast,
} from "@chakra-ui/react";
import { createCliente } from "services";

export const ModalNewCliente = ({
	onClose = () => {},
	isOpen = false,
	onSuccess,
}) => {
	const toast = useToast();
	const [loadingSubmit, setLoadingSubmit] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		// const { nombre, provincia, ruc, cifnif, direccion } = e.target;

		const nombre = e.target.nombre.value;
		const provincia = e.target.provincia.value;
		const ruc = e.target.ruc.value;
		const cifnif = e.target.cifnif.value;
		const direccion = e.target.direccion.value;

		setLoadingSubmit(true);

		createCliente({ nombre, provincia, ruc, cifnif, direccion })
			.then((res) => {
				onSuccess(res.data);
				toast({
					title: "Cliente creado",
					description: "El cliente ha sido creado correctamente",
					status: "success",
					duration: 3000,
					isClosable: true,
				});
				onClose();
			})
			.catch((err) => {
				console.log(err);
				toast({
					title: "Error",
					description: "Ha ocurrido un error al crear el cliente",
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			})
			.finally(() => {
				setLoadingSubmit(false);
			});
	};

	const refForm = useRef();

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Agregar cliente</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<form onSubmit={onSubmit} ref={refForm} id="form-cliente-nuevo">
						<FormControl>
							<FormLabel as={`legend`}>Datos del cliente</FormLabel>
							<Input
								placeholder="Nombre"
								type="text"
								name="nombre"
								id="nombre"
								aria-label="Nombre"
								aria-describedby="nombre"
							/>
							<FormLabel as={`legend`}>Provincia</FormLabel>
							<Input
								placeholder="Provincia"
								type="text"
								name="provincia"
								id="provincia"
								aria-label="provincia"
								aria-describedby="provincia"
							/>
							<FormLabel as={`legend`}>ruc</FormLabel>
							<Input
								placeholder="ruc"
								type="text"
								name="ruc"
								id="ruc"
								aria-label="ruc"
								aria-describedby="ruc"
							/>
							<FormLabel as={`legend`}>direccion</FormLabel>
							<Input
								placeholder="direccion"
								type="text"
								name="direccion"
								id="direccion"
								aria-label="direccion"
								aria-describedby="direccion"
							/>
							<FormLabel as={`legend`}>cifnif</FormLabel>
							<Input
								placeholder="cifnif"
								type="text"
								name="cifnif"
								id="cifnif"
								aria-label="cifnif"
								aria-describedby="cifnif"
							/>
						</FormControl>
					</form>
				</ModalBody>
				<ModalFooter gap={2}>
					<Button
						variant={"solid"}
						colorScheme="blackAlpha"
						onClick={onClose}
						isLoading={loadingSubmit}
					>
						Cancelar
					</Button>
					<Button
						variant={"solid"}
						colorScheme={"messenger"}
						isLoading={loadingSubmit}
						form="form-cliente-nuevo"
						type="submit"
					>
						Crear
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

import { useState, useEffect } from "react";
import {
	Table,
	TableContainer,
	Thead,
	Tbody,
	Box,
	Tr,
	Th,
	Button,
	Heading,
	Spinner,
} from "@chakra-ui/react";
import {
	Card,
	ContentLayout,
	MainLayout,
	RowCliente,
	Searching,
	TitleContent,
	ModalNewCliente
} from "components";
import { useFetchAndLoad, useAsync } from "hooks";
import { BiPlusCircle } from "react-icons/bi";
import { getClientes } from "services";

export default function Home() {
	const { loading, callEndpoint } = useFetchAndLoad();
	const [clientes, setClientes] = useState([]);

	const getApiData = async () => await callEndpoint(getClientes());

	const [openModalNewCliente, setOpenModalNewCliente] = useState(false);

	
	useAsync(getApiData, setClientes, () => {}, []);

	const onSuccessAddCliente = (data) => {
		setClientes([...clientes, data]);
	}

	return (
		<MainLayout
			seo={{
				title: "Clientes",
			}}
		>
			<ContentLayout>
				<TitleContent label={"Clientes"} />
				<Box
					display={["flex", "flex", "grid", "grid"]}
					gridTemplateColumns={"auto 400px"}
					gap={"1rem"}
					flexDir={"column-reverse"}
				>
					<Card>
						<Box
							display={"flex"}
							justifyContent={"space-between"}
							mb={"20px"}
							alignItems={"center"}
						>
							<Heading fontSize={"xl"} color={"dark"}>
								Clientes
							</Heading>
							<Button
								variant={"theme-color-white"}
								leftIcon={<BiPlusCircle fontSize={"1.3rem"} />}
								onClick={() => setOpenModalNewCliente(true)}
							>
								Añadir
							</Button>
							<ModalNewCliente
								isOpen={openModalNewCliente}
								onClose={() => setOpenModalNewCliente(false)}
								onSuccess={onSuccessAddCliente}
							/>
						</Box>
						<TableContainer>
							<Table size="sm" variant={"unstyled"}>
								<Thead color={"dark"} mb={"20px"}>
									<Tr>
										<Th>Nro</Th>
										<Th>Nombre</Th>
										<Th display={["none", "none", "block", "block"]}>
											Provincia
										</Th>
										<Th>Dirección</Th>
										<Th>Acciones</Th>
									</Tr>
								</Thead>
								<Tbody>
									{clientes.map((cliente, index) => (
										<RowCliente
											key={cliente.id}
											{...cliente}
											index={index + 1}
										/>
									))}
									{loading && <Spinner />}
								</Tbody>
							</Table>
						</TableContainer>
					</Card>
					<Card>
						<Searching placeholder={"Nombre del cliente"} />
					</Card>
				</Box>
			</ContentLayout>
		</MainLayout>
	);
}

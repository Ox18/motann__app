import {
	Table,
	TableContainer,
	Thead,
	Tbody,
	Box,
	Tr,
	Td,
	Th,
	Button,
	Heading,
} from "@chakra-ui/react";
import {
	Card,
	ContentLayout,
	MainLayout,
	Searching,
	TitleContent,
} from "components";
import { BiTrash, BiEdit, BiInfoCircle, BiPlusCircle } from "react-icons/bi";

export default function Home() {
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
							<Button variant={"theme-color-white"} leftIcon={<BiPlusCircle
								fontSize={"1.3rem"}
							/>}>
								Añadir
							</Button>
						</Box>
						<TableContainer>
							<Table size="sm" variant={"unstyled"}>
								<Thead color={"dark"} mb={"20px"}>
									<Tr>
										<Th>Nro</Th>
										<Th>Nombre</Th>
										<Th display={["none", "none", "none", "table-cell"]}>
											Dirección
										</Th>
										<Th>Acciones</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td>1</Td>
										<Td>Wilmer Delgado</Td>
										<Td display={["none", "none", "none", "table-cell"]}>
											Los olivos
										</Td>
										<Td display={"flex"} gap={"5px"}>
											<Button
												size="xs"
												colorScheme={"facebook"}
												variant="solid"
											>
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
								</Tbody>
							</Table>
						</TableContainer>
					</Card>
					<Card>
						<Searching
							placeholder={"Nombre del cliente"}
						/>
					</Card>
				</Box>
			</ContentLayout>
		</MainLayout>
	);
}

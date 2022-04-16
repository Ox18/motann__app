import {
	Table,
	TableCaption,
	TableContainer,
	Thead,
	Tbody,
	Box,
} from "@chakra-ui/react";
import { Card, ContentLayout, MainLayout } from "components";

export default function Home() {
	return (
		<MainLayout
			seo={{
				title: "Clientes",
			}}
		>
			<ContentLayout>
				<Box
					display={["flex", "flex", "grid", "grid"]}
					gridTemplateColumns={"auto 400px"}
					gap={"1rem"}
					flexDir={"column-reverse"}
				>
					<Card>
						<TableContainer>
							<Table variant="striped" colorScheme="teal">
								<TableCaption>
									<h1>Clientes</h1>
								</TableCaption>
								<Thead>
									<tr>
										<th>Nombres</th>
										<th>Dirección</th>
										<th>Provincia</th>
										<th>Acciones</th>
									</tr>
								</Thead>
								<Tbody>
									<tr>
										<td>Juan</td>
										<td>Perez</td>
										<td>Perez</td>
										<td>Perez</td>
									</tr>
								</Tbody>
							</Table>
						</TableContainer>
					</Card>
					<Card>ga</Card>
				</Box>
			</ContentLayout>
		</MainLayout>
	);
}

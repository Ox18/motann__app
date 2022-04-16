import axios from "axios";
import { loadAbort } from "utilities";

export const getClientes = () => {
	const controller = loadAbort();
	return {
		call: axios.get("/api/clientes", {
			signal: controller.signal,
		}),
		controller,
	};
};

export const createCliente = (cliente) => {
	return axios.post("/api/clientes", cliente);
};

export const deleteCliente = (id) => {
	return axios.delete(`/api/clientes/${id}`);
};

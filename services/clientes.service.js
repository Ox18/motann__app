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

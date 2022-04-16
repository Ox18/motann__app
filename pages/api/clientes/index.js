import { db } from "config/firebase.config";

export default async function handler(req, res) {
	// get
	if (req.method === "GET") {
		const clients = await db.collection("clientes").get();
		const clientsArray = clients.docs.map((doc) => {
			return {
				id: doc.id,
				...doc.data(),
			};
		});
		res.status(200).json(clientsArray);
	}

	// post
	if (req.method === "POST") {
		const client = {
			...req.body,
		};
		const data = await db.collection("clientes").add(client);
		res.status(201).json({
			id: data.id,
			...client,
		});
	}
}

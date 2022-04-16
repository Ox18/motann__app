import { db } from "config/firebase.config";

export default async function handler(req, res) {
    // get
    if (req.method === "GET") {
        const clients = await db.collection("clientes").get();
        const clientsArray = clients.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            };
        });
        res.status(200).json(clientsArray);
    }
}

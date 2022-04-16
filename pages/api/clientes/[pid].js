import { db } from "config/firebase.config";

export default async function handler(req, res) {
	// delete
    if (req.method === "DELETE") {
        const { pid } = req.query;
        await db.collection("clientes").doc(pid).delete();
        res.status(200).json({
            message: "Cliente deletado com sucesso",
        });
    }
}

import { MainLayout } from "components";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push("/presupuestos");
	}, []);

	return (
		<MainLayout>
			<h1>Hello Next.js</h1>
		</MainLayout>
	);
}

import { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
	const router = useRouter();

	useEffect(() => {
		if (router) {
			router.push("/presupuestos");
		}
	}, [router]);

	return <div>index</div>;
};

export default Index;

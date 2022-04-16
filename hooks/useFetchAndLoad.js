import { useEffect, useState } from "react";

const useFetchAndLoad = () => {
	const [loading, setLoading] = useState(false);
	let controller;

	const callEndpoint = async (axiosCall) => {
		setLoading(true);
		if (axiosCall.controller) controller = axiosCall.controller;
		let result = {};
		try {
			result = await axiosCall.call;
		} catch (err) {
			setLoading(false);
			throw err;
		}
		setLoading(false);
		return result;
	};

	const cancelEndpoint = () => {
		setLoading(false);
		controller && controller.abort();
	};

	useEffect(() => {
		return () => {
			cancelEndpoint();
		};
	}, []);

	return { loading, callEndpoint };
};

export { useFetchAndLoad };

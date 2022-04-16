import React from "react";
import Head from "next/head";

export const SeoComponent = ({
    title = "Montanna Edificaciones"
}) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/static/logo_transparent.png" />
		</Head>
	);
};

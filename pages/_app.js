import { ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "../contexts";
import { theme } from "styles/index";
import 'animate.css';
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
	return (
		<AppContextProvider>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</AppContextProvider>
	);
}

export default MyApp;

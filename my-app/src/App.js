import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { GlobalStyle } from "./global/GlobalStyle";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Main />
			<Footer />
		</>
	);
}
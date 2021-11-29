import "./App.css";
import Home from "./pages/Home/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details/Details.jsx";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/details/:id" element={<Details />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

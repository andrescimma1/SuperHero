import "./App.css";
import Home from "./pages/Home/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Details from "./pages/Details/Details.jsx";
import Login from "./pages/Login/Login.jsx";
import axios from "axios";
import { useState } from "react";

function App() {
	const [token, setToken] = useState(null);

	const getToken = (email, password) => {
		axios
			.post("http://challenge-react.alkemy.org/", { email, password })
			.then(({ data }) => setToken(data.token))
			.catch(() => setToken(null));
	};

	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					{!token ? (
						<>
							<Route
								path="*"
								element={<Navigate to="/login" />}
							/>
							<Route
								exact
								path="/login"
								element={<Login getToken={getToken} />}
							/>
						</>
					) : (
						<>
							<Route path="*" element={<Navigate to="/" />} />
							<Route path="/" element={<Home />} />
							<Route path="/details/:id" element={<Details />} />
						</>
					)}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

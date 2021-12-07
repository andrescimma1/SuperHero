import { useState, useEffect } from "react";
import axios from "axios";
import "./Details.css";
import { Link } from "react-router-dom";

export default function Details(props) {
	const [loading, setLoading] = useState(true);
	const API_KEY = "4382962791714286";
	const id = window.location.pathname.slice(9);
	const [superhero, setSuperhero] = useState(null);

	useEffect(() => {
		if (loading) {
			axios
				.get(`https://superheroapi.com/api.php/${API_KEY}/${id}`)
				.then(({ data }) => {
					setSuperhero(data);
					console.log(data);
				});

			setLoading(false);
		}
	});

	return (
		<div>
			{superhero ? (
				<div class="card mb-3">
					<div class="row g-0">
						<div class="col-md-6">
							<img
								src={superhero.image.url}
								class="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div class="col-md-6">
							<div class="card-body" style={{ height: "400px" }}>
								<h5 class="card-title">{superhero.name}</h5>
								<p class="card-text">
									Height: {superhero.appearance.height[1]}
								</p>
								<p class="card-text">
									Weight: {superhero.appearance.weight[1]}
								</p>
								<p class="card-text">
									Eye-color:{" "}
									{superhero.appearance["eye-color"]}
								</p>
								<p class="card-text">
									Hair-color:{" "}
									{superhero.appearance["hair-color"]}
								</p>
								<p class="card-text">
									Occupation: {superhero.work.occupation}
								</p>
								<Link to="/" class="btn btn-secondary">
									Back{" "}
								</Link>
								<button
									style={{ margin: "0 0 0 0.5rem" }}
									type="button"
									class="btn btn-success"
								>
									Add to team
								</button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<img
					style={{ padding: "5rem 0" }}
					src="https://lh3.googleusercontent.com/proxy/alUmWCg1SMSbCEyGfIWKE661T6u3nZGa81mconhsAMp4lUCT7E30t6DrpULs80NSBbXGZiYNIFNXXIipSe1KlfTb"
				/>
			)}
		</div>
	);
}

import { useState, useEffect } from "react";
import axios from "axios";

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
				<div>
					{superhero.appearance["eye-color"]}
					{superhero.appearance["hair-color"]}
					{superhero.appearance.height[1]}
					{superhero.appearance.weight[1]}
					{superhero.name}
					{superhero.work.occupation}
				</div>
			) : (
				<div>No found.</div>
			)}
		</div>
	);
}

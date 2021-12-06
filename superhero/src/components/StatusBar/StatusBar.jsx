import "./StatusBar.css";
import React, { useEffect, useState } from "react";

export default function StatusBar(props) {
	const { teamStats, team } = props;

	let max = 0;
	const [maxString, setMaxString] = useState("");

	useEffect(() => {
		for (const property in teamStats) {
			if (parseInt(teamStats[property], 10) > max) {
				max = parseInt(teamStats[property], 10);
				setMaxString(`${property}`);
			}
		}
	}, [teamStats]);

	return (
		<div class="container">
			<div class="stats-container">
				<h4 style={{ color: "#E50000" }}>
					{maxString.charAt(0).toUpperCase() + maxString.slice(1)}{" "}
				</h4>
				<h6>Combat</h6>
				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						style={{
							width: `${(
								teamStats.combat / team.length
							).toString()}%`,
						}}
					>
						{teamStats.combat}
					</div>
				</div>
				<h6>Durability</h6>
				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						style={{
							width: `${(
								teamStats.durability / team.length
							).toString()}%`,
						}}
					>
						{teamStats.durability}
					</div>
				</div>
				<h6>Intelligence</h6>
				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						style={{
							width: `${(
								teamStats.intelligence / team.length
							).toString()}%`,
						}}
					>
						{teamStats.intelligence}
					</div>
				</div>
				<h6>Power</h6>
				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						style={{
							width: `${(
								teamStats.power / team.length
							).toString()}%`,
						}}
					>
						{teamStats.power}
					</div>
				</div>
				<h6>Speed</h6>
				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						style={{
							width: `${(
								teamStats.speed / team.length
							).toString()}%`,
						}}
					>
						{teamStats.speed}
					</div>
				</div>
				<h6>Strength</h6>
				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						style={{
							width: `${(
								teamStats.strength / team.length
							).toString()}%`,
						}}
					>
						{teamStats.strength}
					</div>
				</div>
			</div>
		</div>
	);
}

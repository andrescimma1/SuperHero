import "./StatusBar.css";

export default function StatusBar(props) {
	const { teamStats, team } = props;
	console.log(teamStats);

	return (
		<div class="container">
			<h4>Combat</h4>
			<div class="progress">
				<div
					class="progress-bar progress-bar-striped progress-bar-animated"
					role="progressbar"
					style={{
						width: `${(
							teamStats.combat / team.length
						).toString()}%`,
					}}
				></div>
			</div>
			<h4>Durability</h4>
			<div class="progress">
				<div
					class="progress-bar progress-bar-striped progress-bar-animated"
					role="progressbar"
					style={{
						width: `${(
							teamStats.durability / team.length
						).toString()}%`,
					}}
				></div>
			</div>
			<h4>Intelligence</h4>
			<div class="progress">
				<div
					class="progress-bar progress-bar-striped progress-bar-animated"
					role="progressbar"
					style={{
						width: `${(
							teamStats.intelligence / team.length
						).toString()}%`,
					}}
				></div>
			</div>
			<h4>Power</h4>
			<div class="progress">
				<div
					class="progress-bar progress-bar-striped progress-bar-animated"
					role="progressbar"
					style={{
						width: `${(teamStats.power / team.length).toString()}%`,
					}}
				></div>
			</div>
			<h4>Speed</h4>
			<div class="progress">
				<div
					class="progress-bar progress-bar-striped progress-bar-animated"
					role="progressbar"
					style={{
						width: `${(teamStats.speed / team.length).toString()}%`,
					}}
				></div>
			</div>
			<h4>Strength</h4>
			<div class="progress">
				<div
					class="progress-bar progress-bar-striped progress-bar-animated"
					role="progressbar"
					style={{
						width: `${(
							teamStats.strength / team.length
						).toString()}%`,
					}}
				></div>
			</div>
		</div>
	);
}

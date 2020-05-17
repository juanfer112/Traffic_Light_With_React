import React from "react";
import ReactDOM from "react-dom";
import "../../styles/index.scss";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			visible: null
		};
	}
	render() {
		var clickRed = "";
		var clickYellow = "";
		var clickGreen = "";

		if (this.state.visible === "red") {
			clickRed = "glow";
		} else if (this.state.visible === "yellow") {
			clickYellow = "glow";
		} else if (this.state.visible === "green") {
			clickGreen = "glow";
		}

		return (
			<div>
				<div id="trafficTop" />
				<div id="container">
					<div
						className={"red light " + clickRed}
						onClick={() => this.setState({ visible: "red" })}
					/>
					<div
						className={"yellow light " + clickYellow}
						onClick={() => this.setState({ visible: "yellow" })}
					/>
					<div
						className={"green light " + clickGreen}
						onClick={() => this.setState({ visible: "green" })}
					/>
				</div>
			</div>
		);
	}
}

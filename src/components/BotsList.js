import React from "react";
import { useSelector } from "react-redux";
import BotsComponent from "./BotsComponent";

const BotsList = () => {

	const Bots = useSelector((state) => state);
	console.log(Bots);

	return (
		<div>
			<h4>Select the best Algo Suited for your need</h4>
			<BotsComponent />
		</div>
	);
};

export default BotsList;
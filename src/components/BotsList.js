import React from "react";
import { useSelector } from "react-redux";
import BotsComponent from "./BotsComponent";

const BotsList = () => {

	const Bots = useSelector((state) => state);
	console.log(Bots);

	return (
		<div className="ui grid container">
			<BotsComponent />
		</div>
	);
};

export default BotsList;
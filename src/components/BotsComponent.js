import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const BotsComponent = () => {

	const bots = useSelector((state) => state.allBots.bots);
	console.log(bots);

	const renderBots = bots.map((item) => {
		const { id, bot, index_value, cagr} = item;

		return (
			<div key={id}>
				<div>
					<div>{bot}</div>
					<div>
						Index Value
						<div>{index_value}</div>
					</div>
					<div>
						CAGR
						<div>{cagr}</div>
					</div>
					<button type="button">
						<Link to={`/bots-details/${id}`}>
							View Algo
						</Link>
					</button>
					<button type="button">
						<Link to={`/bot-details/${id}`}>
							Buy
						</Link>
					</button>
				</div>
			</div>
		);
	});

	return <>{renderBots}</>;
};

export default BotsComponent;
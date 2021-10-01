import React from "react";
import { BotsReducer, SelectedBotsReducer } from "../redux/actions/BotAction";
import { useSelector } from "react-redux";

const BotsDetails = (props) => {
	console.log(props);

	const botItems = useSelector((state) => state.bots.botItems);

	const renderBotItems = botItems.map((item) => {
		const { id, bot, description, index_value, cagr} = item;

		return (
			<div key={id}>
			<h1>Hello</h1>
				<div>
					<div>
						{bot}
						<div>
							{description}
						</div>
						<div>
							<button type="button">MODERATE RISK</button>
							<button type="button">BUY</button>
						</div>
					</div>
					<div>
						Index Value
						<div>{index_value}</div>
					</div>
					<div>
						CAGR
						<div>{cagr}</div>
					</div>
				</div>
			</div>
		)
	});

	return <>{renderBotItems}</>;
};

export default BotsDetails;
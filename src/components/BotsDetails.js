import React from "react";
import { BotsReducer, SelectedBotsReducer } from "../redux/actions/BotAction";
import { useSelector } from "react-redux";

const BotsDetails = (props) => {

	const {match} = props 
    const {params} = match
    let {id} = params

    id = parseInt(id);

	const botItems = useSelector((state) => state.allBots.bots);


	let renderBotItems = botItems.filter((item) => id === item.id )
		
	console.log(renderBotItems);

	renderBotItems = renderBotItems[0];

		return (
			<div key={id}>
				<div>
					<div>
						{renderBotItems.bot}
						<div>
							{renderBotItems.description}
						</div>
						<div>
							<button type="button">MODERATE RISK</button>
							<button type="button">BUY</button>
						</div>
					</div>
					<div>
						Index Value
						<div>{renderBotItems['index_value']}</div>
					</div>
					<div>
						CAGR
						<div>{renderBotItems.cagr}</div>
					</div>
				</div>
			</div>
	)
}


export default BotsDetails;
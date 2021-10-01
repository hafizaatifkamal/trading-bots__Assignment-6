import { ActionTypes } from "../contents/ActionTypes";

export const setBots = (bots) => {
	return {
		type: ActionTypes.SET_BOTS,
		payload: bots
	};
};

export const selectBots = (botItem) => {
	return {
		type: ActionTypes.SELECT_BOTS,
		payload: botItem
	};
};

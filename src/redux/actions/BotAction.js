import { ActionTypes } from "../contents/ActionTypes";

export const setBots = (bots) => {
	return {
		type: ActionTypes.SET_BOTS,
		payload: bots
	};
};

export const selectBots = (bot) => {
	return {
		type: ActionTypes.SETECT_BOTS,
		payload: bot
	};
};

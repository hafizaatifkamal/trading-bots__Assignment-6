import { combineReducers } from "redux";
import { BotsReducer, SelectedBotsReducer } from "./BotsReducer";

const reducers = combineReducers({
	allBots: BotsReducer,
	bots: SelectedBotsReducer
});

export default reducers;
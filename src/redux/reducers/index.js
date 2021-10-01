import { combineReducers } from "redux";
import { BotsReducer, SelectedBotsReducer } from "./BotsReducer";

const reducers = combineReducers({
	allBots: BotsReducer,
	Bots: SelectedBotsReducer
});


export default reducers;
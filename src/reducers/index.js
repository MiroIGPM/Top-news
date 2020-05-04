import { combineReducers } from "redux";
import newsReducers from "./newsReducer";

export default combineReducers({
    news: newsReducers,
});

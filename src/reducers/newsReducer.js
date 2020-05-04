import {
    TOGGLE_SIDEDRAWER,
    GET_SEARCH_KEYWORD,
    SET_ACTIVE_COUNTRY,
    FETCH_SUCCES_TOP_NEWS,
    TOGGLE_LOADING,
    FETCH_SUCCES_SEARCHED_NEWS,
    RESET_TOP_NEWS,
    FETCH_CATEGORIES,
    SET_ACTIVE_CATEGORY,
    RESET_CATEGORY,
    TOGGLE_BUTTON_ACTIVE,
    HANDLE_ERROR,
} from "../actions/types";

const initalState = {
    topNews: [],
    show: false,
    searchKeyword: "",
    activeCountry: "GB",
    countryName: "Great Britain",
    loading: false,
    categories: [
        "entertainment",
        "general",
        "health",
        "science",
        "sport",
        "technology",
    ],
    activeCategory: "",
    buttonActive: false,
    error: false,
};

export default function (state = initalState, actions) {
    switch (actions.type) {
        case FETCH_SUCCES_TOP_NEWS:
            return {
                ...state,
                topNews: actions.payload,
                loading: false,
            };
        case FETCH_SUCCES_SEARCHED_NEWS:
            return {
                ...state,
                topNews: actions.payload,
                loading: false,
            };
        case FETCH_CATEGORIES:
            return {
                ...state,
                topNews: state.topNews.concat(actions.payload),
                loading: false,
            };
        case HANDLE_ERROR:
            return {
                ...state,
                error: actions.payload,
            };
        case RESET_TOP_NEWS:
            return {
                ...state,
                topNews: actions.payload,
                loading: false,
            };
        case SET_ACTIVE_COUNTRY:
            return {
                ...state,
                activeCountry: actions.payload.country,
                countryName: actions.payload.countryName,
            };
        case TOGGLE_SIDEDRAWER:
            return {
                ...state,
                show: actions.payload,
            };
        case GET_SEARCH_KEYWORD: {
            return {
                ...state,
                searchKeyword: actions.payload,
            };
        }
        case TOGGLE_LOADING: {
            return {
                ...state,
                loading: actions.payload,
            };
        }
        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: actions.payload,
            };
        case RESET_CATEGORY:
            return {
                ...state,
                activeCategory: actions.payload,
            };
        case TOGGLE_BUTTON_ACTIVE:
            return {
                ...state,
                buttonActive: actions.payload,
            };
        default:
            return state;
    }
}

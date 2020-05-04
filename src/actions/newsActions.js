import {
    TOGGLE_SIDEDRAWER,
    GET_SEARCH_KEYWORD,
    SET_ACTIVE_COUNTRY,
    FETCH_SUCCES_TOP_NEWS,
    RESET_TOP_NEWS,
    TOGGLE_LOADING,
    FETCH_CATEGORIES,
    SET_ACTIVE_CATEGORY,
    RESET_CATEGORY,
    TOGGLE_BUTTON_ACTIVE,
    HANDLE_ERROR,
} from "./types";

//Import utils
import axiosInstance from "../axios";
import { v4 as uuidv4 } from "uuid";

export const fetchTopNews = (country, loading) => (dispatch) => {
    dispatch(toggleLoading(loading));
    axiosInstance
        .get(`?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            const posts = res.data.articles;
            const updatePost = posts.map((posts) => {
                return {
                    ...posts,
                    id: uuidv4(),
                };
            });
            dispatch(fetchSuccesTopNews(updatePost));
        })
        .catch((err) => {
            dispatch(handleError());
            console.log(err);
        });
};

export const fetchSearchedNews = (country, keyword, loading) => (dispatch) => {
    if (keyword.length < 0) return;
    dispatch(toggleLoading(loading));
    axiosInstance
        .get(
            `?country=${country}&q=${keyword}&apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
            const posts = res.data.articles;
            const updatePost = posts.map((posts) => {
                return {
                    ...posts,
                    id: uuidv4(),
                };
            });
            dispatch(fetchSuccesTopNews(updatePost));
        })
        .catch((err) => {
            console.log(err);
            dispatch(handleError());
        });
};

export const fetchCategories = (categories, country, loading) => (dispatch) => {
    categories.forEach((category) => {
        dispatch(toggleLoading(loading));
        axiosInstance
            .get(
                `?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`
            )
            .then((res) => {
                const posts = res.data.articles;
                const updatedResponse = posts.map((posts) => {
                    return {
                        ...posts,
                        id: uuidv4(),
                        category: category,
                    };
                });

                dispatch(fetchSuccesCategories(updatedResponse));
            })
            .catch((err) => {
                console.log(err);
                dispatch(handleError());
            });
    });
};

export const fetchSingleCategory = (country, category) => (dispatch) => {
    axiosInstance
        .get(
            `?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
            const posts = res.data.articles;
            const updatePost = posts.map((posts) => {
                return {
                    ...posts,
                    id: uuidv4(),
                };
            });
            dispatch(fetchSuccesTopNews(updatePost));
        })
        .catch((err) => {
            console.log(err);
            dispatch(handleError());
        });
};

export const resetTopNews = () => (dispatch) => {
    dispatch({
        type: RESET_TOP_NEWS,
        payload: [],
    });
};

const fetchSuccesTopNews = (items) => (dispatch) => {
    dispatch({
        type: FETCH_SUCCES_TOP_NEWS,
        payload: [...items],
    });
};

const fetchSuccesCategories = (item) => ({
    type: FETCH_CATEGORIES,
    payload: [...item],
});

const handleError = () => ({
    type: HANDLE_ERROR,
    payload: true,
});

const toggleLoading = (loading) => (dispatch) => {
    dispatch({
        type: TOGGLE_LOADING,
        payload: !loading,
    });
};

export const toggleSidedrawer = (show) => (dispatch) => {
    dispatch({
        type: TOGGLE_SIDEDRAWER,
        payload: !show,
    });
};

export const setActiveCountry = (country) => (dispatch) => {
    dispatch({
        type: SET_ACTIVE_COUNTRY,
        payload: country,
    });
};

export const getSearchKeyword = (e) => (dispatch) => {
    dispatch({
        type: GET_SEARCH_KEYWORD,
        payload: e.target.value,
    });
};

export const setActiveCategory = (e) => (dispatch) => {
    dispatch({
        type: SET_ACTIVE_CATEGORY,
        payload: e.target.textContent,
    });
};

export const resetCategory = () => (dispatch) => {
    dispatch({
        type: RESET_CATEGORY,
        payload: "",
    });
};

export const toggleButtonActive = (active) => (dispatch) => {
    dispatch({
        type: TOGGLE_BUTTON_ACTIVE,
        payload: active,
    });
};

import { createStore } from "redux";

const initialState = {
    loading: false,
    users: [],
    error: ``,
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUESTS";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

const fetchuserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    };
};

const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user,
    };
};

const fetchUserError = (error) => {
    return {
        type: FETCH_USER_ERROR,
        payload: error,
    };
};

const reducer = (state = initialState, actioin) => {
    switch (actioin.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USER_SUCCESS:
            return {
                loading: true,
                users : actioin.payload,
                error : ''
            };
        case FETCH_USER_ERROR:
            return {
                loading: false,
                users: [],
                error:  actioin.payload
            };
    }
};

const store = createStore(reducer)

import axios from 'axios';
import { MOVIES_DETAIL, MOVIES_DETAIL_FAILD, MOVIES_DETAIL_SUCCESS, MOVIE_DETAIL, MOVIE_DETAIL_FAILD, MOVIE_DETAIL_SUCCESS, ADD_NEW, ADD_NEW_SUCCESS, ADD_NEW_FAILD, DELETE, DELETE_SUCCESS, DELETE_FAILD, UPDATE, UPDATE_SUCCESS, UPDATE_FAILD } from "../constants";

const API_URL = "http://localhost:8070";

const authorization = localStorage.getItem("Authorization");
/**
 * 
 * @param data 
 * @returns 
 */
export const getAll = () => {
    return async (dispatch: any) => {
        dispatch({ type: MOVIES_DETAIL });
        await axios({
            method: "GET",
            url: API_URL + "/movie/getall",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": JSON.parse(authorization || '')
            }
        }
        )
            .then(response => {
                dispatch({ type: MOVIES_DETAIL_SUCCESS, data: response.data });
            }).catch((err) => {
                console.log('getAll Err- ', err);
                dispatch({ type: MOVIES_DETAIL_FAILD });
            })
    };
}
/**
 * 
 * @param data 
 * @returns 
 */
export const add = (data: any) => {

    return async (dispatch: any) => {
        dispatch({ type: ADD_NEW });
        await axios({
            method: "POST",
            url: API_URL + "/movie/add",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": JSON.parse(authorization || '')
            },
            data
        }
        )
            .then(response => {
                dispatch({ type: ADD_NEW_SUCCESS, data: response.data });
                window.location.href = '/app/home';
            }).catch((err) => {
                console.log('add Err- ', err);
                dispatch({ type: ADD_NEW_FAILD });
            })
    };
}
/**
 * 
 * @param data 
 * @returns 
 */
export const searchOne = (data: any) => {

    return async (dispatch: any) => {
        dispatch({ type: MOVIES_DETAIL });
        await axios({
            method: "POST",
            url: API_URL + `/movie/search/${data}`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": JSON.parse(authorization || '')
            }
        }
        )
            .then(response => {
                dispatch({ type: MOVIES_DETAIL_SUCCESS, data: response.data });
            }).catch((err) => {
                console.log('search Err- ', err);
                dispatch({ type: MOVIES_DETAIL_FAILD });
            })
    };
}
/**
 * 
 * @param data 
 * @returns 
 */
export const get = (_id: any) => {
    return async (dispatch: any) => {
        dispatch({ type: MOVIE_DETAIL });
        await axios({
            method: "GET",
            url: API_URL + `/movie/get/${_id}`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": JSON.parse(authorization || '')
            },
        }
        )
            .then(response => {
                dispatch({ type: MOVIE_DETAIL_SUCCESS, data: response.data });
            }).catch((err) => {
                console.log('get Err- ', err);
                dispatch({ type: MOVIE_DETAIL_FAILD });
            })
    };
}
/**
 * 
 * @param data 
 * @returns 
 */
export const deleteOne = (_id: any) => {
    return async (dispatch: any) => {
        dispatch({ type: DELETE });
        await axios({
            method: "DELETE",
            url: API_URL + `/movie/delete/${_id}`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": JSON.parse(authorization || '')
            },
        }
        )
            .then(response => {
                dispatch({ type: DELETE_SUCCESS, data: response.data });
                window.location.href = '/app/home';
            }).catch((err) => {
                console.log('delete Err- ', err);
                dispatch({ type: DELETE_FAILD });
            })
    };
}
/**
 * 
 * @param _id 
 * @param data 
 * @returns 
 */
export const update = (_id: any, data: any) => {
    return async (dispatch: any) => {
        dispatch({ type: UPDATE });
        await axios({
            method: "PUT",
            url: API_URL + `/movie/update/${_id}`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": JSON.parse(authorization || '')
            },
            data
        }
        )
            .then(response => {
                dispatch({ type: UPDATE_SUCCESS, data: response.data });
                window.location.href = '/app/home';
            }).catch((err) => {
                console.log('delete Err- ', err);
                dispatch({ type: UPDATE_FAILD });
            })
    };
}

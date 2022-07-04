import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    GET_USER_BYID_REQUEST,
    GET_USER_BYID_SUCCESS,
    GET_USER_BYID_FAILURE,
    UPDATE_USER_BYID_REQUEST,
    UPDATE_USER_BYID_SUCCESS,
    UPDATE_USER_BYID_FAILURE,
    DELETE_USER_BYID_REQUEST,
    DELETE_USER_BYID_SUCCESS,
    DELETE_USER_BYID_FAILURE,
  } from "./userActions";
  import api from "../services/api";

  
  export function createUser(data, history) {
    return (dispatch) => {
      dispatch({ type: CREATE_USER_REQUEST });
      api
        .post(`/v1/users`, data)
        .then(function (res) {
          console.log("res=>", res.data);
          setTimeout(() => {
            dispatch({
              type: CREATE_USER_SUCCESS,
              payload: res.data,
            });
         
          }, 1000);
        })
        .catch(function (error) {
          const { response } = error;
          console.log("err", response);
          if (response !== undefined) {
            dispatch({
              type: CREATE_USER_FAILURE,
              payload: response.data,
            });
            alert(response.data?.message);
          }
        });
    };
  }
  
  export function getUsers() {
    return (dispatch) => {
      dispatch({ type: GET_USER_REQUEST });
      api
        .get(`/v1/users`)
        .then(function (res) {
          console.log("res =>", res.data);
          dispatch({
            type: GET_USER_SUCCESS,
            payload: res.data,
          });
        })
        .catch(function (error) {
          const { response } = error;
          console.log("err", response);
          if (response !== undefined) {
            dispatch({
              type: GET_USER_FAILURE,
              payload: response?.data,
            });
          }
        });
    };
  }
  
  export function getUserById(id) {
    return (dispatch) => {
      dispatch({ type: GET_USER_BYID_REQUEST });
      api
        .get(`/v1/users/${id}`)
        .then(function (res) {
          console.log("res =>", res.data);
          dispatch({
            type: GET_USER_BYID_SUCCESS,
            payload: res.data,
          });
        })
        .catch(function (error) {
          const { response } = error;
          console.log("err", response);
          if (response !== undefined) {
            dispatch({
              type: GET_USER_BYID_FAILURE,
              payload: response.data,
            });
          }
        });
    };
  }
  
  export function updateUserById(id, data, history) {
    return (dispatch) => {
      dispatch({ type: UPDATE_USER_BYID_REQUEST });
      api
        .put(`/v1/users/${id}`, data)
        .then(function (res) {
          console.log("res=>", res.data);
          setTimeout(() => {
            dispatch({
              type: UPDATE_USER_BYID_SUCCESS,
              payload: res.data,
            });
            history.push("/");
          }, 1000);
        })
        .catch(function (error) {
          const { response } = error;
          console.log("err", response);
          if (response !== undefined) {
            dispatch({
              type: UPDATE_USER_BYID_FAILURE,
              payload: response.data,
            });
            alert(response.data?.message);
          }
        });
    };
  }
  
  export function deleteUserById(id) {
    return (dispatch) => {
      dispatch({ type: DELETE_USER_BYID_REQUEST });
      api
        .delete(`/v1/users/${id}`)
        .then(function (res) {
          console.log("res =>", res.data);
          dispatch({
            type: DELETE_USER_BYID_SUCCESS,
            payload: id,
          });
        })
        .catch(function (error) {
          const { response } = error;
          console.log("err", response);
          if (response !== undefined) {
            dispatch({
              type: DELETE_USER_BYID_FAILURE,
              payload: response.data,
            });
            alert(response.data?.message);
          }
        });
    };
  }
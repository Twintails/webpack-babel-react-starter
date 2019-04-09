// Action Creator: ƒn which returns Object {type: ACTION_CONST, payload }

import {
  ADD_ITEM_REQUEST, ADD_ITEM_RESOLVE,
  REMOVE_ITEM_REQUEST, REMOVE_ITEM_RESOLVE
} from "Constants/action-types"

import { waitASecond } from "App/utils";

export const addItem = payload => dispatch => {
  dispatch({ type: ADD_ITEM_REQUEST });
  return waitASecond(payload).then(response => dispatch({ type: ADD_ITEM_RESOLVE, payload: response }));
};

export const removeItem = payload => dispatch => {
  dispatch({ type: REMOVE_ITEM_REQUEST, payload });
    return waitASecond(payload).then(response => dispatch({ type: REMOVE_ITEM_RESOLVE, payload: response }));
};

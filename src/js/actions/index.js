// Action Creator: ƒn which returns Object {type: ACTION_CONST, payload }

import {
  ADD_ITEM, REMOVE_ITEM,
  ADD_ITEM_REQUEST, ADD_ITEM_RESOLVE,
  REMOVE_ITEM_REQUEST, REMOVE_ITEM_RESOLVE
} from "Constants/action-types"

export function addItem(payload) {
  return { type: ADD_ITEM, payload }
}

export function removeItem(payload) {
  return { type: REMOVE_ITEM, payload }
}

export const addItemRequest = () => ({ type: ADD_ITEM_REQUEST });
export const addItemResolve = payload => ({ type: ADD_ITEM_RESOLVE, payload });

export const removeItemRequest = payload => ({ type: REMOVE_ITEM_REQUEST, payload });
export const removeItemResolve = payload => ({ type: REMOVE_ITEM_RESOLVE, payload });

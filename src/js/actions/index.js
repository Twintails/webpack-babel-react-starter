// Action Creator: ƒn which returns Object {type: ACTION_CONST, payload }

import { ADD_ITEM } from "Constants/action-types"

export function addItem(payload) {
  return { type: ADD_ITEM, payload }
};

import uuidv1 from "uuid"

import {
    ADD_ITEM, REMOVE_ITEM,
    ADD_ITEM_REQUEST, ADD_ITEM_RESOLVE,
    REMOVE_ITEM_REQUEST, REMOVE_ITEM_RESOLVE,
} from '../constants/action-types'

const initialState = {
  items: [
    { id: uuidv1(), title: "Moo" },
    { id: uuidv1(), title: "Baa" },
    { id: uuidv1(), title: "Laa" },
    { id: uuidv1(), title: "Quack" },
    { id: uuidv1(), title: "squak" },
  ],
  loading: false,
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ITEM) {
      return { ...state,  items: state.items.concat(action.payload) }
    }
    if (action.type === REMOVE_ITEM) {
      return { ...state, items: state.items.filter(item => item.id !== action.payload) }
    }
    if (action.type === ADD_ITEM_REQUEST) {
        return { ...state, loading: true };
    }
    if (action.type === REMOVE_ITEM_REQUEST) {
        return { ...state, items: state.items.map(item => ({ id: item.id, title: item.id === action.payload ? 'Deleting...' : item.title })), loading: true };
    }
    if (action.type === ADD_ITEM_RESOLVE) {
        return { ...state, items: state.items.concat(action.payload), loading: false };
    }
    if (action.type === REMOVE_ITEM_RESOLVE) {
        return { ...state, items: state.items.filter(item => item.id !== action.payload), loading: false };
    }
    return state;
}

export default rootReducer;

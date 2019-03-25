import uuidv1 from "uuid"

import { ADD_ITEM, REMOVE_ITEM } from '../constants/action-types'

const initialState = {
  items: [
    { id: uuidv1(), title: "Moo" },
    { id: uuidv1(), title: "Baa" },
    { id: uuidv1(), title: "Laa" },
    { id: uuidv1(), title: "Quack" },
    { id: uuidv1(), title: "squak" },
  ]
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ITEM ){
      return { ...state,  items: state.items.concat(action.payload) }
    }
    if (action.type === REMOVE_ITEM ){
      return { ...state, items: state.items.filter(item => item.id !== action.payload) }
    }
    return state;
};
export default rootReducer;

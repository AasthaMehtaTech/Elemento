import {
  GET_ELEMENTS,
  SEARCH_ELEMENT,
  CLEAR_ELEMENTS,
  SET_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ELEMENTS:
      return {
        ...state,
        elements: action.payload,
        loading: false,
      };
    case SEARCH_ELEMENT:
      return {
        ...state,
        filtered: state.elements.filter((element) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return element.name.match(regex);
        }),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};


import React, { useReducer } from "react";
import axios from "axios";

import ElementContext from "./elementContext";
import ElementReducer from "./elementReducer";

import {
  GET_ELEMENTS,
  ELEMENTS_ERROR,
  SEARCH_ELEMENT,
  CLEAR_ELEMENTS,
  SET_LOADING,
} from "../types";

const ElementState = (props) => {
  const initialState = {
    elements: null,
    loading: false,
    element: null,
    filtered: null,
  };


const [state, dispatch] = useReducer(ElementReducer, initialState);

// Get all the elements
const getElements = async () => {
  try {

    const data = await axios.get("/api/elements");

    dispatch({ type: GET_ELEMENTS, payload: data.data.elements });
  } catch (e) {
    console.error(e);
  }
};

// Search for elements
const searchElements = (text) => {

  try {

    console.log(state.elements);
    dispatch({ type: SEARCH_ELEMENT, payload: text });
    console.log(state.filtered)
  } catch (e) {
    console.error(e);
  }
}
// Clear elements

// Set Loading
const setLoading = () => dispatch({ type: SET_LOADING });

return (
  <ElementContext.Provider
    value={{
      elements: state.elements,
      element: state.element,
      loading: state.loading,
      filtered: state.filtered,
      getElements,
      searchElements
    }}
  >
    {props.children}
  </ElementContext.Provider>
);
}

export default ElementState;

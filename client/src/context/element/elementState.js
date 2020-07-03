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
  };


const [state, dispatch] = useReducer(ElementReducer, initialState);

// Get all the elements
const getElements = async () => {
  try {
    console.log('getElements call')
    const data = await axios.get("/api/elements");
    console.log(data.data.elements);
    dispatch({ type: GET_ELEMENTS, payload: data.data.elements });
  } catch (e) {
    console.error(e);
  }
};
// Search for elements

// Clear elements

// Set Loading
const setLoading = () => dispatch({ type: SET_LOADING });

return (
  <ElementContext.Provider
    value={{
      elements: state.elements,
      element: state.element,
      loading: state.loading,
      getElements,
    }}
  >
    {props.children}
  </ElementContext.Provider>
);
}

export default ElementState;

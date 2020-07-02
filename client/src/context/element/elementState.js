import React, { useReducer } from "react";
import axios from "axios";

import ElementContext from "./elementContext";
import ElementReducer from "./elementReducer";

import {
  GET_ELEMENTS,
  SEARCH_ELEMENT,
  CLEAR_ELEMENTS,
  SET_LOADING,
} from "../types";

const ElementState = (props) => {
    const initialState = {
        elements: null,
        loading: false,
        element: null
    }
}

const [state, dispatch] = useReducer(ElementReducer, initialState);

// Get all the elements

// Search for elements

// Clear elements

// Set Loading

return (
    <ElementContext.Provider value={{
        elements: state.elements,
        element: state.element,
        loading: state.loading
    }}
    >
        {props.children}
    </ElementContext.Provider>
)

export default ElementState;

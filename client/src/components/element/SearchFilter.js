import React, { useContext, useRef, useEffect } from "react";
import ElementContext from "../../context/element/elementContext";
import {FaSearch} from "react-icons/fa";
const SearchFilter = () => {
  const elementContext = useContext(ElementContext);
  const text = useRef("");

  const { filtered, searchElements } = elementContext;

  useEffect(() => {
    if (filtered === null) {
      text.current = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      searchElements(e.target.value);
    }
  };
  return (
    <form className="customSearch">
      <input type={text} className="input" type='text' placeholder="Search" onChange={onChange}/>
      <div className="searchbtn">
      <FaSearch className="icon"> </FaSearch>
      </div>
    </form>
  );
};

export default SearchFilter;
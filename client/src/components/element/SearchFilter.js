import React, { useContext, useRef, useEffect } from "react";
import ElementContext from "../../context/element/elementContext";

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
    <form style={customSearch}>
      <input type={text} type='text' placeholder="Search" onChange={onChange} style={inputStyle }/>
    </form>
  );
};
const inputStyle = {
  height:'50px',
  width:'50%',
  textAlign:'center',
  borderRadius:'20px',
  boxShadow:'3px 3px #888888',
  fontSize:'20px'
  
}
const customSearch = {
  textAlign: 'center',
  margin:"12px",
  padding:"10px",

};
export default SearchFilter;
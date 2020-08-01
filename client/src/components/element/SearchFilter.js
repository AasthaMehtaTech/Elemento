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
// const inputStyle = {
//   height:'50px',
//   width:'50%',
//   border: "none",
//   textAlign:'center',
//   borderRadius:'20px',
//   outline:'none'  ,
//   fontSize:'20px'
  
// }
// const customSearch = {
//   textAlign: 'center',
//   margin:"12px",
//   padding:"10px",
//   color: 'orange',
//   borderRadius:'20px',
// };
export default SearchFilter;
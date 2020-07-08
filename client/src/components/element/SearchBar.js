import React, { useState, useContext, useEffect } from 'react';


import ElementContext from '../../context/element/elementContext';

const SearchBar = () => {
    
    const elementContext = useContext(ElementContext);

    const{ searchElements, filtered } = elementContext;

    const [text, setText] = useState('');


    const onChange = (e) => {

       
        setText(e.target.value);
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        searchElements(text);
        setText('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
            <input type={text} type='text' onChange={onChange} />
            <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar

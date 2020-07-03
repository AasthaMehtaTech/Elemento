import React, { useEffect, useContext, Fragment } from 'react';

import ElementItem from './ElementItem';

import ElementContext from '../../context/element/elementContext';

const Element = () => {

    const elementContext = useContext(ElementContext);
    const { getElements, elements, loading } = elementContext;
    
    useEffect(() => {
    getElements();
    }, [])

    if(elements === null){
        return <h1> loading </h1>
    }
    return (
        <Fragment>
            
            {elements.map((element) => <ElementItem name={element.name} />)}

        </Fragment>
    )
}

export default Element

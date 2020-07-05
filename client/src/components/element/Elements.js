import React, { useEffect, useContext, Fragment } from 'react';

import ElementItem from './ElementItem';
import Container from '@material-ui/core/Container';


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
            <Container maxWidth="sm">
            {elements.map((element) => <ElementItem name={element.name} img={element.screenshot.data} key={element._id} />)}
            </Container>
        </Fragment>
    )
}

export default Element

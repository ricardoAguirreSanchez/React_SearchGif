import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoriAdd = ({ add }) => {

    const [inputValue, setInputValue] = useState('Hola mundo')

    const handlerInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handlerSubmit = (e) => {
        //se usa cuando se esta trabajando con submit de forms para prevenir la recarga
        //de la pagina al hacer un ENTER dentro de un FORM, esto es comportamiento de paginas viejas
        e.preventDefault(); 
        if (inputValue.trim().length > 2 ){
            add((catagories) => { return [inputValue, ...catagories]});  
            setInputValue('Hola mundo');
        }
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input 
                type="text"
                value={inputValue} 
                onChange={handlerInputChange}>
            </input>
        </form>
  )
}

CategoriAdd.propTypes = {
    add: PropTypes.func.isRequired
}
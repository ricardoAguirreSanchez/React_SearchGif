import React, { useState } from 'react';
import { CategoriAdd } from './components/CategoriAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch'])

    // const handlerAdd = () => {
    //     const value = "aaa";
    //     return setCategories([...categories, value ])
    // }
 
    return (
        <>
            <h2>GifExpert</h2>
            <CategoriAdd add={setCategories}></CategoriAdd>
            <hr></hr>
            
            <ol>
                {
                    categories.map((elem) => {
                        return <GifGrid key={elem} category={elem}></GifGrid>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
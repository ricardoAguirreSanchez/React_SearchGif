import React, { useState } from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    return (
        <> 
            {/* { loading ? 'Cargando...' : 'Data lista!'} */}
            { loading && 'Cargando...'}
            <h2>{category}</h2>
            <div className='card-grid'>
                {
                    images.map((img) => {
                        return <GifGridItem key={img.id} {...img}></GifGridItem>
                    })
                }
            </div>
        </>
    )
}

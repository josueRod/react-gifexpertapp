import React from 'react';
import { useFecthGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    const {data:images, loading} = useFecthGifs( category );
    
    return (
        <>
            {<h3 className="animate_animated animate__fadeIn">{category}</h3>}
           
            {loading && <p className="animate_animated flash">Loading</p>}

            <div className="card-grid">
                
                {
                    images.map( img => (
                    <GifGridItem 
                            key = {img.id}
                            { ...img }/>
                    ))
                }
            </div>
        </>
    )
}

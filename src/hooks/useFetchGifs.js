import React, {useState, useEffect} from 'react'
import getGifs from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        getGifs(category).then((result) => {
          setState({
            data: result,
            loading: false
          })
        }).catch((err) => {
            console.error(err)
        });
   }, [category])
  return state; //{data:[],loading:true}
}

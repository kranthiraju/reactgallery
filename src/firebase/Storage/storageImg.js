import React, { useEffect, useState } from 'react';
import { storage } from '../../firebase';

const StorageImg=()=>{
    const [cards,setCards]= useState([]);


    useEffect(()=>{
        const fetchcards= async()=>{
            const response= await storage.ref(`/smartphone`).listAll();
            const data= response.items.map(item=>item.getDownloadURL());
            return Promise.all(data);
        }
        const cardHandle=async ()=>{
            const a=await fetchcards();
            setCards(a);
        }

        cardHandle();
    },[]);

    return {cards};
}

export default StorageImg;
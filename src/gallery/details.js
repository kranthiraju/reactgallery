import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import {BounceLoader} from 'react-spinners'
import './details.css';

const Details=({id})=>{
    const [doc,setDoc]=useState([]);

    const close_det=(e)=>{
        e.preventDefault();
        document.querySelector('.detail_back').style.display="none";
    }

    useEffect( async()=>{
        await firestore.collection('info').doc(id).get().then(
            z=>{
                setDoc(z.data());
                document.querySelector('.detail_back').style.display="flex";
            }
        );    
    },[id]);
    return (
        <div className="detail_back">
            <div className="detail">
                <button onClick={close_det}>X</button>
                <h1>{doc.head}</h1>
                {doc.url ? (<img src={doc.url}></img>) :
                (<BounceLoader size={40} color="blue"/>)}
                <p>{doc.des}</p>
            </div>
        </div>
    )
}

export default Details;
import React from 'react';
import './fav.css';
import Firestore from '../firebase/FireStore/firestore';

const Fav=()=>{
    const {docs}=Firestore('info');

    const imgon=()=>{
        if (document.querySelector('.favlist').style.display==="none"){
            document.querySelector('.favlist').style.display="block";
        }
        else
        {
            document.querySelector('.favlist').style.display="none";
        }
    }

    return (
        <div className="fav">
            <img src="icons/star.png" alt="fav" onClick={imgon}/>
            <div className="favlist">
                {docs.map(doc =>{
                        if (doc.fav===1){
                            return (<li key={'k'+doc.id}>{doc.head}</li>)
                        }
                    }
                )}; 
            </div>
        </div>
    )
}

export default Fav;
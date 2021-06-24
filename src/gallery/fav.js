import React from 'react';
import './fav.css';
import Firestore from '../firebase/FireStore/firestore';

const Fav=()=>{
    const {docs}=Firestore('info');
    const items=[];

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
                {docs.forEach(doc =>{
                        if (doc.fav===1){
                            items.push(doc.head);
                        }
                    }
                )
                }
                <p key={'k'+items}>{items}</p>
            </div>
        </div>
    )
}

export default Fav;
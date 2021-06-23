import React from 'react';
import './fav.css';
import Firestore from '../firebase/FireStore/firestore';

const Fav=()=>{
    const {docs}=Firestore('info');

    const imgon=()=>{
        if (document.querySelector('.favlist').style.display=="none"){
            document.querySelector('.favlist').style.display="block";
        }
        else
        {
            document.querySelector('.favlist').style.display="none";
        }
    }

    return (
        <div className="fav">
            <img src="https://img-premium.flaticon.com/png/512/4618/premium/4618547.png?token=exp=1624430204~hmac=6dcd300c196296d5fe3d7aed9939915d" alt="fav" onClick={imgon}/>
            <div className="favlist">
                {docs.map(item=>
                    {
                        if (item.fav==1){
                            return (<li>{item.head}</li>)
                        }
                        else {
                            return
                        }
                    }
                )}
            </div>
        </div>
    )
}

export default Fav;
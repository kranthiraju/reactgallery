import React ,{useEffect, useRef, useState} from 'react';
import Firestore from '../firebase/FireStore/firestore';
import { firestore } from '../firebase';
import Details from './details';
import {BounceLoader} from 'react-spinners'
import './gallery.css';

const Gallery =()=>{
    const {docs,setDocs}=Firestore('info');
    const favl=firestore.collection('info');

    const [imgd,setImgd]=useState('');
    const [del,setDel]=useState([]);

    const srhname= useRef();

    const addFav=(id)=>{
        favl.doc(id).update({fav:1});
    };

    const removeFav=(id)=>{
        favl.doc(id).update({fav:0});
    }

    useEffect(() => {
        docs.forEach(item=>{
            if (item.fav===1){
                document.getElementById(item.id).style.color="var(--primary)";
                document.getElementById(item.id).style.fontWeight="bold";
            }
            else{
                document.getElementById(item.id).style.color="white";
                document.getElementById(item.id).style.fontWeight="lighter";
            }
        });
    }, [docs]);


    const favclick=(e)=>{
        if (e.target.style.color ==="white"){
            e.target.style.color="var(--primary)";
            addFav(e.target.id);
        }
        else{
            e.target.style.color="white";
            removeFav(e.target.id);
        }
        e.preventDefault();
    }

    const deleteHandle=(e)=>{
        const id=e.target.id;
        e.preventDefault();

        const cfm=prompt('Enter your Heading To delete :');
        favl.doc(id.substring(1)).get().then(
            z=>{
                setDel(z.data());
            }
        )
        if (cfm===(del.head).toLowerCase()){
            favl.doc(id.substring(1)).delete();
        }
        else{
            alert('Wrong');
        }
    }

    const srh_submit=(e)=>{
        e.preventDefault();
        const x=srhname.current.value.toLowerCase();
        if (!x){
            setDocs(docs);
            alert('Enter any');
            return;
        }
        const list=[];
        docs.forEach(item=>{
            if (item.head.toLowerCase().indexOf(x) <= -1) return;
            list.push(item);
        });
        setDocs(list);
    }

    const imgHandle=(e)=>{
        const imgid=e.target.id;
        setImgd(imgid.substring(1));
    }
    return (
        <>
        {imgd!=="" ? (<Details id={imgd}/>): <></>}
        <div className="grid">
            <div className="search">
                <input type="text" placeholder="Type to search" ref={srhname}></input>
                <button onClick={srh_submit}><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTk1LjA0MjMyLDEwNi41NDgxOGwxNy43NzY2OSwxNy43NzY2OWMtMi43MTU1LDUuMTc5MDQgLTIuOTk1NDQsMTAuMzMwMDggLTAuMTM5OTgsMTMuMTg1NTVsMzIuNDQ1OTcsMzIuNDQ1OTdjNC4wODcyNCw0LjA4NzI0IDEyLjk4OTU4LDEuODQ3NjUgMTkuODIwMzEsLTUuMDExMDdjNi44NTg3MiwtNi44NTg3MiA5LjA5ODMxLC0xNS43MzMwNyA1LjAxMTA3LC0xOS44MjAzMWwtMzIuNDE3OTcsLTMyLjQ0NTk3Yy0yLjg4MzQ2LC0yLjg1NTQ3IC04LjAzNDUsLTIuNTc1NTIgLTEzLjIxMzU0LDAuMTExOThsLTE3Ljc3NjY5LC0xNy43NDg2OXpNNjAuOTE2NjcsMGMtMzMuNjQ5NzQsMCAtNjAuOTE2NjcsMjcuMjY2OTMgLTYwLjkxNjY3LDYwLjkxNjY3YzAsMzMuNjQ5NzQgMjcuMjY2OTMsNjAuOTE2NjcgNjAuOTE2NjcsNjAuOTE2NjdjMzMuNjQ5NzQsMCA2MC45MTY2NywtMjcuMjY2OTIgNjAuOTE2NjcsLTYwLjkxNjY3YzAsLTMzLjY0OTc0IC0yNy4yNjY5MiwtNjAuOTE2NjcgLTYwLjkxNjY3LC02MC45MTY2N3pNNjAuOTE2NjcsMTA3LjVjLTI1LjcyNzIyLDAgLTQ2LjU4MzMzLC0yMC44NTYxMiAtNDYuNTgzMzMsLTQ2LjU4MzMzYzAsLTI1LjcyNzIyIDIwLjg1NjEyLC00Ni41ODMzMyA0Ni41ODMzMywtNDYuNTgzMzNjMjUuNzI3MjIsMCA0Ni41ODMzMywyMC44NTYxMiA0Ni41ODMzMyw0Ni41ODMzM2MwLDI1LjcyNzIyIC0yMC44NTYxMiw0Ni41ODMzMyAtNDYuNTgzMzMsNDYuNTgzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/></button>
            </div>
            {docs.length!==0 ? (docs.map(item => (
                <div className="watch" key={'q'+item.id}>
                    <button className="del_btn" onClick={deleteHandle} id={'d'+item.id}>x</button>
                    <label>New</label>
                    <button onClick={favclick} id={item.id}>+</button>
                    <h1>{item.head}</h1>
                    <img src={item.url} alt={item.head} onClick={imgHandle} id={'i'+item.id}/>                    
                    <p>{item.des}</p>
                </div>
            ))) : 
            (<BounceLoader size={40} color="#FFEED5" css="top:30%"/>)
            }
        </div>
    </>
    )
}

export default Gallery;
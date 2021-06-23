import React, { useState ,useEffect} from 'react';
import { firestore ,timestamp} from '../firebase';
import './upload.css';
import { ClipLoader } from 'react-spinners';

const Upload=()=>{
    const collectionRef= firestore.collection("info");
    const [loading,setLoading]=useState(false);


    const [head,setHead]=useState('');
    const [url,setUrl]=useState('');
    const [des,setDes]=useState('');

    const headHandle=(e)=>{
        setHead(e.target.value);
    }

    const urlHandle=(e)=>{
        setUrl(e.target.value);
    }

    const desHandle=(e)=>{
        setDes(e.target.value);
    }

    const onsubmitbtn=(e)=>{
        e.preventDefault();

        if (head && url && des){
            collectionRef.add({
                head:head,url:url,des:des
            });
            collectionRef.orderBy('head','asc');
            alert('Successfully Added Please Check');
        }
        else
        {
            setHead('');
            setUrl('');
            setDes('');    
        }
        setHead('');
        setUrl('');
        setDes('');
    }

    return (
        <div className="form_back">
            <div className="form">
                <input type="text" placeholder="Enter Heading:" onChange={headHandle} value={head}/>
                <input type="text" placeholder="Enter URL:" onChange={urlHandle} value={url}/>
                <input type="text" placeholder="Enter Description:" onChange={desHandle} value={des}/>
                <button onClick={onsubmitbtn}>+</button>
                <ClipLoader color="blue" loading={loading} size="50"></ClipLoader>
            </div>
        </div>
    )
}

export default Upload;
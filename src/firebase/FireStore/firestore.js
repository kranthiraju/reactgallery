import { useEffect, useState } from 'react';
import { firestore } from '../../firebase';

const Firestore =(collection) =>{
    const [docs, setDocs]= useState([]);

    useEffect(()=>{
        const sub=firestore.collection(collection)
            .onSnapshot((snap)=>{
                let docu=[];
                snap.forEach(doc =>{
                    docu.push({...doc.data(), id: doc.id})
                });
                setDocs(docu);
            });
        return ()=> sub();
        
    },[collection])

    return {docs,setDocs};
}

export default Firestore;
import {useEffect, useState, useContext} from 'react'
import {FirebaseContext} from '../context/firebase'

 const useContent =(target)=>{
    const[content, setContent] =useState([]);
    const {firebase} = useContext(FirebaseContext);

    useEffect(()=>{
        firebase
        .firestore()
        .collection(target)
        .get()
        .then((snapshot)=>{
            const allContent = snapshot.docs.map((ContentObj)=>({
                ...ContentObj.data(),
                docId:ContentObj.id,
            }));
            setContent(allContent);
        })
        .catch((error)=>{
            console.log(error.message)
        });
    },[]);
    return {[target]: content}
}

export default useContent;



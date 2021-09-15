import { SelectProfileContainer } from "./profiles"
import {FirebaseContext} from '../context/firebase'
import { useContext } from "react"

export const BrowseContainer = ({slides}) =>{
    const {firebase} = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {};
    return (<SelectProfileContainer user={user}/>)
}
 
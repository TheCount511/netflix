import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


//Seed Databse 


//Setup config

const config ={};

const firebase = Firebase.initializeApp(config);

export {firebase};
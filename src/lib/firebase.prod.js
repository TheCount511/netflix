import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed'




const config = {   
apiKey: "AIzaSyDDErCZjt0Zc1Hd1pgoI1x8EYqkMpd1Cmc",
authDomain: "netflix-79fbc.firebaseapp.com",
projectId: "netflix-79fbc",
storageBucket: "netflix-79fbc.appspot.com",
messagingSenderId: "725461382324",
appId: "1:725461382324:web:e211f99f4ae6b4bea453e1"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);//

export {firebase};
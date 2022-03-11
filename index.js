/* Add JavaScript code here! */
console.log('Hello World! You did it! Welcome to Snowpack :D');
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '/firebase-config.js';

const db = getFirestore(app);
// const list = document.getElementsByClassName('list')[0]

// Get data from murder collections
const querySnapshot = await getDocs(collection(db, "murder"));
querySnapshot.forEach((doc) => {
  console.log(doc.data());
});
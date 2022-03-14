/* Add JavaScript code here! */
console.log('Hello World! You did it! Welcome to Snowpack :D');
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc, increment } from "firebase/firestore";
import { app } from '/firebase-config.js';

//constants
const db = getFirestore(app);
const yesButton = document.getElementById('yes')
const noButton = document.getElementById('no')

// Get data from all murder collections
// const querySnapshot = await getDocs(collection(db, "murder"));
// querySnapshot.forEach((doc) => {
// 	const yesValue = doc.data().yes
// 	const noValue = doc.data().no
// });

// get data of one collection
const userRef = doc(db, "murder", "nbz24O9VmlyMaxGnRQuc");
console.log(userRef)

// upddate firebase collection value
yesButton.addEventListener("click", () => {
	updateDoc(userRef, {
		yes: increment(1)
	}).then(function() {
		window.location.href = 'chart.html';
	});
	
});

noButton.addEventListener("click", () => {
	updateDoc(userRef, {
		no: increment(1)
	}).then(function() {
		window.location.href = 'chart.html';
	});
});
/* Add JavaScript code here! */
console.log('Hello World! You did it! Welcome to Snowpack :D');
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc, increment, getDoc } from "firebase/firestore";
import { app } from '/firebase-config.js';

// constants
const db = getFirestore(app);
const yesButton = document.getElementById('yes')
const noButton = document.getElementById('no')
const jspButton = document.getElementById('jsp')
// const chartLink = window.location.href = 'chart.html';
// chart constant
// const yesChart = document.getElementsByClassName('chart-yes')[0];
// const noChart = document.getElementsByClassName('chart-no')[0];
// const yesText = document.getElementsByClassName('yes-text')[0];
// const noText = document.getElementsByClassName('no-text')[0];

// Get data from all murder collections
// const querySnapshot = await getDocs(collection(db, "murder"));
// querySnapshot.forEach((doc) => {
// 	const yesValue = doc.data().yes
// 	const noValue = doc.data().no
// });
	
// get data of one collection
const docRef = doc(db, "murder", "nbz24O9VmlyMaxGnRQuc");
// console.log(docRef)
const docSnap = await getDoc(docRef);
	
// upddate firebase collection value
yesButton.addEventListener("click", () => {
	updateDoc(docRef, {
		yes: increment(1)
	}).then(function() {
		window.location.href = 'chart.html';
		// let yesValue = docSnap.data().yes + 1
		// console.log('yesValue:', yesValue)
		// let noValue = docSnap.data().no
		// let yesPourcentage = (yesValue / (noValue + yesValue)) * 100
		// console.log('yesPourcentage:', yesPourcentage + '%')
	});
	
});

noButton.addEventListener("click", () => {
	updateDoc(docRef, {
		no: increment(1)
	}).then(function() {
		window.location.href = 'chart.html';
		// let noValue = docSnap.data().no + 1
		// console.log('noValue:', noValue)
		// let yesValue = docSnap.data().yes
		// let yesPourcentage = (yesValue / (noValue + yesValue)) * 100
		// let noPourcentage = 100 - yesPourcentage
		// console.log('noPourcentage:', noPourcentage + '%')
	});
});

jspButton.addEventListener("click", () => {
	updateDoc(docRef, {
		jsp: increment(1)
	}).then(function() {
		window.location.href = 'chart.html';
	});
});


// if (docSnap.exists()) {
// 	console.log("Document data:", docSnap.data());
// } else {
// 	// doc.data() will be undefined in this case
// 	console.log("No such document!");
// }

// let yesValue = docSnap.data().yes
// let noValue = docSnap.data().no

// let yesPourcentage = (yesValue / (noValue + yesValue)) * 100
// let noPourcentage = 100 - yesPourcentage

// // update values
// yesChart.style.height = `${yesPourcentage}px`
// noChart.style.height = `${noPourcentage}px`

// yesText.innerHTML = `OUI: ${yesPourcentage.toFixed()}%`
// noText.innerHTML = `NON: ${noPourcentage.toFixed()}%`
import { getFirestore, collection, getDoc, addDoc, updateDoc, doc, increment } from "firebase/firestore";
import { app } from '/firebase-config.js';

//constants
const db = getFirestore(app);
const docRef = doc(db, "murder", "nbz24O9VmlyMaxGnRQuc");
const docSnap = await getDoc(docRef);

const yesChart = document.getElementsByClassName('chart-yes')[0];
const noChart = document.getElementsByClassName('chart-no')[0];
const yesText = document.getElementsByClassName('yes-text')[0];
const noText = document.getElementsByClassName('no-text')[0];

if (docSnap.exists()) {
	console.log("Document data:", docSnap.data());
} else {
	// doc.data() will be undefined in this case
	console.log("No such document!");
}

let yesValue = docSnap.data().yes
let noValue = docSnap.data().no

let yesPourcentage = (yesValue / (noValue + yesValue)) * 100
let noPourcentage = 100 - yesPourcentage

// update values
yesChart.style.height = `${yesPourcentage}px`
noChart.style.height = `${noPourcentage}px`

yesText.innerHTML = `OUI: ${yesPourcentage.toFixed()}%`
noText.innerHTML = `NON: ${noPourcentage.toFixed()}%`


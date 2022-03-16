import { getFirestore, collection, getDoc, addDoc, updateDoc, doc, increment } from "firebase/firestore";
import { app } from '/firebase-config.js';

//constants
const db = getFirestore(app);
const docRef = doc(db, "murder", "nbz24O9VmlyMaxGnRQuc");
const docSnap = await getDoc(docRef);

const yesChart = document.getElementsByClassName('chart-yes')[0];
const yesText = document.getElementsByClassName('yes-text')[0];
const noChart = document.getElementsByClassName('chart-no')[0];
const noText = document.getElementsByClassName('no-text')[0];
const jspChart = document.getElementsByClassName('chart-jsp')[0];
const jspText = document.getElementsByClassName('jsp-text')[0];

if (docSnap.exists()) {
	console.log("Document data:", docSnap.data());
} else {
	// doc.data() will be undefined in this case
	console.log("No such document!");
}

let yesValue = docSnap.data().yes
let noValue = docSnap.data().no
let jspValue = docSnap.data().jsp

let yesPourcentage = (yesValue / (noValue + yesValue + jspValue)) * 100
let noPourcentage = (noValue / (noValue + yesValue + jspValue)) * 100
let jspPourcentage = (jspValue / (noValue + yesValue + jspValue)) * 100

// update values
yesChart.style.width = `${yesPourcentage}px`
noChart.style.width = `${noPourcentage}px`
jspChart.style.width = `${jspPourcentage}px`

yesText.innerHTML = `Comme ${yesPourcentage.toFixed()}% des utilisateurs, <br> vous avez répondu ... <br> OUI`
noText.innerHTML = `Comme ${noPourcentage.toFixed()}% des utilisateurs, <br> vous avez répondu ... <br> NON`
jspText.innerHTML = `Comme ${jspPourcentage.toFixed()}% des utilisateurs, <br> vous avez répondu ... <br> NON`


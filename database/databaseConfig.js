const firebase = require('firebase/app');
const {getFirestore} = require('firebase/firestore');

const dotenv = require('dotenv');
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

const app = firebase.initializeApp(firebaseConfig);
const Database = getFirestore(app);

module.exports = Database;
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyBKlrR4KvG7HCRNn3yMwRLkKXpxLYsYQsM',
    authDomain: 'linkedin-react-a67e3.firebaseapp.com',
    projectId: 'linkedin-react-a67e3',
    storageBucket: 'linkedin-react-a67e3.appspot.com',
    messagingSenderId: '544361873773',
    appId: '1:544361873773:web:831dba54b65f5891229a64',
    measurementId: 'G-QVCRGVWYLB'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
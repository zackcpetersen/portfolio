import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCc5E3id5OyjTZAd65EDXXUFxtNpoBwPUA",
    authDomain: "personal-portfolio-50d2d.firebaseapp.com",
    databaseURL: "https://personal-portfolio-50d2d.firebaseio.com",
    projectId: "personal-portfolio-50d2d",
    storageBucket: "personal-portfolio-50d2d.appspot.com",
    messagingSenderId: "1014703258874",
    appId: "1:1014703258874:web:b80d0c0a5de6796d3f1d43",
    measurementId: "G-LXR49JJZVL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// export firestore database
export default firebase.firestore()
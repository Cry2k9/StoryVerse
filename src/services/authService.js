const firebaseConfig = {
    apiKey: "AIzaSyCeOrR3PlYmg84qp-ViwkH_J47wY6Wx-5w",
    authDomain: "storyverse-2e5f8.firebaseapp.com",
    projectId: "storyverse-2e5f8",
    storageBucket: "storyverse-2e5f8.firebasestorage.app",
    messagingSenderId: "857892438609",
    appId: "1:857892438609:web:c3063a31eba3ad6f9bae70",
    measurementId: "G-FCHZY0W68L"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
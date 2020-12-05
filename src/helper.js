import firebase from '@firebase/app'
import  '@firebase/storage'
import  '@firebase/database'
import  '@firebase/auth'
import  '@firebase/analytics'
var config = {
    apiKey: "AIzaSyAY8FO6kzCW1zl9KNmQhIsVhr5GDcGQB14",
    authDomain: "makeme-yellow.firebaseapp.com",
    databaseURL: "https://makeme-yellow.firebaseio.com",
    projectId: "makeme-yellow",
    storageBucket: "makeme-yellow.appspot.com",
    messagingSenderId: "548604747171",
    appId: "1:548604747171:web:738dd8416e1b50aa1bce16",
    measurementId: "G-T2PFMYEQXW"
  };

firebase.initializeApp(config);

export default firebase
export const mailchimp_url="//adhoney.us8.list-manage.com/subscribe/post?u=a65d4ec5e281eedf9375def8f&id=c4fcdfb795"
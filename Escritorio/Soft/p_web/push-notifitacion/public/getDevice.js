const firebaseConfig = {
  apiKey: "AIzaSyAz6lfSWHKUKXdRjeg5VS2R0BYfa8pHk7A",
  authDomain: "notification-test-93489.firebaseapp.com",
  databaseURL: "https://notification-test-93489.firebaseio.com",
  projectId: "notification-test-93489",
  storageBucket: "notification-test-93489.appspot.com",
  messagingSenderId: "930174282504",
  appId: "1:930174282504:web:a9e0155bcd9f1092311abd"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging
  .requestPermission()
  .then(() => {
    console.log("tiene permiso");
    return messaging.getToken();
  })
  .then(token => {
    console.log(token);
  })
  .catch(err => {
    console.log(err);
  });

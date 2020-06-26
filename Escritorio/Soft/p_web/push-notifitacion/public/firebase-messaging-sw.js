/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts("https://www.gstatic.com/firebasejs/4.13.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/4.13.0/firebase-messaging.js"
);

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/

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

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notification = JSON.parse(payload.data.notification);
  // Customize notification here
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: notification.icon
  };
  console.log("conxetumario");
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

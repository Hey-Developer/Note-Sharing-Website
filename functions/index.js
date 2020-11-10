const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

/* 
In the above function we are saying that we want to fire a function on http request and in return the firebase server will give us a response..

to deploy this function on our firebase server we use-->
>> firebase deploy --only functions

For our project we need to cloud functions-->
--1>> One which fire when a new project is created by the user.
--2>> and the second when a new user sign up.

So let's create also when a  new user created a project we want to show a notification to do this we need to store some data of that newly create project in our notification object and then we create a new collection of notifications and add that notification object so that our notifications components can access to that data using firestore..
*/

// function to add notification object to the firestore collection..
const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => {
      console.log(`notification added`, doc);
    });
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc) => {
    const project = doc.data();
    const notification = {
      content: "Added a New Project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    // now we want to store this notification object in our new notifications collection in firestore so let's create that-->

    return createNotification(notification);
    //  we return a value here because this function expect some kind of response to end the function.
  });

/* 
Now we will create a function that will trigger whenever a new user sign-ups what we do is when a new user sign up we take up its auth.uid() and then search for that uid in our firestore users collection to get the name of user to and using that name we will add that name in our notification object and then again store that data into our firestore notifications collection..
*/

exports.userJoined = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the CloveS",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };

      return createNotification(notification);
    });
});

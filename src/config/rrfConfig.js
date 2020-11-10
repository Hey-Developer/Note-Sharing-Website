export const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DBq
};

/* 
These two properties:
userProfile and useFirestoreForProfile are used so that
we can  fetch extra data of a user which we store in firestore like firstName, lastName..etc

useFirestoreForProfile fetch the collection from the firestore with id == auth.uid

and the userProfile tells the collection name from which to fetch the data..in the firestore

*/

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "./reducers/rootReducer";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import fbConfig from "../config/fbConfig";

export const store = createStore(
  rootReducers,
  compose(
    reduxFirestore(fbConfig),
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }))
  )
);
// Now as we want to connect our global store with our firebase then we have to perform some aync call for that hence we have to use redux-thunk that allow us a way to interact with actions before it reaches to the reducer...

//>> the applyMiddleware is function which can take multiple middleware which will increase our store functionality hence called store enhancers
//-- So next time if you heard the term storeEnhancers it is nothing but just third party packages that increase the functionality of our store

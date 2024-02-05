// AuthModel.js
import firebase from './firebaseConfig';

const AuthModel = {
  signUp: async (email, password) => {
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      throw error;
    }
  },

  signIn: async (email, password) => {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      throw error;
    }
  },
};

export default AuthModel;

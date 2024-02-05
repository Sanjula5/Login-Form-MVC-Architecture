// SignupController.js
import AuthModel from './AuthModel';

const SignupController = {
  signUpUser: async (name, email, password) => {
    try {
      const user = await AuthModel.signUp(email, password);
      return user;
    } catch (error) {
      throw error;
    }
  },
};

export default SignupController;

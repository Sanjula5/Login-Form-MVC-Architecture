// LoginController.js
import AuthModel from './AuthModel';

const LoginController = {
  loginUser: async (email, password) => {
    try {
      const user = await AuthModel.signIn(email, password);
      return user;
    } catch (error) {
      throw error;
    }
  },
};

export default LoginController;

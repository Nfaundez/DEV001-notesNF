import Root from "./root";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// mock
export const signInWithPopup = jest.fn(
    () => Promise.resolve(),
  );
  export const getAuth = () => {};
  export const GoogleAuthProvider = class {};

  describe('probar si boton google llama a signInWithGoogle', () => {
    it('debería llamar la función signInWithPopup', () => {
        signInWithGoogle();
      expect(signInWithPopup).toHaveBeenCalled();
    });
  });
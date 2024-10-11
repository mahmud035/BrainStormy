import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import app from '../../firebase configuration/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = useMemo(() => new GoogleAuthProvider(), []);
  const githubProvider = useMemo(() => new GithubAuthProvider(), []);

  //* Create User With Email & Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //* Login / Sign-in with Email & Password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //* Google Sign In
  const googleSignIn = useCallback(() => {
    return signInWithPopup(auth, googleProvider);
  }, [googleProvider]);

  //* Github Sign In
  const githubSignIn = useCallback(() => {
    return signInWithPopup(auth, githubProvider);
  }, [githubProvider]);

  //* Password Reset
  const passwordReset = (userEmail) => {
    return sendPasswordResetEmail(auth, userEmail);
  };

  //* Update User Profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //* Log Out
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = useMemo(
    () => ({
      user,
      loading,
      createUser,
      logIn,
      logOut,
      googleSignIn,
      githubSignIn,
      passwordReset,
      updateUserProfile,
    }),
    [user, loading, googleSignIn, githubSignIn]
  );

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

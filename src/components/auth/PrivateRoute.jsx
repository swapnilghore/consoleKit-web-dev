import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import  auth  from '../../firebase-auth'; // adjust the path if needed

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined) return <p>Loading...</p>; // While checking auth
  if (!user) return <Navigate to="/login" replace />; // Not logged in

  return children;
};

export default PrivateRoute;

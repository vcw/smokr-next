import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../api/firebase';

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    })
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

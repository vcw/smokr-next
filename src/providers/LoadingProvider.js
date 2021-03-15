import React, { createContext, useState } from 'react';

const LoadingContext = createContext(false)

function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export {LoadingContext, LoadingProvider};

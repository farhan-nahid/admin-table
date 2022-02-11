import React, { createContext } from 'react';
import useAsyncCall from '../hooks/useAsyncCall';

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  return <ApiContext.Provider value={useAsyncCall()}>{children}</ApiContext.Provider>;
};

export default ApiProvider;

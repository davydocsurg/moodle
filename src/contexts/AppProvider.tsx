import React, { createContext } from 'react';

type AppContextType = {
  hello: string;
};

const AppContext = createContext<AppContextType>({
  hello: 'hi',
});

export const AppProvider: React.FC = ({
  children,
}: React.EmbedHTMLAttributes<any>) => {
  return (
    <AppContext.Provider value={{ hello: 'hi' }}>
      {children}
    </AppContext.Provider>
  );
};

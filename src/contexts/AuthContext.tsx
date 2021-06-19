import React, {useMemo, useState} from 'react';

type State = {
  isAuthenticated: boolean;
  setAuthenticationContext: (newProps: Partial<State>) => void;
};

const defaultContext: State = {
  isAuthenticated: false,
  setAuthenticationContext: null,
};

export const useAuthenticationContext = () => {
  const [props, setProps] = useState<State>(defaultContext);

  const derivedProps = useMemo(() => {
    return {
      ...props,
    };
  }, [props]);

  return {
    ...derivedProps,
    setAuthenticationContext: (newProps: Partial<State>) =>
      setProps({...props, ...newProps}),
  };
};

export const AuthContext =
  React.createContext<ReturnType<typeof useAuthenticationContext>>(
    defaultContext,
  );

import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

import Reducer from './reducer';

export const initialState: Store = {
  id: 0,
  is_authenticated: false,
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
};

const globalStoreContext = createContext<{
  state: Store;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const globalStoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <globalStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </globalStoreContext.Provider>
  );
};

export const useGlobalStoreContext: () => {
  state: Store;
  dispatch: (action: Action) => void;
} = () => {
  const { state, dispatch } = useContext(globalStoreContext);
  return { state, dispatch };
};

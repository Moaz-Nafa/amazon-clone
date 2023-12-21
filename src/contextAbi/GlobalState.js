import { createContext, useContext, useReducer } from "react";
import { initialState } from "./AppReducer";
import AppReducer from "./AppReducer";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ basket: state.basket, user: state.user, dispatch: dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useAuth = () => {
  return useContext(GlobalContext);
};
  
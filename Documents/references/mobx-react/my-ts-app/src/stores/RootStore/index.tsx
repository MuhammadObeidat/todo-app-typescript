import React, {createContext, useContext} from "react";

import NotesStore from "../NotesStore";

//context value type
type rootStateContextValue = {
  noteStore: NotesStore;
};

//context
const RootStoreContext = createContext<rootStateContextValue>({} as rootStateContextValue);

// multi stores instances 
const noteStore = new NotesStore();

const rootStore = {
  noteStore,
};

export const RootStoreProvider:React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
}

export const useRootStore = () => useContext(RootStoreContext);


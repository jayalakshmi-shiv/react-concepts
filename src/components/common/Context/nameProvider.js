import React, { useState } from "react";

export const Context = React.createContext();

const NameProvider = props => {

  const [name, setName] = useState(false);

  return (
    <Context.Provider
      value={{
        name,
        updateName: val => setName(val)
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default NameProvider;

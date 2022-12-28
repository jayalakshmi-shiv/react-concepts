import React, { useState } from "react";

export const Context = React.createContext();

const PromptProvider = props => {

  const [showPrompt, setShowPrompt] = useState(false);

  return (
    <Context.Provider
      value={{
        showPrompt,
        updatePrompt: val => setShowPrompt(val)
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default PromptProvider;

import React, { createContext } from "react";
import { useCycle } from "framer-motion";

const ToggleOpenCloseContext = createContext();

export const ToggleOpenCloseProvider = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const toggledOpen = () => toggleOpen();
  const values = { isOpen, toggledOpen };

  return (
    <ToggleOpenCloseContext.Provider value={values}>
      {children}
    </ToggleOpenCloseContext.Provider>
  );
};

export default ToggleOpenCloseContext;

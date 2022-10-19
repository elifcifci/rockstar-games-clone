import React, { createContext } from "react";

const WindowSizeContext = createContext();

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export const WindowSizeProvider = ({ children }) => {
  const [dimensions, setDimensions] = React.useState(window.innerWidth);

  //Calculate window size
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions(window.innerWidth);
    }, 0);

    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <WindowSizeContext.Provider value={dimensions}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export default WindowSizeContext;

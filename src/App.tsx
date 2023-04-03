import React, { useCallback, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

const App = () => {
  const getHeight = useCallback(
    () =>
      window.visualViewport ? window.visualViewport.height : window.innerHeight,
    []
  );

  const [screenHeight, setScreenHeight] = useState(getHeight());

  const handleResize = () => {
    setScreenHeight(getHeight());
  };

  useEffect(() => {
    setScreenHeight(getHeight());

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    window.visualViewport?.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, [getHeight]);

  const style = { height: `${screenHeight}px` };

  return (
    <div style={style} className="flex flex-col h-screen inset-0 p-4">
      <Outlet />
    </div>
  );
};

export default App;

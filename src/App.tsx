import React, { useCallback, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

const App = () => {

  return (
    <div className="flex flex-col h-screen inset-0 p-4">
      <Outlet />
    </div>
  );
};

export default App;

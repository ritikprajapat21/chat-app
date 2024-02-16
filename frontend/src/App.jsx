import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register, { action as registerAction } from "./pages/Register";
import Room, { loader as roomLoader } from "./pages/Room.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
      action: registerAction,
    },
    {
      path: "/roomId/:roomId",
      element: <Room />,
      loader: roomLoader,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

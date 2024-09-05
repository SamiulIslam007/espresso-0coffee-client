import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import AuthProvider from "./components/provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/addcoffee",
    element: <AddCoffee />,
    // element: <div>This is add coffee</div>
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

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
import Users from "./components/Users.jsx";
import Layout from "./components/layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("https://coffee-server-self.vercel.app/coffee"),
      },
      {
        path: "/addcoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`https://coffee-server-self.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://coffee-server-self.vercel.app/users"),
      },
    ],
  },
  // {
  //   path: "/addcoffee",
  //   element: <AddCoffee />,
  //   // element: <div>This is add coffee</div>
  // },
  // {
  //   path: "/updatecoffee/:id",
  //   element: <UpdateCoffee></UpdateCoffee>,
  //   loader: ({ params }) => fetch(`https://coffee-server-self.vercel.app/coffee/${params.id}`),
  // },
  // {
  //   path: "/signup",
  //   element: <SignUp />,
  // },
  // {
  //   path: "/signin",
  //   element: <SignIn />,
  // },
  // {
  //   path: "/users",
  //   element: <Users />,
  //   loader: () => fetch("https://coffee-server-self.vercel.app/users"),
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import store from "./store/store";
import { Provider } from "react-redux";
import CreateRoom from "./pages/createRoom/CreateRoom";
import ChatRoom from "./pages/chatRoom/ChatRoom";

const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
            path: "/",
            element: <App/>,
        },
        {
            path: "/home",
            element: <Home/>,
        },
        {
            path: "/create-room",
            element: <CreateRoom/>,
        },
        {
            path: "/join-room",
            element: <CreateRoom/>,
        },
        {
            path: "/chat-room/:id",
            element: <ChatRoom/>,
        },
      ],
    },
]);

ReactDOM.render(<Provider store={store}><RouterProvider router={router} /></Provider>, document.getElementById("root"));

serviceWorker.unregister();

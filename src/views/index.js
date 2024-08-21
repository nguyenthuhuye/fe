import React from "react";

export const Login = React.lazy(() => import("./login-views/index"))
export const Home = React.lazy(() => import("./home-views/index"))
export const Message = React.lazy(() => import("./message/message"))


export const route = []
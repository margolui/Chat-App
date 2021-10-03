
import { LOGIN_ROUTE } from "./utils/const";
import { CHAT_ROUTE } from "./utils/const";
import Chat from "./components/Chat";
import Login from "./components/Login";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]
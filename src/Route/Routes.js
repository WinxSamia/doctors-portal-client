import Appointment from "../Appointment/Appointment/Appointment";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Signup from "../Signup/Signup";
import Dashboard from "../pages/Home/Dashboard/Dashboard/Dashboard";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main/Main");
const { default: Home } = require("../pages/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },

            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },

        ]
    }
])
import React from "react"
import { Redirect } from "react-router-dom"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ResetPassword from "../pages/Authentication/ResetPassword"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import VerifyEmail from "../pages/Authentication/VerifyEmail"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  { path: "/reset-password", component: ResetPassword },
  { path: "/verify-email", component: VerifyEmail },

]

export { userRoutes, authRoutes }
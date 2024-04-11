import React from "react"
import Home from "./pages/home/Home"
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import { APIConfig, setAuthToken } from "./libs/Api"
import { AUTH_CHECK, AUTH_ERROR } from "./stores/rootReducer"
import { useDispatch } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom"

const App: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  
  const authCheck = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken")
      if (accessToken) {
        setAuthToken(accessToken)
        const response = await APIConfig.get("/auth/check")
        dispatch(AUTH_CHECK(response.data))
      } else {
        dispatch(AUTH_ERROR())
        if (location.pathname === "/auth/register") {
          navigate("/auth/register")
        } else {
          navigate("/auth/login")
        }
      }
    } catch (error) {
      dispatch(AUTH_ERROR())
      navigate("/auth/login")
    }
  }

  React.useEffect(() => {
    authCheck()
  }, [])

  const IsLogin = () => {
    if (!localStorage.getItem("accessToken")) {
      if (location.pathname === "/auth/register") {
        return <Navigate to={"/auth/register"} />
      } else {
        return <Navigate to={"/auth/login"} />
      }
    } else {
      return <Outlet />
    }
  }

  return (
    <>
      <Routes>
        <Route path="*" element={<IsLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
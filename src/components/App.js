import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../Contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Home from "./Home"
import Todo from "./Todo"

function App() {
  return (
    <Container
     
      
    >
      <div className="w-100"  >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard}  className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}/>
              <PrivateRoute path="/update-profile" component={UpdateProfile}  className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",maxWidth:"400px" }}/>
              <Route path="/signup" component={Signup}  className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" ,maxWidth:"400px"}} />
              <Route path="/login" component={Login}  className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",maxWidth:"400px" }} />
              <Route path="/home" component={Home}  className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",maxWidth:"400px" }}/>
              <Route path="/forgot-password"  className="d-flex align-items-center justify-content-center" component={ForgotPassword}style={{ minHeight: "100vh" ,maxWidth:"400px"}} />
              <Route path="/todo" component={Todo}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
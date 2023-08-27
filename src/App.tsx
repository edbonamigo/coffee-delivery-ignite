import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { NavLink } from "react-router-dom"

export function App() {
  
  return (
    <BrowserRouter>
      <h1>Coffe Delivery</h1>
      <NavLink to="/">
        Home
        </NavLink>
      <NavLink to="/checkout">
        Checkout
      </NavLink>
      <NavLink to="/Success">
        Success
      </NavLink>
      <Router /> 
    </BrowserRouter>
  )
}

export default App

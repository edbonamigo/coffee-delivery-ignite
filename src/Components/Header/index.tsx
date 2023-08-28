import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
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
    </>
  )
}
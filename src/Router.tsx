import { Routes, Route } from 'react-router-dom'

import { Products } from './pages/Products'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Products />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Route>
    </Routes>
  )
}
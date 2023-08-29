import { Routes, Route } from 'react-router-dom'

import { Shop } from './pages/Shop'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Route>
    </Routes>
  )
}
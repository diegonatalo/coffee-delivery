import { DefaultLayout } from '@layouts/DefaultLayout'
import { CompleteOrder } from '@pages/CompleteOrder'
import { Home } from '@pages/Home'
import { OrderConfirmed } from '@pages/OrderConfirmed'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/complete-order" element={<CompleteOrder />} />
        <Route path="/order-confirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Shared/Layout'
import Dashboard from './Components/Dashboard'
import Products from './Components/Products'
import Orders from './Components/Orders'
import Customers from './Components/Customers'
import Transactions from './Components/Transactions'
import Messages from './Components/Messages'
import Settings from './Components/Settings'
import Help from './Components/Help'

function App() {
    return (
        <Router basename="/dashboard1">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="messages" element={<Messages />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="help" element={<Help />} />
                </Route>
                <Route path="login" element={<div>this is the login page</div>} />
            </Routes>
        </Router>
    )
}

export default App

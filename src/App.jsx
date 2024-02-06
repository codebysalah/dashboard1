import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./Components/Shared/Layout"
import Dashboard from "./Components/Dashboard";
import Products from "./Components/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="login" element={<div>this is the login page</div>}/>
      </Routes>
    </Router>
  );
}

export default App;

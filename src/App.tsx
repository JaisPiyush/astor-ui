import './App.css'
import AppbarComponent from "./components/AppbarComponent"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toolbar } from "@mui/material";
import Landing from "./pages/Landing";
import Dashboard from './pages/Dashboard';
import IndexComponent from './components/IndexComponent';
import CashPoolComponent from './components/CashPoolComponent';
function App() {
  return (
    <BrowserRouter>
      <AppbarComponent />
      <Toolbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/index" element={<IndexComponent />} />
            <Route path="/dashboard/cashpool" element={<CashPoolComponent />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App

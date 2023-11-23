import './App.css'
import AppbarComponent from "./components/AppbarComponent"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Snackbar, Toolbar, Alert } from "@mui/material";
import Landing from "./pages/Landing";
import Dashboard from './pages/Dashboard';
import IndexComponent from './components/IndexComponent';
import CashPoolComponent from './components/CashPoolComponent';
import { useAppSelector } from './store/hook';

function App() {
  const [alert, type] = useAppSelector(state => [state.global.alert, state.global.type]);

  return (
    <BrowserRouter>
      <AppbarComponent />
      <Toolbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/:address" element={<Dashboard />}>
            <Route path="/:address/index" element={<IndexComponent />} />
            <Route path="/:address/cashpool" element={<CashPoolComponent />} />
          </Route>
        </Routes>
      </main>
      <Snackbar open={alert !== null} autoHideDuration={6000}>
        <Alert severity={type}>{alert}</Alert>
      </Snackbar>
    </BrowserRouter>
  )
}

export default App

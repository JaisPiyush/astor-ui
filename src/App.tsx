import './App.css'
import AppbarComponent from "./components/AppbarComponent"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Snackbar, Toolbar, Alert } from "@mui/material";
import Landing from "./pages/Landing";
import Dashboard from './pages/Dashboard';
import IndexComponent from './components/IndexComponent';
import CashPoolComponent from './components/CashPoolComponent';
import { useAppDispatch, useAppSelector } from './store/hook';
import { globalActions } from './store/globalSlice';

function App() {
  const [alert, type] = useAppSelector(state => [state.global.alert, state.global.type]);
  const dispatch = useAppDispatch();

  const handleSnackBarClose = () => {
    dispatch(globalActions.setAlert({
      alert: null,
      type
    }))
  }

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
      <Snackbar open={alert !== null} autoHideDuration={3000} onClose={() => {handleSnackBarClose()}}>
        <Alert severity={type}>{alert}</Alert>
      </Snackbar>
    </BrowserRouter>
  )
}

export default App

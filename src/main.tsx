import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store.ts'; 
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <MetaMaskUIProvider debug={false} sdkOptions={{
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Astor",
      url: window.location.host,
    }
  }}>
  <Provider store={store}>

        <App />

  </Provider>
  </MetaMaskUIProvider>
)

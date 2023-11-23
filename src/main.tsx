import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store.ts'; 
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';
import { ViemContext, client } from './context/ViemContext.ts';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <MetaMaskUIProvider debug={false} sdkOptions={{
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Astor",
      url: window.location.host,
    }
  }}>
  <Provider store={store}>
   <ViemContext.Provider value={client}>
        <App />
   </ViemContext.Provider>
  </Provider>
  </MetaMaskUIProvider>
)

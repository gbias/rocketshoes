import { BrowserRouter } from 'react-router-dom'

import './config/ReactotronConfig'

import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import GlobalStyle from './styles/global'
import Header from './Components/Header'
import Routes from './routes'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>
  )
}

export default App

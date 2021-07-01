import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'
import Header from './Components/Header'
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App

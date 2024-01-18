import Header from './component/header'
import Footer from './component/footer'
import ScrollUp from './component/scrollup'


import Home from './pages/home'
import './assets/css/styles.css'

const App = () => {
  return (<>
  <Header/>
    <Home />
    <Footer />
    <ScrollUp/>
  
  </>)
}

export default App
import {Home} from "./views"
import { Header,Footer } from "./components";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<Home/>}/>
      </Routes>
      <Footer />
    </Router>
      
    </>
  )
}

export default App


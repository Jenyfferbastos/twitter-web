import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { LoginPage } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Profile } from './pages/Profile'
import { Error404 } from './components/Error404/Error404'
import { ThemeContext } from './common/context/Theme'


export function App(){
  const {
    theme, 
  } = useContext(ThemeContext)

  const Private = ({ Item }) => {
    
    const { signed } = false;
  
    return signed > 0 ? <Item /> : <LoginPage/>;
  }

  return(
    <Router>
      <Routes>
        <Route path='/' element={<Private Item={Home} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="*" element={< Error404/>} />
      </Routes>
    </Router>
  )
}
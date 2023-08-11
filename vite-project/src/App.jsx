import {Routes,Route} from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Register from './pages/Regester'
import Login from './pages/Login'
import axios from 'axios'
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from './context/userContext'
import Payment from './pages/payment'
import CanclePayment from './pages/CanclePayment'



axios.defaults.baseURL='http://localhost:8080';
axios.defaults.withCredentials=true;

function App() {
  return (
    <UserContextProvider>
    <div className='flex justify-center items-center h-screen bg-blue-800 flex-col'>
      <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/canclepayment' element={<CanclePayment/>}/>
      </Routes>
    </div>
    </UserContextProvider>
  )
}

export default App

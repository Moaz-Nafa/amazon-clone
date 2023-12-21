import {React, useEffect} from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Header from './Components/Header'
import Login from './Components/Login'
import { auth } from './firebase'
import { useAuth } from './contextAbi/GlobalState'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import Payment from './Components/Payment'
import Orders from './Components/Orders'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const App = () => {

  const {dispatch} = useAuth();
  const stripePromise = loadStripe(
        "pk_test_51ONGydICvgr2tpQm6arVdcfVxGkNh3pIHXBUxMi7O3ve9Mx6SS418xCUNcqS4sTTEkgHI8eCiooNxmsS6v3Kwi8N00yX5Um2S0"
  );

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
         type:"SET_USER",
         user: authUser,
        })
      }else{
           dispatch({
         type:"SET_USER",
         user: null,
        })
      }
    })
  },[])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<> <Header/><Home/> </>}/>
          <Route path='/checkout' element={<> <Header/><Checkout/> </>}/>
          <Route path="/payment" element={<> <Header /> <Elements stripe={stripePromise}><Payment/></Elements> </>}/>
          <Route path='/orders' element={<> <Header/><Orders /> </>}/>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h2>Page Not Found</h2>}/>
        </Routes>
      </BrowserRouter>
           
    </div>
  )
}

export default App

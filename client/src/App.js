import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Route, Routes} from "react-router-dom"
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAuthUser } from './redux/actions/authActions';
import ProductList from './components/ProductCard/ProductList';
import MyProducts from './components/ProductCard/MyProducts';
import Profile from './components/Profile/Profile';

function App() {
  const isAuth = useSelector(state=>state.authReducer.isAuth)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAuthUser())
  }, [isAuth])
  
  return (
    <div className="App">
      
  <NavBar />
  <Routes>
    <Route path="/signin" element={<Signin/>} />
    <Route path="/signout" element={<Signup/>} />
    <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='/productslist' element={ <PrivateRoute><ProductList /> </PrivateRoute> } />
        <Route path='/profile' element={ <PrivateRoute><Profile /> </PrivateRoute> } />
  </Routes>
    </div>
  );
}

export default App;

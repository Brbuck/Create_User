import React from 'react';
import { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Components/SignIn'

function Routers() {
   
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path="*" element={<p>Page not found 404 </p  >} />
        </Routes>
    );
}

export default Routers;
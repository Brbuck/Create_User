import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Components/SignIn'
import Dashboard from './Pages/Dashboard'
import SignUp from './Components/SignUp'
import { useAuth } from './Context/authContext'

function Routers() {
    function PrivateRoute({ children }) {
        const { signed } = useAuth();
        const StorageToken = localStorage.getItem('F:token')
        return signed || StorageToken ? children : <Navigate to="/login" />;

    }

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route
                path='/user/:id'
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<p>Page not found 404 </p  >} />
        </Routes>
    );
}

export default Routers;
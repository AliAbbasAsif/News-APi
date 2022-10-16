import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Data from '../Pages/Data';
import Details from '../Pages/Details';


function AppRouter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Data />} />
                    <Route path='details' element={<Details />} />
                </Routes>

            </Router>


        </div>
    )
}

export default AppRouter

import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import CandidateForm from './components/CandidateForm';
// import { ProtectedRoute } from 'protected-route-react';
import CandidateList from './components/CandidateList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Private = ({Component})=>{
  const isAuthenticated = useSelector((state)=>state.user.isAuthenticated);
  console.log(isAuthenticated);
  return isAuthenticated? <Component/> : <Navigate to="/login"/>
}

 

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Private Component={Home}/>}/>
      <Route path='/form' element={<Private Component={CandidateForm}/>}/>
      <Route path='/all' element={<Private Component={CandidateList}/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

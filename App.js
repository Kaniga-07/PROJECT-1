import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import FloatingActionButtons from './components/Services';
import WovenImageList from './components/Images';
import DrawerComp from './components/HomePage';
import BookNowForm from './components/BookNowForm';
import { AuthProvider } from './components/Authcontent';
import ReservationForm from './components/Reservation';
import ViewDetails from './components/ViewDetails';
import FeedbackForm from './components/FeedBack';
import Review from './components/Review';
import Information from './components/Information';
function App() {
  return (
    <Router>
     <AuthProvider>
        <Routes>    
          <Route path="/" element={<DrawerComp />}></Route>
          <Route path="/About" element={<ViewDetails/>}></Route>
          <Route path="/Services" element={<FloatingActionButtons/>}></Route>
          <Route path="/Information" element={<Information/>}></Route>
          <Route path="/SignupForm" element={<SignupForm />}></Route>    
          <Route path="/BookNowForm" element={<BookNowForm/>}></Route>
          <Route path="/Reservation" element={<ReservationForm/>}></Route>
          <Route path="/ViewDetails" element={<ViewDetails/>}></Route>
          <Route path="/Ambience" element={<WovenImageList/>}></Route>     
          <Route path="/FeedBack" element={<FeedbackForm/>}></Route>     
          <Route path="/Pricing" element={<Review/>}></Route>     
          <Route path="/view" element={<WovenImageList/>}></Route>
          <Route path="/LoginForm" element={<LoginForm />}></Route>
          </Routes>

     </AuthProvider>
          
      </Router>
    
  );
}

export default App;
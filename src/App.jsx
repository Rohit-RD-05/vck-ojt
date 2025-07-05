import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/Pages.css";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";

const App =() => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Rohit Dhanaji Dhundare"
          studentPhotoUrl="\Images\ROHIT RD.jfif" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

    <Router>
      <div className="main-layout">
        <Header/>
        <div className="content">
         <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/adm" element={<AdmissionPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
         </Routes>
        </div>
        <Footer/>
        <ChatbotComponent/>
      </div>
    </Router>
    </>
  )
}

export default App;
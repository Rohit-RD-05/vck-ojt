import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import AdmissionPage from "./pages/AdmissionPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"

const App = () =>{
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/adm" element={<AdmissionPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/notfound" element={<NotFoundPage/>}/>
      </Routes>
      <ChatbotComponent/>
    </Router>
    </>
  )
}

export default App
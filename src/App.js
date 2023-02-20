import "./css/Homepage.css";
import "./css/Snooze.css";
import "./css/Appointment.css";
import "./css/LoginPage.css";
import "./css/MyMeds.css";
import { HashRouter } from 'react-router-dom';
import Home from "./components/Homepage/Home";
import AppointmentPage from "./components/AppointmentPage/AppointmentPage";
import MyMedsPage from "./components/MyMedsPage/MyMeds";

import LoginForm from "./components/RegisterPage/LoginForm";
import Navbar from "./components/Homepage/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ContactForm from "./components/Contact";

function App() {
  // const [userId,setUserId] = useState("");
  const onLogin = (loggedDetail) => {
    console.log(loggedDetail);
    //   let queryString = "http://localhost:8000/auth/login";
    //   queryString = queryString
    //     .concat("?name=")
    //     .concat(loggedDetail.name)
    //     .concat("&password=")
    //     .concat(loggedDetail.password);
    //   axios.get(queryString).then((res) => {
    //     if (res.data.length !== 1) {
    //       alert("Login Failed");
    //     } else {
    //       alert("Logged In");
    //       setUserId(res.data[0]);
    //     }
    //   });
  };
  const onRegister = (userDetail) => {
    console.log(userDetail);
    //   let queryString = "http://localhost:8000/auth/register";
    //   queryString = queryString
    //     .concat("?name=")
    //     .concat(userDetail.name)
    //     .concat("&email=")
    //     .concat(userDetail.email)
    //     .concat("&password=")
    //     .concat(userDetail.password);
    //   axios.post(queryString).then((res) => {
    //     console.log(res.data);
    //     alert("Registered!");
    // setUserId(res.data._id);
    //   });
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/mymeds" element={<MyMedsPage />} />
          <Route
            path="/auth"
            element={<LoginForm onRegister={onRegister} onLogin={onLogin} />}
          />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

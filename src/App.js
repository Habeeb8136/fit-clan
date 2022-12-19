import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import Header from "./components/nav/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Error404 from "./components/404/Error404";
import Store from "./components/Store/Store";
import Diet from "./components/Diet/Diet";
import Exercise from "./components/Exercise/Exercise";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contact/ContactUs";
import Login from "./components/login/Login";
import { AuthContextProvider } from './AuthContext';
import LooseWeight from "./components/Exercise/plans/loose wieght/LooseWeight";
import BuildMuscles from "./components/Exercise/plans/build_muscles/BuildMuscles";
import HomeWorkouts from "./components/Exercise/plans/home_workouts/HomeWorkouts";
import Calisthenics from "./components/Exercise/plans/calisthenics/Calisthenics";
import Signup from "./components/signup/Signup";
import Details from "./components/details/Details";

function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/diet" element={<Diet />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/exercise" element={<Exercise />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/looseWeight" element={<LooseWeight />} />
          <Route exact path="/buildMuscles" element={<BuildMuscles />} />
          <Route exact path="/homeExercise" element={<HomeWorkouts />} />
          <Route exact path="/calisthenics" element={<Calisthenics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;

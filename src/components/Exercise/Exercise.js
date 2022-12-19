import React from "react";
import { Link } from "react-router-dom";
import "./Exercise.css";
//import bgVideo from "../../assets/exercise page BGvid (2).mp4";

const Exercise = () => {
  return (
    <div className="exerciseWrapper">
      {/* <video src={bgVideo} autoPlay loop></video> */}
      <div className="exerciseSelector">

        {/* ========== Exercises to Loose Weight ========== */}
        <div className="div1 selector">
          <div className='divTextBg'>
            <Link to="/looseWeight">
              <h2>Lose weight</h2>
              <ul>
                <li>Want to lose weight?</li>
                <li>improve health?</li>
                <li>Want to feel confident?</li>
                <li>Dont know where to start?</li>
              </ul>
              <h5>
                - Start our free full body workout plan specially made for those who
                want to lose weight and get fit
              </h5>
            </Link>
          </div>
        </div>

        {/* ========== Exercises to Build Muscles ========== */}

        <div className="div2 selector">
          <div className='divTextBg'>
            <Link to="/buildMuscles">
              <h2>Build Muscle</h2>
              <ul>
                <li>Want to build muscle?</li>
                <li>Tired of being small?</li>
                <li>See visible results in 4 weeks</li>
              </ul>
              <h5>
                - Get the best workout plan for muscle gain
              </h5>
            </Link>
          </div>
        </div>

        {/* ========== Home Exercices ========== */}

        <div className="div3 selector">
          <div className='divTextBg'>
            <Link to="/homeExercise">
              <h2>Home Workouts</h2>
              <ul>
                <li>Busy life ?</li>
                <li>No time for going to gym?</li>
                <li>No equipments?</li>
                <li>Want to stay fit without gym?</li>
              </ul>
              <h5>
                - Get our full body homeworkout plan with or without equipments
              </h5>
            </Link>
          </div>
        </div>

        {/* ========== Calisthenics ========== */}
        <div className="div4 selector">
          <div className='divTextBg'>
            <Link to="/calisthenics">
              <h2>Calisthenics</h2>
              <ul>
                <li>Build strength?</li>
                <li>get the best physic</li>
                <li>Dont know where to start?</li>
              </ul>
              <h5>-  Get our complete calisthenics workout plan starting with biginner exercises.</h5>
            </Link>
          </div>
        </div>

      </div >
    </div >
  );
};

export default Exercise;

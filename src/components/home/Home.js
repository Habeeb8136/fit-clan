import React from "react";
import "./home.css";
import Quote from "../quotes/Quote";
import Button from "react-bootstrap/esm/Button";
import barbellicon from '../../assets/Barbell.svg'
import dieticon from '../../assets/icons8-diet-20.png'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homeContainer justify-content-md-center">
      <div className="row rowWrapper">
        <div className="col quoteWrapper">
          <h5>Quote of the moment</h5>
          <Quote />
        </div>
        <div className="col-6 shopWrapper">Shopping</div>
        <div className="col GetstartedWrapper">
          {/* <Getstarted /> */}

          <div className="row-6 Getstarted-Diet">
            <ul style={{ listStyle: 'circle' }}>
              <li>Free workout plans</li>
              <li>Know your workout</li>
              <li>Home/gym workouts</li>
              <li>Achieve your goal</li>
            </ul>

            <div className="buttonDiv">
              <Link to='/exercise'><Button variant='warning'>Get satrted <img src={barbellicon} alt="icon" width={35}></img></Button></Link>
            </div>

          </div>

          <div className="row-6 Getstarted-Workout">
            <ul style={{ listStyle: 'circle' }}>
              <li>Get diet plans</li>
              <li>Know you BMI</li>
              <li>Know your calories</li>
              <li>Nutrition advises</li>
            </ul>

            <div className="buttonDiv">
              <Link to='/diet'><Button variant='warning'>Get satrted <img src={dieticon} alt="icon"></img></Button></Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

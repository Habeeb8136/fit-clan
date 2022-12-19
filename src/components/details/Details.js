import React, { useState } from 'react'
import './details.css';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import db from '../../firebase';

export default function Details() {

    const [name, setName] = useState("");
    const [dob, setDob] = useState();
    const [weight, setWeight] = useState();
    const [activeMinutes, setActiveMinutes] = useState();
    const [meals, setMeals] = useState();

    const submitForm = async (e) => {
        e.preventDefault();
        const userColRef = collection(db, "user");
        await addDoc(userColRef, {
            name: name,
            dob: dob,
            weight: weight,
            activeMinutes: activeMinutes,
            timestamp: serverTimestamp(),
            mealsPerDay: meals
        })
    };

    return (
        <div className='details'>
            <form onSubmit={submitForm}>
                <h3>Please fill below details</h3>
                <div className="name_container my-2">
                    <label htmlFor="name">Your Full Name</label>
                    <div className="ans">
                        <input value={name}
                            onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder='John Doe' />
                    </div>
                </div>
                <div className="age_container my-2">
                    <label htmlFor="dob">Your Date of Birth</label>
                    <div className="ans">
                        <input value={dob}
                            onChange={(e) => setDob(e.target.value)} type="date" name="dob" id="dob" />
                    </div>
                </div>
                <div className="weight_container my-2">
                    <label htmlFor="weight">Your weight</label>
                    <div className="ans">
                        <input value={weight}
                            onChange={(e) => setWeight(e.target.value)} type="number" name="weight" id="weight" maxLength={3} placeholder='76' /> <small>Kg</small>
                    </div>
                </div>
                <div className="activeMinutes_container my-2">
                    <label htmlFor="activeMinutes">Minutes per day you can do exrsice</label>
                    <div className="ans">
                        <input value={activeMinutes}
                            onChange={(e) => setActiveMinutes(e.target.value)} type="number" maxLength={3} name="activeMinutes" id="activeMinutes" placeholder='45' /> <small>Minutes</small>
                    </div>
                </div>
                <div className="meals_container my-2">
                    <label htmlFor="meals">How many meals you'll consume per day</label>
                    <div className="ans">
                        <input value={meals}
                            onChange={(e) => setMeals(e.target.value)} type="number" name="meals" id="meals" placeholder='5' /> <small>Meals</small>
                    </div>
                </div>
                <button type="submit button" className='btn btn-primary my-2'>Submit</button>
            </form>
        </div>
    )
};

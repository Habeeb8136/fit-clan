import React from 'react';
import { UserAuth } from '../../AuthContext';

export default function Diet() {

    const {user} = UserAuth();

  return (
    <div className='diet bg-light p-5'>
        <h2>Hello {user && user.email}</h2>
        This is your personel diet plan.      
    </div>
  )
}

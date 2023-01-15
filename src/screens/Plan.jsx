import React, { useContext } from 'react'
import { NavUserContext } from '../App';

function Plan() {
  const {setIsPage} = useContext(NavUserContext);
  setIsPage("/plan");
  return (
    <div>
      Plan
    </div>
  )
}

export default Plan

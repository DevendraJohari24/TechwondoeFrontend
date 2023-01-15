import React, { useContext } from 'react'
import { NavUserContext } from '../App';

function General() {
  const {setIsPage} = useContext(NavUserContext);
  setIsPage("/");
  return (

    <div>
      General
    </div>
  )
}

export default General

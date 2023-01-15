import React, { useContext } from 'react'
import { NavUserContext } from '../App';

export default function Integrations() {
  const {setIsPage} = useContext(NavUserContext);
  setIsPage("/integrations");
  return (
    <div>
      Integrations
    </div>
  )
}

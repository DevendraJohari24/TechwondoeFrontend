import React, { useContext } from 'react'
import { NavUserContext } from '../App'

function Billing() {
  const {setIsPage} = useContext(NavUserContext);
  setIsPage("/billing");
  return (
    <div>Billing</div>
  )
}

export default Billing
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGhost} from "@fortawesome/free-solid-svg-icons";

const GhostIcon = () => {
  return (
    <div className='flex justify-center pt-8 pb-14'>
      <FontAwesomeIcon icon={faGhost} size="10x" style={{color: "#e9fa00"}} />
    </div>
  )
}

export default GhostIcon
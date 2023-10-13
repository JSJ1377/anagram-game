import React from 'react';
import {Link} from 'react-router-dom';

function AnagramPlayButton() {
  return(
    <Link className="btn btn-primary" to="/playAnagram">Play!</Link>
  )
}

export default AnagramPlayButton;
import React from 'react';
import {Link} from 'react-router-dom';

function PlayAnagramMainBtn() {
  return(
<Link className="btn btn-primary form-control" to="/anagram">Play!</Link>

  )
}

export default PlayAnagramMainBtn;
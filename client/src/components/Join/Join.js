import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="join-outer-container">
      <div className="join-inner-container">
        <h1 className="heading">&lt; Join <span className="lightgreen-color">chat</span> /&gt;</h1>
        <div>
          <input
            placeholder="Name"
            className="join-input"
            type="text"
            onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input
            placeholder="Room"
            className="join-input mt-20"
            type="text"
            onChange={(event) => setName(event.target.value)} />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;

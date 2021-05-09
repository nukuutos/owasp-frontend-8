import React from 'react';
import muks from './muks.jpg';

const Card = ({ data, className = '' }) => {
  const { username, avatar, comment } = data;
  return (
    <div className={`card ${className}`}>
      <div className="card__user">
        {/* <img src={avatar === 'muks' ? muks : null} className="card__avatar" /> */}
        <img src={muks} className="card__avatar" />
        <span className="card__username mt-s-3">{username}</span>
      </div>
      <p className="card__comment">{comment}</p>
    </div>
  );
};

export default Card;

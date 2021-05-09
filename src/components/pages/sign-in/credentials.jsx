import React from 'react';

const Credentials = () => {
  return (
    <div className="credentials">
      <div className="credentials__group">
        <span className="credentials__label">username: </span>
        <span className="credentials__value">usercoin</span>
      </div>
      <div className="credentials__group mt-m-1">
        <span className="credentials__label">password: </span>
        <span className="credentials__value">passdogword</span>
      </div>
    </div>
  );
};

export default Credentials;

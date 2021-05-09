import React, { useState } from 'react';
import Card from './card/card';
import AddComment from './add-comment';
import Transfer from './transfer';

const Main = ({ username = 'usercoin', account = 300 }) => {
  const [isTransfer, setIsTransfer] = useState(false);

  return (
    <div className="main">
      <h1 className="logo logo--main">Dogeclubhouse</h1>

      <span className="main__account">
        {username},{account}
      </span>
      <div onClick={() => setIsTransfer(true)} className="btn btn--primary btn--flat main__transfer mt-m-1">
        Transfer
      </div>

      <Card
        data={{
          username: 'Ilon Muks',
          comment: 'Frodo was the underdoge, All thought he would fail, Himself most of all.',
        }}
        className="main__card mt-b-3"
      />

      <AddComment className="main__add-comment mt-b-3" />
      {isTransfer && <Transfer onClose={() => setIsTransfer(false)} />}
    </div>
  );
};

export default Main;

import React from 'react';
import Modal from '../../utils/modal/modal';

const Transfer = ({ onClose }) => {
  return (
    <Modal onClickClose={onClose}>
      <div className="transfer">
        <h2 className="transfer__heading heading">Transfer</h2>
        <form className="transfer__form mt-b-1" action="http://localhost:5000/api/v1/transfer" method="post">
          <div className="label mb-s-1">Recipient’s username</div>
          <input className="transfer__input input mb-m-1" type="text" name="username" />
          <div className="label mb-s-1">Amount</div>
          <input className="transfer__input input" type="text" name="username" />
          <span className="transfer__text mt-b-1">Sorry, not working</span>
        </form>
      </div>
    </Modal>
  );
};

export default Transfer;

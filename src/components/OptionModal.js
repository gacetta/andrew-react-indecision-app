import React from "react";
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={Boolean(props.selectedOption)}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel='Selected Option'
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Roger That, Captain Jam Fingers!</button>
  </Modal>
);

export default OptionModal;
import React from "react";

const Action = (props) => (
  <div>
    <button 
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What Should I Do, Mr. Roboto?
    </button>
  </div>
)

export default Action;
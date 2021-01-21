import React from 'react'; 


export default function Button(props) { 
  const {children, onButtonClick, buttonType, show} = props; 

  return (<>
    <button
      type="button"
      className="col col-sm-2 btn previous-next-buttons"
      onClick={() => {onButtonClick(buttonType);}}
      style={!show ? { visibility: "hidden" } : { padding: "5px" }}
    >
      {children}
    </button>
  </>); 
}
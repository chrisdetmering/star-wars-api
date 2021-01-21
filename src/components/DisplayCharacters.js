import React from "react";
import Button from "./Button"; 
import Character from "./Character"; 

export default function DisplayCharacters(props) {
  
    const characters = props.characters.map((character, index) => (
      <Character {...character} key={index}/>
    ));

    return (
      <div className="display-item-container">
        <div className="row display-row-header">
          <div className="col col-sm-3">Name</div>
          <div className="col col-sm-2">Birthdate</div>
          <div className="col col-sm-1">Height</div>
          <div className="col col-sm-1">Weight</div>
          <div className="col col-sm-2">Homeworld</div>
          <div className="col col-sm-3">Species</div>
        </div>
        <div className="characters-row-container">{characters}</div>

        <div className="pages-container">
          <Button 
              onButtonClick={props.handlePageSubmit}
              buttonType="previous"
              show={props.previous}>
            Previous Page
          </Button>
          <Button 
              onButtonClick={props.handlePageSubmit}
              buttonType={"next"}
              show={props.next}> 
             Next Page
          </Button>
        </div>
      </div>
    );

}


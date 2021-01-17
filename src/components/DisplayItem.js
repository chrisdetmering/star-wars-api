import React from "react";

class DisplayItem extends React.Component {
  render() {
    const characters = this.props.characters.map((character) => (
      <div className="row">
        <div className="col col-sm-3 character-row">{character.name}</div>
        <div className="col col-sm-2 character-row">{character.birth_year}</div>
        <div className="col col-sm-1 character-row">{character.height}</div>
        <div className="col col-sm-1 character-row">{character.mass}</div>{" "}
        <div className="col col-sm-2 character-row">{character.homeworld}</div>
        <div className="col col-sm-3 character-row">{character.species}</div>
      </div>
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
        <div>{characters}</div>
        <div className="pages-container">
          <button
            type="button"
            className="col col-sm-4 btn previous-next-buttons"
            onclick={(e) => {
              this.props.handlePageSubmit("previousButton");
            }}
          >
            Previous Page
          </button>
          <button
            type="button"
            className="col col-sm-4 btn previous-next-buttons"
            onclick={(e) => {
              this.props.handlePageSubmit("nextButton");
            }}
          >
            Next Page
          </button>
        </div>
      </div>
    );
  }
}
export default DisplayItem;

import React from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import DisplayCharacters from "./components/DisplayCharacters";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      pages: {}
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handlePageSubmit = this.handlePageSubmit.bind(this);
    this.getMissingData = this.getMissingData.bind(this); 
  }

  componentDidMount() {
    this.getCharacters("https://swapi.dev/api/people/");
  }


  async getCharacters(url) {
    const characters = await axios.get(url);

    for (const character of characters.data.results) {
        character.homeWorld = await this.getMissingData(character.homeworld); 
      
        if (character.species.length === 0) {
        character.species = "human";
      } else {
        character.species = await this.getMissingData(character.species[0]);
      }
    }

    this.setState({
      characters: characters.data.results,
      pages: { 
        previous: this.httpToHttps(characters.data.previous), 
        next: this.httpToHttps(characters.data.next)
      }
    });
  }


  async getMissingData(missingData) { 
    const urlHttps = this.httpToHttps(missingData); 
    const info = await axios.get(urlHttps);
    return info.data.name; 
  }

  httpToHttps(url) { 
    if (!url) {return null; }
    return url.replace(/^http:\/\//i, 'https://'); 
  }


  handleSearchSubmit(event) {
    event.preventDefault();
    const searchTerm = event.target.button.value;
    this.getCharacters("https://swapi.py4e.com/api/people/?search=" + searchTerm);
  }

  handlePageSubmit(buttonName) {
   const url = this.state.pages[buttonName]; 
    this.getCharacters(url);
  }

 

  render() {
    return (
      <div className="App">
        <Header />
        <InputForm
          characters={this.state.characters}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <DisplayCharacters
          characters={this.state.characters}
          previous={this.state.pages.previous}
          next={this.state.pages.next}
          handlePageSubmit={this.handlePageSubmit}
        />
      </div>
    );
  }
}

export default App;

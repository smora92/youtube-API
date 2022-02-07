import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import youtube from './api/youtube';
import BuildingsList from './BuildingsList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { buildings: [] }
  }

  onSearchSubmit = async (searchQuery) => {
    // console.log(searchQuery)
    const response = await youtube.get('/search',
      {
        params: { q: searchQuery }
      }
    )
    this.setState({ buildings: response.data.items })
    // console.log(response.data)
  }

  render() {
    return (
      <div className="App">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        {/* this is the parent wire it to the child function in SearchBar */}
        <BuildingsList buildings={this.state.buildings} />
        I have {this.state.buildings.length} videos
      </div>
    );
  }
}

export default App;

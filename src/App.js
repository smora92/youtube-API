import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import youtube from './api/youtube';
import BuildingsList from './BuildingList';
import BuildingDetail from './BuildingDetail';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buildings: [],
      selectedBuilding: null
    }
  }

  //  this is the default search shown to user when the app first loads, without which 
  // only a blank screen is shown
  componentDidMount() {
    this.onSearchSubmit('cars')
  }


  onSearchSubmit = async (searchQuery) => {
    // console.log(searchQuery)
    const response = await youtube.get('/search',
      {
        params: { q: searchQuery }
      }
    )
    this.setState({
      buildings: response.data.items,
      selectedBuilding: response.data.items[0] //sets the first video as default on iFrame on load
    })
    console.log(response.data)
  }
  onBuildingSelect = (building) => {
    this.setState({ selectedBuilding: building })

  }
  //wire the onBuildingSelect function to the child buildingsList as a prop

  render() {
    return (
      <div className="App">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        {/* this is the parent wire it to the child function in SearchBar */}

        <div className='ui grid'>
          <div className='ui row'>

            <div className='eleven wide column'>
              <BuildingDetail building={this.state.selectedBuilding} />
            </div>

            <div className='five wide column'>
              <BuildingsList
                buildings={this.state.buildings}
                onBuildingSelect={this.onBuildingSelect}
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

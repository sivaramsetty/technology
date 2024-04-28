// Write your code here

// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value.toLowerCase(),
    })
  }

  render() {
    const {searchInput} = this.state

    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="mainCon">
        <h1>Destination Search</h1>
        <div>
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <p>Search input: {searchInput}</p>
        </div>
        <ul>
          <DestinationItem destinationItem={searchResults} />
        </ul>
        <p>Project with react.js</p>
        <p>Created by sivaram</p>
      </div>
    )
  }
}

export default DestinationSearch

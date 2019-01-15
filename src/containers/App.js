import React, { Component } from 'react';
import './App.css';
import RobotList from '../components/RobotList';
import SearchingField from '../components/SearchingField';
import Scroll from '../components/Scroll'
import 'tachyons';

class App extends Component {

  state = ({
    searchingValue: '',
    robots: []

  })

  handleSearching = (e) => {
    this.setState({
      searchingValue: e.target.value,
    })
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  render() {
    const { searchingValue, robots } = this.state;
    const newRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchingValue.toLowerCase()))
    return (

      <div className='tc'>
        <h1 f2>Robofriends</h1>
        <SearchingField change={this.handleSearching} />
        {!newRobots.length ?
          <h1 className='tc'>Loading</h1> :
          <Scroll>
            <RobotList robots={newRobots} />
          </Scroll>
        }
      </div>


    )

  }
}

export default App;

// Write your code here

import {Component} from 'react'

import './index.css'
class RandomNumberGenerator extends Component {
  state = {number: 0}
  genaratenumber = () => Math.ceil(Math.random() * 100)

  getnumber = () => {
    const randomnumber = this.genaratenumber()

    this.setState({number: randomnumber})
  }
  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.getnumber}>
            Generate
          </button>
          <p className="showingnumber">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

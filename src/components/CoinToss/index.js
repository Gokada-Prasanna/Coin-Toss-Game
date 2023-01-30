// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    totalScore: 0,
    totalHeads: 0,
    totalTails: 0,
  }

  onClickTossButton = () => {
    const tossValue = Math.floor(Math.random() * 2)

    if (tossValue === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalScore: prevState.totalScore + 1,
        totalHeads: prevState.totalHeads + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHead: false,
        totalScore: prevState.totalScore + 1,
        totalTails: prevState.totalTails + 1,
      }))
    }
  }

  render() {
    const {isHead, totalScore, totalHeads, totalTails} = this.state
    const imageUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <div>
            <img src={imageUrl} alt="toss result" className="image" />
          </div>
          <button
            type="button"
            className="tossButton"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="score">Total: {totalScore}</p>
            <p className="score">Heads: {totalHeads}</p>
            <p className="score">Tails: {totalTails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

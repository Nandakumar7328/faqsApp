import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClicked: false}

  showAnswer = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const {listOfQuestions} = this.props
    const {questionText, answerText} = listOfQuestions

    return (
      <li className="li-container">
        <div className="question-button-container">
          <h1 className="question-heading">{questionText}</h1>

          <button className="btn" type="button" onClick={this.showAnswer}>
            {isClicked ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
        {isClicked && (
          <div>
            <hr className="line" /> <p className="answer-para">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem

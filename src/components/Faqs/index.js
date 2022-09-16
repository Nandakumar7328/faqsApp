import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="ul-container">
            {faqsList.map(eachList => (
              <FaqItem key={eachList.id} listOfQuestions={eachList} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

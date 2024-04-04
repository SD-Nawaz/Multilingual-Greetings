import './App.css'
import {Component} from 'react'
import LanguageItem from './components/LanguageItem'
import Tabs from './components/Tabs'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here

class App extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  clickTabItem = tabValue => {
    this.setState({activeId: tabValue})
  }

  getFilteredList = () => {
    const {activeId} = this.state
    const filteredList = languageGreetingsList.filter(
      eachItem => eachItem.id === activeId,
    )
    return filteredList
  }

  render() {
    const {activeId} = this.state
    const filteredList = this.getFilteredList()
    return (
      <>
        <div className="language-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="tab-list">
            {languageGreetingsList.map(eachLanguage => (
              <Tabs
                key={eachLanguage.id}
                tabDetails={eachLanguage}
                isActiveId={eachLanguage.id === activeId}
                clickTabItem={this.clickTabItem}
              />
            ))}
          </ul>
          {filteredList.map(eachItem => (
            <LanguageItem key={eachItem.id} languageDetails={eachItem} />
          ))}
        </div>
      </>
    )
  }
}

export default App

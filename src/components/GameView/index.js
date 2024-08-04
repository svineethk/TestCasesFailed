import {Component} from 'react'
import {
  Container,
  TitleContainer,
  ScoreContainer,
  GameContainer,
  ListItem,
  RulesContainer,
  GameResultIcon,
  EachResultIcon,
  GameResultContainer,
  PlayAgainButton,
  ScoreNumber,
} from './styledComponents'
import IconElement from '../IconElement'
import ReactPopUp from '../ReactPopUp'
import {ImageElement} from '../IconElement/styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameView extends Component {
  state = {
    score: 0,
    isGameFinished: false,
    userChoice: '',
    opponentChoice: '',
    setFinalResult: '',
  }

  determineWinner = (userChoice, randomChoice) => {
    if (userChoice.id === randomChoice.id) {
      this.setState({setFinalResult: 'IT IS DRAW'})
    } else if (userChoice.id === 'ROCK') {
      if (randomChoice.id === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          setFinalResult: 'YOU WON',
        }))
      } else if (randomChoice.id === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          setFinalResult: 'YOU LOSE',
        }))
      }
    } else if (userChoice.id === 'PAPER') {
      if (randomChoice.id === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          setFinalResult: 'YOU WON',
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          setFinalResult: 'YOU LOSE',
        }))
      }
    } else if (userChoice.id === 'SCISSORS') {
      if (randomChoice.id === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          setFinalResult: 'YOU WON',
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          setFinalResult: 'YOU LOSE',
        }))
      }
    }
  }

  onClickIconElement = id => {
    const arrayElement = ['ROCK', 'PAPER', 'SCISSORS']
    const indexValue = Math.floor(Math.random() * 3)
    const userChoice = choicesList.find(object => object.id === id)
    const randomChoice = choicesList.find(
      object => object.id === arrayElement[indexValue],
    )

    this.determineWinner(userChoice, randomChoice)
    this.setState({
      isGameFinished: true,
      userChoice,
      opponentChoice: randomChoice,
    })
  }

  GamePlay = () => (
    <GameContainer>
      {choicesList.map(eachList => (
        <ListItem key={eachList.id}>
          <IconElement
            data-testid={`${eachList.id.toLowerCase()}Button`}
            eachList={eachList}
            onClickIconElement={this.onClickIconElement}
          />
        </ListItem>
      ))}
    </GameContainer>
  )

  GameResult = () => {
    const {userChoice, opponentChoice, setFinalResult} = this.state

    return (
      <>
        <GameResultContainer as="div">
          <GameResultIcon>
            <EachResultIcon>
              <h1>YOU</h1>
              <ImageElement src={userChoice.imageUrl} alt="your choice" />
            </EachResultIcon>
            <EachResultIcon>
              <h1>OPPONENT</h1>
              <ImageElement
                src={opponentChoice.imageUrl}
                alt="opponent choice"
              />
            </EachResultIcon>
          </GameResultIcon>
        </GameResultContainer>
        <h1>{setFinalResult}</h1>
        <PlayAgainButton onClick={this.onClickedPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </>
    )
  }

  onClickedPlayAgain = () => {
    this.setState({
      isGameFinished: false,
      userChoice: '',
      opponentChoice: '',
      setFinalResult: '',
    })
  }

  render() {
    const {score, isGameFinished} = this.state
    return (
      <Container>
        <TitleContainer>
          <h1>
            ROCK <br /> PAPER <br />
            SCISSORS
          </h1>
          <ScoreContainer>
            <p>Score</p>
            <ScoreNumber>{score}</ScoreNumber>
          </ScoreContainer>
        </TitleContainer>
        {isGameFinished ? this.GameResult() : this.GamePlay()}
        <RulesContainer>
          <ReactPopUp />
        </RulesContainer>
      </Container>
    )
  }
}

export default GameView

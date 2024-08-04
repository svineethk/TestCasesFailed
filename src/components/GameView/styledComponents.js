import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    height: 100vh;
    width: 100vw;
  }
`

export const TitleContainer = styled.div`
  height: 150px;
  width: 680px;
  background-color: #223a5f;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    margin-top: 15px;
    width: 440px;
  }
`
export const ScoreContainer = styled.div`
  height: 110px;
  width: 130px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  background-color: #ffffff;
  color: #223a5f;
  font-family: Bree Serif;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreNumber = styled.p`
  font-family: Roboto;
  font-weight: bold;
  font-size: 30px;
  padding: 0px;
  margin: 0px;
`

export const GameContainer = styled.ul`
  height: 400px;
  width: 680px;
  margin-left: 100px;
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    height: 300px;
    width: 600px;
    margin-right: 50px;
  }
`

export const GameResultContainer = styled(GameContainer)`
  height: 400px;
  width: 680px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 2px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 0px;

  @media (max-width: 576px) {
    height: 220px;
    width: 490px;
    align-self: center;
  }
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const RulesContainer = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 576px) {
    margin-top: 30px;
  }
`

export const GameResultIcon = styled.div`
  height: 180px;
  width: 680px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 576px) {
    width: 495px;
  }
`

export const EachResultIcon = styled.div`
  height: 180px;
  width: 340px;
  text-align: center;

  @media (max-width: 576px) {
    width: 495px;
  }
`
export const PlayAgainButton = styled.button`
  height: 50px;
  width: 160px;
  background-color: #ffffff;
  font-family: Bree Serif;
  font-weight: bold;
  color: #223a5f;
  margin-right: 20px;
  border-radius: 8px;
  margin-right: 0px;
  cursor: pointer;
`

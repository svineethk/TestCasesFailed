import styled from 'styled-components'

export const RulesButton = styled.button`
  height: 50px;
  width: 100px;
  background-color: #ffffff;
  font-family: Bree Serif;
  font-weight: bold;
  color: #223a5f;
  margin-right: 20px;
  border-radius: 8px;
  cursor: pointer;
`

export const PopupContainer = styled.div``

export const InstructionContainer = styled.div`
  height: 70vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: #ffffff;
  padding-right: 20px;
  padding-top: 20px;

  @media (max-width: 576px) {
    height: 320px;
    width: 400px;
  }
`
export const InstructionImage = styled.img`
  height: 60vh;
  width: 45vw;
  align-self: center;
  margin-top: 10px;

  @media (max-width: 576px) {
    height: 250px;
    width: 350px;
  }
`

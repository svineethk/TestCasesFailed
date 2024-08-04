import styled from 'styled-components'

export const ButtonContainer = styled.button`
  height: 145px;
  width: 165px;
  cursor: pointer;
  margin-right: 150px;
  margin-bottom: 50px;
  border-radius: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  margin-left: 5px;

  @media (max-width: 576px) {
    margin-right: 100px;
  }
`
export const ImageElement = styled.img`
  height: 190px;
  width: 190px;

  @media (max-width: 576px) {
    height: 140px;
    width: 140px;
  }
`

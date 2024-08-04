import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  PopupContainer,
  InstructionContainer,
  RulesButton,
  InstructionImage,
} from './styledComponents'

const ReactPopUp = () => (
  <PopupContainer>
    <Popup modal trigger={<RulesButton>RULES</RulesButton>}>
      {close => (
        <>
          <InstructionContainer>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <RiCloseLine alt={close} />
            </button>
            <InstructionImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </InstructionContainer>
        </>
      )}
    </Popup>
  </PopupContainer>
)

export default ReactPopUp

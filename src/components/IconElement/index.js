import {ButtonContainer, ImageElement} from './styledComponents'

const IconElement = props => {
  const {eachList, onClickIconElement} = props
  const {id, imageUrl} = eachList

  const onClickedIcon = () => {
    onClickIconElement(id)
  }

  return (
    <ButtonContainer
      data-testid={`${id.toLowerCase()}Button`}
      onClick={onClickedIcon}
    >
      <ImageElement src={imageUrl} alt={id} />
    </ButtonContainer>
  )
}

export default IconElement

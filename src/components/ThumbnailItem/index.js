// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImageItem, onChangeImage, isSelected} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachImageItem

  const onClickedImage = () => {
    onChangeImage(id)
  }

  const selectedThumbnailClassName = isSelected
    ? `thumbnail-image`
    : `thumbnail-image is-selected`

  return (
    <li className="thumbnail-images-container">
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={selectedThumbnailClassName}
          onClick={onClickedImage}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem

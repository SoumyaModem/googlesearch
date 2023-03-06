import './index.css'

const SuggestionItem = props => {
  const {suggestion, googleSuggestion} = props

  const onSearch = () => {
    googleSuggestion(suggestion)
  }
  return (
    <li className="list">
      <p className="name">{suggestion}</p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onSearch}
      />
    </li>
  )
}
export default SuggestionItem

import './index.css'

const Tabs = props => {
  const {tabDetails, isActiveId, clickTabItem} = props
  const {buttonText, id} = tabDetails

  const onClickTab = () => {
    clickTabItem(id)
  }

  const activeClassName = isActiveId ? 'button active' : 'button'

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={activeClassName}>
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs

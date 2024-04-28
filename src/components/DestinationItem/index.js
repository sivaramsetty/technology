// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props

  return (
    <div className="con">
      {destinationItem.map(each => (
        <li key={each.id} className="listCon">
          <img src={each.imgUrl} alt={each.name} className="logoImg" />
          <p>{each.name}</p>
        </li>
      ))}
    </div>
  )
}

export default DestinationItem

import './Card.css'

const Card = (props) => {
  const {data, onClick, buttonText, cardClass, key} = props;
  return (
    <div key={key} className={cardClass ? 'card-less-margin' : 'card'}>
      <a className="card-link" href={data.Link} rel="noreferrer" target="_blank">
        {data.heading ?
          <h3 className="card-heading">{data.heading}</h3>
          : null}
        {data.API ?
          <h3 className="card-title">{data.API}</h3>
          : null}
        {data.Category ?
          <p className="card-category"><strong>Category:</strong> {data.Category}</p>
          : null
        }
        {data.Description ?
          <p className="card-description"><strong>Description:</strong> {data.Description || 'Click to know more'}</p>
          : null}
        {data.Auth ?
          <p className="card-authentication"><strong>Authentication:</strong> {data.Auth || 'None'}</p>
          : null}
      </a>
      {buttonText
        ? <button className="btn" onClick={onClick}>{buttonText}</button>
        : null
      }
    </div>)
}

export default Card;

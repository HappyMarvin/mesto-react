function Card (props) {
  const isOwn = props.userID === props.card.owner._id || '';
  const isLiked = props.card.likes.some(like => like._id === props.userID) || '';
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <div className="card__image-wrapper">
        <img src={props.card.link} alt={props.card.name} className="card__image" onClick={handleClick}/>
      </div>
      <div className="card__inner-wrapper">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-wrapper">
          <button className={`card__like ${isLiked && 'card__like_active'}`} type="button" aria-label="Лайк"></button>
          <span className="card__like-count">{props.card.likes.length}</span>
        </div>
      </div>
      <button 
        className={`card__delete ${isOwn && 'card__delete_show'}`}
        type="button" 
        aria-label="Удалить карточку">
      </button>
    </li>
  )
}
export default Card
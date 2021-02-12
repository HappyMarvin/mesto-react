import { React, useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import Card from './Card'

function Main (props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  function handleCardLike (card, isLiked) {
    const method = isLiked ? 'DELETE' : 'PUT';
    api.switchLike(card, method)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    .catch(e => console.error(e.message))
  }

  function handleCardDelete (card) {
    api.deleteCard(card)
    .then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    })
    .catch(e => console.error(e.message))
  }

  useEffect(() => {
      api.getInitialCards()
      .then(setCards)
      .catch(e => console.error(e.message))
  },[]);

  return (
    <div className="main">
          <section className="profile">
            <button className="profile__edit-avatar" onClick={props.onEditAvatar} >
              <img src={currentUser.avatar} alt="аватар пользопателя" className="profile__avatar" />
            </button>
            <div className="profile__info">
              <div className="profile__name-wrapper">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button className="profile__edit" type="button" aria-label="Редактировать профайл" onClick={props.onEditProfile} />
              </div>
              <p className="profile__description">{currentUser.about}</p>
            </div>
            <button className="profile__add" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace} />
          </section>

          <section className="gallery">
            
            <ul className="gallery__list">
              {cards.map(card => {
                return (
                  <Card
                    card={card}
                    onCardClick={props.onCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    key={card._id}
                  />
                )
              })}
            </ul>
          </section>
        </div>
  )
}

export default Main
import React from 'react';
import api from '../utils/api';
import Card from './Card'

function Main (props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  const [userID, setUserID] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserData(),
      api.getInitialCards()
    ])
      .then(values => {
        const [userData, initialCards] = values;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setUserID(userData._id);
        setCards(initialCards);
      })
      .catch(e => console.error(e.message))
  },[]);

  return (
    <div className="main">
          <section className="profile">
            <button className="profile__edit-avatar" onClick={props.onEditAvatar} >
              <img src={userAvatar} alt="аватар пользопателя" className="profile__avatar" />
            </button>
            <div className="profile__info">
              <div className="profile__name-wrapper">
                <h1 className="profile__name">{userName}</h1>
                <button className="profile__edit" type="button" aria-label="Редактировать профайл" onClick={props.onEditProfile} />
              </div>
              <p className="profile__description">{userDescription}</p>
            </div>
            <button className="profile__add" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace} />
          </section>

          <section className="gallery">
            
            <ul className="gallery__list">
              {cards.map(card => {
                return (
                  <Card card={card} userID={userID} onCardClick={props.onCardClick} key={card._id} />
                )
              })}
            </ul>
          </section>
        </div>
  )
}

export default Main
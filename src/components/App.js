import { React, useEffect, useState } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import DeleteCardPopup from './DeleteCardPopup'
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from './ImagePopup'
import api from '../utils/api';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopup, setIsDeleteCardPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserData()
      .then(setCurrentUser)
      .catch(e => console.error(e.message))
    api.getInitialCards()
      .then(setCards)
      .catch(e => console.error(e.message))
  },[]);
  //handle карточек
  function handleCardLike (card, isLiked) {
    const method = isLiked ? 'DELETE' : 'PUT';
    api.switchLike(card, method)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    .catch(e => console.error(e.message))
  }

  
  //Открываем/закрываем попапы
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function handleCardDelete(card) {
    setIsDeleteCardPopup(card)
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
    setIsDeleteCardPopup(false);
  }

  //Обработка событий в попапах
  function handleUpdateUser(data) {
    api.setUserData(data)
      .then(userData => {
        setCurrentUser(userData);
        setIsEditProfilePopupOpen(false);
      })
      .catch(e => console.error(e.message))
  }

  function handleUpdateAvatar(url) {
    api.addAvatar(url)
      .then(userData => {
        setCurrentUser(userData);
        setIsEditAvatarPopupOpen(false);
      })
      .catch(e => console.error(e.message))
  }

  function handleAddPlace (data) {
    api.addCard(data)
      .then(newCard => {
        setCards([newCard, ...cards]);
        setIsAddPlacePopupOpen(false);
      })
      .catch(e => console.error(e.message))
  }

  function handleCardDeleteSubmit (card, evt) {
    evt.preventDefault();
    api.deleteCard(card)
    .then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
      setIsDeleteCardPopup(false);
    })
    .catch(e => console.error(e.message))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
        </div>

        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />

        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar}
        />

        <DeleteCardPopup
          card={isDeleteCardPopup} 
          onClose={closeAllPopups}
          onDeleteCard={handleCardDeleteSubmit}
        />
        
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
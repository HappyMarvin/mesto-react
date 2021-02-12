import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from './ImagePopup'
import api from '../utils/api';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserData()
      .then(setCurrentUser)
      .catch(e => console.error(e.message))
  },[]);


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

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

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
      isEditAvatarPopupOpen(false);
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

        <PopupWithForm
          name="new-place"
          title="Новое место"
          isOpen={isEAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input type="text"
            name="popup-name"
            className="popup__text-input popup__text-input_place-name"
            maxLength="30"
            minLength="2"
            required
            placeholder="Название"
            id="place-name" />
          <span className="popup__error" id="place-name-error"></span>
          <input type="url"
            required
            name="popup-description"
            className="popup__text-input popup__text-input_place-link"
            placeholder="Ссылка на картинку"
            id="place-description" />
          <span className="popup__error" id="place-description-error"></span>
          <button className="popup__submit popup__submit_disabled" type="submit" name="popup-submit">Создать</button>
        </PopupWithForm>

        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupWithForm
          name="delete"
          title="Вы уверены?"
          isOpen={false}
          onClose={closeAllPopups}
        >
          <button className="popup__submit" type="submit" name="popup-submit">Да</button>
        </PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);


  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick (card) {
    setSelectedCard(card);
  }

  function closeAllPopups () {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
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

      <PopupWithForm 
        name="profile" 
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text"
          name="popup-name"
          className="popup__text-input popup__text-input_name"
          maxLength="40"
          minLength="2"
          required
          id="profile-name"
          placeholder="Имя" />
        <span className="popup__error" id="profile-name-error"></span>
        <input type="text"
          name="popup-description"
          className="popup__text-input popup__text-input_description"
          maxLength="200"
          minLength="2"
          required
          id="profile-description"
          placeholder="Вид деятельности" />
        <span className="popup__error" id="profile-description-error"></span>
        <button className="popup__submit popup__submit_disabled" type="submit" name="popup-submit" disabled>Сохранить</button>
      </PopupWithForm>

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

      <PopupWithForm
        name="add-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input type="url"
          required
          name="avatar-link"
          className="popup__text-input popup__text-input_place-link"
          placeholder="Ссылка на аватар"
          id="avatar-link" />
        <span className="popup__error" id="avatar-link-error"></span>
        <button className="popup__submit popup__submit_disabled" type="submit" name="popup-submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm 
        name="delete" 
        title="Вы уверены?"
        isOpen={false}
        onClose={closeAllPopups}
        >
          <button className="popup__submit" type="submit" name="popup-submit">Да</button>
        </PopupWithForm>
    </div>
  );
}

export default App;
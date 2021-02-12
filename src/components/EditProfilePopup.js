import PopupWithForm from './PopupWithForm';
import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  
  useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser, isOpen])

  function onChangeName(e) {
    setName(e.target.value)
  }
  function onChangeDescription(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input type="text"
        name="popup-name"
        className="popup__text-input popup__text-input_name"
        maxLength="40"
        minLength="2"
        required
        id="profile-name"
        placeholder="Имя"
        value={name}
        onChange={onChangeName} />
      <span className="popup__error" id="profile-name-error"></span>
      <input type="text"
        name="popup-description"
        className="popup__text-input popup__text-input_description"
        maxLength="200"
        minLength="2"
        required
        id="profile-description"
        placeholder="Вид деятельности"
        value={description}
        onChange={onChangeDescription} />
      <span className="popup__error" id="profile-description-error"></span>
      <button className="popup__submit popup__submit_disabled" type="submit" name="popup-submit">Сохранить</button>
    </PopupWithForm>
  )
}
export default EditProfilePopup
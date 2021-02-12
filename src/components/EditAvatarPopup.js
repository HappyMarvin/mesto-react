import PopupWithForm from './PopupWithForm';
import { useRef } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar}) {

  const inputAvatar = useRef()

  function handleSubmit(e) {
    e.preventDefault();
  
  onUpdateAvatar({
      avatar: inputAvatar.current.value,
    });
  } 

  return (
    <PopupWithForm
          name="add-avatar"
          title="Обновить аватар"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <input type="url"
            required
            name="avatar-link"
            className="popup__text-input popup__text-input_place-link"
            placeholder="Ссылка на аватар"
            id="avatar-link"
            ref={inputAvatar} />
          <span className="popup__error" id="avatar-link-error"></span>
          <button className="popup__submit popup__submit_disabled" type="submit" name="popup-submit">Сохранить</button>
        </PopupWithForm>
  )
}

export default EditAvatarPopup
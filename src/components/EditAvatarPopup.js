import PopupWithForm from './PopupWithForm';
import { useRef, useState, useEffect } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar}) {
  const [valid, setValid] = useState(false);
  const [validMessage, setValidMessage] = useState('');
  const inputAvatar = useRef()

  useEffect(()=>{
    setValid(false);
    inputAvatar.current.value = '';
    setValidMessage('');
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputAvatar.current.value,
    });
  }

  function onChange(e) {
    setValid(e.target.validity.valid);
    setValidMessage(e.target.validationMessage);
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
            ref={inputAvatar}
            onChange={onChange} />
          <span className="popup__error" id="avatar-link-error">{validMessage}</span>
          <button
            className={`popup__submit ${valid ? '' : 'popup__submit_disabled'}`}
            type="submit"
            name="popup-submit"
            disabled={!valid}
          >Сохранить</button>
        </PopupWithForm>
  )
}

export default EditAvatarPopup
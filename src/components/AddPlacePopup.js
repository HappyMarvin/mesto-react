import PopupWithForm from './PopupWithForm';
import { useState } from "react";

function AddPlacePopup({isOpen,onClose}) {
  return (
    <PopupWithForm
          name="new-place"
          title="Новое место"
          isOpen={isOpen}
          onClose={onClose}
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
  )
}

export default AddPlacePopup
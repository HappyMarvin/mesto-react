function ImagePopup () {
  return (
    <section className="popup popup_image">
        <div className="popup__container">
          <img src="#" alt="Фото места" className="popup__image" />
          <h2 className="popup__image-title">Фото места</h2>
          <button className="popup__close popup__close_image" type="button" aria-label="Закрыть фото"></button>
        </div>
      </section>
  )
}

export default ImagePopup
function Main () {
  return (
    <div className="main">
          <section className="profile">
            <button className="profile__edit-avatar">
              <img src="<%=require('./images/avatar.png')%>" alt="аватар пользопателя" className="profile__avatar" />
            </button>
            <div className="profile__info">
              <div className="profile__name-wrapper">
                <h1 className="profile__name"></h1>
                <button className="profile__edit" type="button" aria-label="Редактировать профайл"></button>
              </div>
              <p className="profile__description"></p>
            </div>
            <button className="profile__add" type="button" aria-label="Добавить карточку"></button>
          </section>

          <section className="gallery">
            <ul className="gallery__list">
            </ul>
          </section>
        </div>
  )
}

export default Main
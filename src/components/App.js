import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main />
        <Footer />
        
      </div>

      <section className="popup popup_profile">
        <form action="#" className="popup__form popup__form_profile" name="profile-form" novalidate>
          <h2 className="popup__title">Редактировать профиль</h2>
          <input type="text"
            name="popup-name"
            className="popup__text-input popup__text-input_name"
            maxlength="40"
            minlength="2"
            required
            id="profile-name"
            placeholder="Имя" />
          <span className="popup__error" id="profile-name-error"></span>
          <input type="text"
            name="popup-description"
            className="popup__text-input popup__text-input_description"
            maxlength="200"
            minlength="2"
            required
            id="profile-description"
            placeholder="Вид деятельности" />
          <span className="popup__error" id="profile-description-error"></span>
          <button className="popup__submit popup__submit_disabled" type="submit" name="popup-submit" disabled>Сохранить</button>
          <button className="popup__close popup__close_profile" type="button" aria-label="Закрыть форму"></button>
        </form>
      </section>

      <section className="popup popup_image">
        <div className="popup__container">
          <img src="#" alt="Фото места" className="popup__image" />
          <h2 className="popup__image-title">Фото места</h2>
          <button className="popup__close popup__close_image" type="button" aria-label="Закрыть фото"></button>
        </div>
      </section>

      <section className="popup popup_new-place">
        <form action="#" className="popup__form popup__form_place" name="new-place-form" novalidate>
          <h2 className="popup__title">Новое место</h2>
          <input type="text"
            name="popup-name"
            className="popup__text-input popup__text-input_place-name"
            maxlength="30"
            minlength="2"
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
          <button className="popup__close popup__close_new-place" type="button" aria-label="Закрыть форму"></button>
        </form>
      </section>

      <section className="popup popup_add-avatar">
        <form action="#" className="popup__form popup__form_avatar" name="avatar-form" novalidate>
          <h2 className="popup__title">Обновить аватар</h2>
          <input type="url"
            required
            name="avatar-link"
            className="popup__text-input popup__text-input_place-link"
            placeholder="Ссылка на аватар"
            id="avatar-link" />
          <span className="popup__error" id="avatar-link-error"></span>
          <button className="popup__submit popup__submit_disabled" type="submit" name="popup-submit">Сохранить</button>
          <button className="popup__close popup__close_new-place" type="button" aria-label="Закрыть форму"></button>
        </form>
      </section>

      <section className="popup popup_delete">
        <form action="#" className="popup__form popup__form_delete" name="delete-form" novalidate>
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__submit" type="submit" name="popup-submit">Да</button>
          <button className="popup__close popup__close_delete" type="button" aria-label="Закрыть форму"></button>
        </form>
      </section>

      <template id="card-template">
        <li className="card">
          <div className="card__image-wrapper">
            <img src="images/gal-1.jpg" alt="Ямал" className="card__image" />
          </div>
          <div className="card__inner-wrapper">
            <h2 className="card__title">Ямал</h2>
            <div className="card__like-wrapper">
              <button className="card__like" type="button" aria-label="Лайк"></button>
              <span className="card__like-count"></span>
            </div>
          </div>
          <button className="card__delete" type="button" aria-label="Удалить карточку"></button>
        </li>
      </template>
    </div>
  );
}

export default App;

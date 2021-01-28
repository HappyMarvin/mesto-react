function PopupWithForm (props) {
  return (
    <section className={`popup popup_${props.name} ${props.isOpen && 'popup_show'}`}>
        <form action="#" className={`popup__form popup__form_${props.name}`} name={`${props.name}-form`} novalidate>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
          <button 
            className={`popup__close popup__close_${props.name}`}
            onClick={props.onClose}
            type="button"
            aria-label="Закрыть форму">
          </button>
        </form>
      </section>
  )
}

export default PopupWithForm
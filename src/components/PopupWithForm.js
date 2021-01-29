import React from 'react';

function PopupWithForm (props) {
  const [isOpen, onClose] = [props.isOpen, props.onClose];

  React.useEffect(() => {
    if (!isOpen) return;
    const handleEscapeClose = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [isOpen, onClose]);

  return (
    <section 
      className={`popup popup_${props.name} ${isOpen && 'popup_show'}`} 
      onMouseDown={e => e.target.classList.contains('popup') && onClose()}
    >
        <form action="#" className={`popup__form popup__form_${props.name}`} name={`${props.name}-form`} noValidate>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
          <button 
            className={`popup__close popup__close_${props.name}`}
            onClick={onClose}
            type="button"
            aria-label="Закрыть форму">
          </button>
        </form>
      </section>
      )
}

export default PopupWithForm
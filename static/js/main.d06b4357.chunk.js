(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(4),i=a.n(r),o=(a(12),a(2));var p=function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("a",{href:"https://happymarvin.github.io/mesto/",className:"header__logo",children:" "})})},l=a(5),u=a(6),d=new(function(){function e(t){Object(l.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(u.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"setUserData",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e.id),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"switchLike",value:function(e,t){var a=this;return fetch("".concat(this._baseUrl,"cards/likes/").concat(e.id),{method:t,headers:this._headers}).then((function(e){return a._getResponseData(e)}))}},{key:"addAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)})).catch((function(e){return console.error(e.message)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19/",headers:{authorization:"7a0583fa-0284-4573-a326-4d7fa2ed6e73","Content-Type":"application/json"}});var m=function(e){var t=e.userID===e.card.owner._id||"",a=e.card.likes.some((function(t){return t._id===e.userID}))||"";return Object(n.jsxs)("li",{className:"card",children:[Object(n.jsx)("div",{className:"card__image-wrapper",children:Object(n.jsx)("img",{src:e.card.link,alt:e.card.name,className:"card__image",onClick:function(){e.onCardClick(e.card)}})}),Object(n.jsxs)("div",{className:"card__inner-wrapper",children:[Object(n.jsx)("h2",{className:"card__title",children:e.card.name}),Object(n.jsxs)("div",{className:"card__like-wrapper",children:[Object(n.jsx)("button",{className:"card__like ".concat(a&&"card__like_active"),type:"button","aria-label":"\u041b\u0430\u0439\u043a"}),Object(n.jsx)("span",{className:"card__like-count",children:e.card.likes.length})]})]}),Object(n.jsx)("button",{className:"card__delete ".concat(t&&"card__delete_show"),type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})]})};var _=function(e){var t=c.a.useState(),a=Object(o.a)(t,2),s=a[0],r=a[1],i=c.a.useState(),p=Object(o.a)(i,2),l=p[0],u=p[1],_=c.a.useState(),j=Object(o.a)(_,2),h=j[0],b=j[1],f=c.a.useState([]),O=Object(o.a)(f,2),x=O[0],v=O[1],N=c.a.useState([]),g=Object(o.a)(N,2),k=g[0],y=g[1];return c.a.useEffect((function(){Promise.all([d.getUserData(),d.getInitialCards()]).then((function(e){var t=Object(o.a)(e,2),a=t[0],n=t[1];r(a.name),u(a.about),b(a.avatar),y(a._id),v(n)})).catch((function(e){return console.error(e.message)}))}),[]),Object(n.jsxs)("div",{className:"main",children:[Object(n.jsxs)("section",{className:"profile",children:[Object(n.jsx)("button",{className:"profile__edit-avatar",onClick:e.onEditAvatar,children:Object(n.jsx)("img",{src:h,alt:"\u0430\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u043f\u0430\u0442\u0435\u043b\u044f",className:"profile__avatar"})}),Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsxs)("div",{className:"profile__name-wrapper",children:[Object(n.jsx)("h1",{className:"profile__name",children:s}),Object(n.jsx)("button",{className:"profile__edit",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0430\u0439\u043b",onClick:e.onEditProfile})]}),Object(n.jsx)("p",{className:"profile__description",children:l})]}),Object(n.jsx)("button",{className:"profile__add",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:e.onAddPlace})]}),Object(n.jsx)("section",{className:"gallery",children:Object(n.jsx)("ul",{className:"gallery__list",children:x.map((function(t){return Object(n.jsx)(m,{card:t,userID:k,onCardClick:e.onCardClick},t._id)}))})})]})};var j=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var h=function(e){var t=[e.isOpen,e.onClose],a=t[0],s=t[1];return c.a.useEffect((function(){if(a){var e=function(e){"Escape"===e.key&&s()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),[a,s]),Object(n.jsx)("section",{className:"popup popup_".concat(e.name," ").concat(a&&"popup_show"),onMouseDown:function(e){return e.target.classList.contains("popup")&&s()},children:Object(n.jsxs)("form",{action:"#",className:"popup__form popup__form_".concat(e.name),name:"".concat(e.name,"-form"),noValidate:!0,children:[Object(n.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(n.jsx)("button",{className:"popup__close popup__close_".concat(e.name),onClick:s,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443"})]})})};var b=function(e){var t=[e.card,e.onClose],a=t[0],s=t[1];return c.a.useEffect((function(){if(a){var e=function(e){"Escape"===e.key&&s()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),[a,s]),Object(n.jsx)("section",{className:"popup popup_image ".concat(a?"popup_show":""),onClick:function(e){return e.target.classList.contains("popup")&&s()},children:Object(n.jsxs)("div",{className:"popup__container",children:[Object(n.jsx)("img",{src:a?a.link:"#",alt:"\u0424\u043e\u0442\u043e \u043c\u0435\u0441\u0442\u0430",className:"popup__image"}),Object(n.jsx)("h2",{className:"popup__image-title",children:a?a.name:""}),Object(n.jsx)("button",{className:"popup__close popup__close_image",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0442\u043e",onClick:s})]})})};var f=function(){var e=c.a.useState(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],r=c.a.useState(!1),i=Object(o.a)(r,2),l=i[0],u=i[1],d=c.a.useState(!1),m=Object(o.a)(d,2),f=m[0],O=m[1],x=c.a.useState(!1),v=Object(o.a)(x,2),N=v[0],g=v[1];function k(){u(!1),s(!1),O(!1),g(!1)}return Object(n.jsxs)("div",{className:"page",children:[Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(p,{}),Object(n.jsx)(_,{onEditProfile:function(){s(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){O(!0)},onCardClick:function(e){g(e)}}),Object(n.jsx)(j,{})]}),Object(n.jsx)(b,{onClose:k,card:N}),Object(n.jsx)(h,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:a,onClose:k,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",name:"popup-name",className:"popup__text-input popup__text-input_name",maxLength:"40",minLength:"2",required:!0,id:"profile-name",placeholder:"\u0418\u043c\u044f"}),Object(n.jsx)("span",{className:"popup__error",id:"profile-name-error"}),Object(n.jsx)("input",{type:"text",name:"popup-description",className:"popup__text-input popup__text-input_description",maxLength:"200",minLength:"2",required:!0,id:"profile-description",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438"}),Object(n.jsx)("span",{className:"popup__error",id:"profile-description-error"}),Object(n.jsx)("button",{className:"popup__submit popup__submit_disabled",type:"submit",name:"popup-submit",disabled:!0,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}),Object(n.jsx)(h,{name:"new-place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:l,onClose:k,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",name:"popup-name",className:"popup__text-input popup__text-input_place-name",maxLength:"30",minLength:"2",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"place-name"}),Object(n.jsx)("span",{className:"popup__error",id:"place-name-error"}),Object(n.jsx)("input",{type:"url",required:!0,name:"popup-description",className:"popup__text-input popup__text-input_place-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"place-description"}),Object(n.jsx)("span",{className:"popup__error",id:"place-description-error"}),Object(n.jsx)("button",{className:"popup__submit popup__submit_disabled",type:"submit",name:"popup-submit",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})}),Object(n.jsx)(h,{name:"add-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:f,onClose:k,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"url",required:!0,name:"avatar-link",className:"popup__text-input popup__text-input_place-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",id:"avatar-link"}),Object(n.jsx)("span",{className:"popup__error",id:"avatar-link-error"}),Object(n.jsx)("button",{className:"popup__submit popup__submit_disabled",type:"submit",name:"popup-submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}),Object(n.jsx)(h,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:!1,onClose:k,children:Object(n.jsx)("button",{className:"popup__submit",type:"submit",name:"popup-submit",children:"\u0414\u0430"})})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.d06b4357.chunk.js.map
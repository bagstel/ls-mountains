(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{173:function(t,e){},401:function(t,e,r){},415:function(t,e,r){"use strict";var n=r(401);r.n(n).a},432:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[t._m(0),r("div",{staticClass:"card__content"},[r("form",{staticClass:"edit-form form--strong",on:{submit:function(e){return e.preventDefault(),t.workCard(t.newWork)},reset:function(e){return e.preventDefault(),t.hideAddingCard(e)}}},[r("div",{staticClass:"edit-form__column"},[r("input",{staticClass:"edit-form__file",attrs:{type:"file",name:"work-image",id:"upload-pic"},on:{change:t.appendFileAndRenderPhoto}}),t.renderedPhoto?r("div",{staticClass:"edit-form__row"},[r("div",{staticClass:"edit-form__frame"},[r("img",{attrs:{src:t.renderedPhoto}})])]):t._e(),t.renderedPhoto?r("div",{staticClass:"edit-form__row"},[t._m(1)]):r("div",{staticClass:"edit-form__row"},[t._m(2)]),r("vc-tooltip-input",{attrs:{errorText:t.validation.firstError("newWork.photo")}})],1),r("div",{staticClass:"edit-form__column"},[r("div",{staticClass:"edit-form__row"},[r("vc-input",{attrs:{type:"text",title:"Название",name:"title",errorText:t.validation.firstError("newWork.title"),placeholder:"Дизайн сайта для авто салона Porsche"},model:{value:t.newWork.title,callback:function(e){t.$set(t.newWork,"title",e)},expression:"newWork.title"}})],1),r("div",{staticClass:"edit-form__row"},[r("vc-input",{attrs:{type:"url",title:"Ссылка",name:"link",errorText:t.validation.firstError("newWork.link"),placeholder:"https://www.porsche-pulkovo.ru"},model:{value:t.newWork.link,callback:function(e){t.$set(t.newWork,"link",e)},expression:"newWork.link"}})],1),r("div",{staticClass:"edit-form__row"},[r("vc-input",{attrs:{type:"textarea",title:"Описание",name:"description",errorText:t.validation.firstError("newWork.description"),palceholder:"Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей"},model:{value:t.newWork.description,callback:function(e){t.$set(t.newWork,"description",e)},expression:"newWork.description"}})],1),r("div",{staticClass:"edit-form__row"},[r("vc-input",{attrs:{type:"text",title:"Добавление тэга",name:"techs",errorText:t.validation.firstError("newWork.techs"),placeholder:"Jquery, Vue.js, HTML5"},model:{value:t.newWork.techs,callback:function(e){t.$set(t.newWork,"techs",e)},expression:"newWork.techs"}})],1),r("div",{staticClass:"edit-form__row"},[r("vc-tags",{attrs:{techs:t.newWork.techs,tagButton:!0},on:{updateTag:t.updateTag}})],1),r("div",{staticClass:"edit-form__row"},[r("div",{staticClass:"controls edit-form__btns"},[t._m(3),r("div",{staticClass:"controls__btn"},[r("button",{staticClass:"btn btn--gradient",class:{"is-blocked":t.isBlocked},attrs:{type:"submit",disabled:t.isBlocked}},[t._v("Сохранить")])])])])])])])])};n._withStripped=!0;var i=r(86),o=r.n(i),s=r(53);function a(t,e,r,n,i,o,s){try{var a=t[o](s),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,i)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u,f,h=o.a.Validator,p={mixins:[o.a.mixin],name:"work-add-new",props:["work"],data:function(){return{isBlocked:!1,renderedPhoto:"",newWork:l({},this.work)}},components:{vcInput:function(){return r.e(0).then(r.bind(null,427))},vcTooltipInput:function(){return r.e(2).then(r.bind(null,435))},vcTags:function(){return r.e(3).then(r.bind(null,436))}},validators:{"newWork.title":function(t){return h.value(t).required()},"newWork.link":function(t){return h.value(t).required()},"newWork.description":function(t){return h.value(t).required()},"newWork.techs":function(t){return h.value(t).required()},"newWork.photo":function(t){return h.value(t).required()}},methods:l({},Object(s.b)("works",["saveWork","updateWork"]),{hideAddingCard:function(){this.$emit("hideAddingCard")},appendFileAndRenderPhoto:function(t){var e=this;this.newWork.photo=t.target.files[0];var r=new FileReader;try{r.readAsDataURL(this.newWork.photo),r.onload=function(){e.renderedPhoto=r.result}}catch(t){}},workCard:(u=regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(this.newWork),t.next=3,this.$validate();case 3:if(!t.sent){t.next=15;break}if(this.isBlocked=!0,!Object.keys(this.newWork).some((function(t){return e.newWork[t]!==e.work[t]}))){t.next=14;break}if(!this.newWork.id){t.next=12;break}return t.next=10,this.updateWork(this.newWork);case 10:t.next=14;break;case 12:return t.next=14,this.saveWork(this.newWork);case 14:this.$emit("hideAddingCard");case 15:case"end":return t.stop()}}),t,this)})),f=function(){var t=this,e=arguments;return new Promise((function(r,n){var i=u.apply(t,e);function o(t){a(i,r,n,o,s,"next",t)}function s(t){a(i,r,n,o,s,"throw",t)}o(void 0)}))},function(){return f.apply(this,arguments)}),updateTag:function(t){this.newWork.techs=t}}),created:function(){this.newWork=l({},this.work),this.work.photo&&(this.renderedPhoto="https://webdev-api.loftschool.com/"+this.work.photo)},watch:{work:function(){console.log("watch"),this.newWork=l({},this.work),this.renderedPhoto="https://webdev-api.loftschool.com/"+this.work.photo}}},w=(r(415),r(47)),v=Object(w.a)(p,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card__header"},[e("div",{staticClass:"card__column"},[e("div",{staticClass:"page-subtitle"},[this._v("Редактирование работы")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"edit-form__button"},[e("button",{staticClass:"btn",attrs:{type:"button"}},[e("label",{staticClass:"btn btn--link",attrs:{for:"upload-pic"}},[this._v("Изменить превью")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"edit-form__frame"},[e("div",{staticClass:"edit-form__info"},[this._v("Перетащите или загрузите для загрузки изображения")]),e("div",{staticClass:"edit-form__button"},[e("label",{staticClass:"btn btn--gradient",attrs:{for:"upload-pic"}},[this._v("ЗАГРУЗИТЬ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"controls__btn"},[e("button",{staticClass:"btn btn--link",attrs:{type:"reset"}},[this._v("Отмена")])])}],!1,null,"38aced63",null);v.options.__file="src/admin/components/works-add-new/works-add-new.vue";e.default=v.exports}}]);
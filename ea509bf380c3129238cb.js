(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{400:function(t,e,r){},414:function(t,e,r){"use strict";var o=r(400);r.n(o).a},431:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card card--works"},[r("div",{staticClass:"card__header"},[r("figure",{staticClass:"works__figure"},[r("img",{staticStyle:{"object-fit":"cover","object-position":"center"},attrs:{src:t.workPhoto(t.work.photo)}}),r("figcaption",{staticClass:"works__figcaption"},[r("vc-tags",{attrs:{techs:t.work.techs}})],1)])]),r("div",{staticClass:"card__content"},[r("div",{staticClass:"works__row"},[r("h3",{staticClass:"page-subtitle"},[t._v(t._s(t.work.title))])]),r("div",{staticClass:"works__row"},[r("p",[t._v(t._s(t.work.description))])]),r("div",{staticClass:"works__row"},[r("a",{staticClass:"btn btn--link",attrs:{href:t.work.link}},[t._v(t._s(t.work.link))])])]),r("div",{staticClass:"card__footer"},[r("div",{staticClass:"controls"},[r("div",{staticClass:"controls__btn"},[r("button",{staticClass:"btn btn--edit",attrs:{type:"button"},on:{click:t.editWork}},[t._v("Править")])]),r("div",{staticClass:"controls__btn"},[r("button",{staticClass:"btn btn--cross",attrs:{type:"button"},on:{click:function(e){return t.deleteTheWork(t.work.id)}}},[t._v("Удалить")])])])])])};o._withStripped=!0;var s=r(53);function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={name:"works-item",props:["work"],components:{vcTags:function(){return r.e(3).then(r.bind(null,436))}},methods:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(r,!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(s.b)("works",["deleteWork"]),{workPhoto:function(t){return"https://webdev-api.loftschool.com/".concat(t)},editWork:function(){this.$emit("editWork",this.work)},deleteTheWork:function(t){this.deleteWork(t)}})},a=(r(414),r(47)),l=Object(a.a)(c,o,[],!1,null,"0492954f",null);l.options.__file="src/admin/components/works-item/works-item.vue";e.default=l.exports}}]);
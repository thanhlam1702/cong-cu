(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{495:function(t,n,o){"use strict";o.r(n);var c={components:{CardJob:o(197).default},asyncData:function(t){var n=t.params;return t.$axios.get("https://congtimviec.firebaseio.com/"+"top/".concat(n.id,".json")).then((function(t){return{company:t.data}})).catch((function(t){}))},data:function(){return{company:{},flickityOptions:{initialIndex:0,prevNextButtons:!0,pageDots:!1,wrapAround:!1,autoPlay:3e3,contain:!0,lazyLoad:2,freeScroll:!1}}},head:function(){return{title:this.company.title+" - IT Job"}}},e=o(8),component=Object(e.a)(c,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"main-wrapper companies"},[o("section",{staticClass:"company"},[o("div",{staticClass:"company__profile"},[o("div",{staticClass:"company__profile-banner"},[o("img",{attrs:{src:t.company.banner,alt:""}})]),t._v(" "),o("div",{staticClass:"company__profile-logo"},[o("img",{attrs:{src:t.company.logo,alt:""}})]),t._v(" "),o("div",{staticClass:"company__profile-name"},[t._v("\n        "+t._s(t.company.title)+"\n      ")])]),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"company__content"},[t._v("\n        "+t._s(t.company.content)+"\n      ")])])]),t._v(" "),t.company.list?o("section",{staticClass:"list-job"},[o("div",{staticClass:"container"},[o("div",{staticClass:"title"},[t._v("List Jobs")]),t._v(" "),o("client-only",[o("Flickity",{ref:"flickity",attrs:{options:t.flickityOptions}},t._l(t.company.list,(function(n,c){return o("CardJob",{key:c,attrs:{info:n,logo:t.company.logo}})})),1)],1)],1)]):t._e()])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{CardJob:o(197).default})}}]);
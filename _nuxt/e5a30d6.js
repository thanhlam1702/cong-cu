(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{493:function(t,e,n){"use strict";n.r(e);n(58);var o=n(196),r=n(195),c={components:{ListJob:o.default,NavSearch:r.default},data:function(){return{listJob:this.$store.getters.getJobs,dataInPage:[],current:1,pageSize:24}},head:function(){return{title:"All Job - IT Job"}},computed:{data:function(){return this.$store.getters.getJobs},total:function(){return this.listJob.length},resultSearch:function(){return this.$store.getters.getResultSearch}},watch:{resultSearch:function(t){this.listJob=t,this.onChange(1)},data:function(t){this.dataInPage=t.slice(0,this.pageSize)}},created:function(){0!==this.resultSearch.length&&(this.listJob=this.resultSearch),this.onChange(1)},methods:{onChange:function(t){this.current=t;var e=(t-1)*this.pageSize,n=e+this.pageSize;this.dataInPage=this.listJob.slice(e,n)},backTop:function(){document.documentElement.scrollTop=0}}},l=n(8),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-wrapper all-job"},[n("NavSearch"),t._v(" "),n("ListJob",{attrs:{"list-job":t.dataInPage}}),t._v(" "),n("div",{staticClass:"pagination"},[n("a-pagination",{attrs:{current:t.current,"page-size":t.pageSize,total:t.total,"show-total":function(t,e){return e[0]+"-"+e[1]+" of "+t+" jobs"}},on:{change:t.onChange}})],1),t._v(" "),n("div",{staticClass:"back-to-top",on:{click:function(e){return t.backTop()}}},[n("i",{staticClass:"icon"},[n("IconRightArrow")],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavSearch:n(195).default,ListJob:n(196).default})}}]);
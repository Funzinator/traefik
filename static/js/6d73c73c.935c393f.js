(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["6d73c73c"],{"13dc":function(t,e,r){"use strict";var n=r("75df"),o=r.n(n);o.a},"1e51":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("page-default",[r("section",{staticClass:"app-section"},[r("div",{staticClass:"app-section-wrap app-boxed app-boxed-xl q-pl-md q-pr-md q-pt-xl q-pb-xl"},[r("div",{staticClass:"row no-wrap items-center q-mb-lg"},[r("tool-bar-table",{attrs:{status:t.status,filter:t.filter},on:{"update:status":function(e){t.status=e},"update:filter":function(e){t.filter=e}}})],1),r("div",{staticClass:"row items-center q-col-gutter-lg"},[r("div",{staticClass:"col-12"},[r("main-table",t._b({ref:"mainTable",attrs:{data:t.allRouters.items,onLoadMore:t.handleLoadMore,endReached:t.allRouters.endReached,loading:t.allRouters.loading}},"main-table",t.getTableProps({type:"udp-routers"}),!1))],1)])])])])},o=[],a=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),i=r.n(a),s=r("2f62"),c=r("33bf"),l=r("4874"),u=r("5abb"),f=r("77b7"),p=r("2ef5");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(r,!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b={name:"PageUDPRouters",mixins:[c["a"],Object(l["a"])({fetchMethod:"getAllRoutersWithParams",scrollerRef:"mainTable.$refs.scroller",pollingIntervalTime:5e3})],components:{PageDefault:u["a"],ToolBarTable:f["a"],MainTable:p["a"]},data:function(){return{filter:"",status:""}},computed:d({},Object(s["c"])("udp",{allRouters:"allRouters"})),methods:d({},Object(s["b"])("udp",{getAllRouters:"getAllRouters"}),{getAllRoutersWithParams:function(t){return this.getAllRouters(d({query:this.filter,status:this.status},t))},refreshAll:function(){this.allRouters.loading||this.initFetch()},handleLoadMore:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.page,r=void 0===e?1:e;return this.fetchMore({page:r})}}),watch:{status:function(){this.refreshAll()},filter:function(){this.refreshAll()}},beforeDestroy:function(){this.$store.commit("http/getAllRoutersClear")}},g=b,v=r("2877"),m=Object(v["a"])(g,n,o,!1,null,"77e7afd9",null);e["default"]=m.exports},4874:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("456d");var n=r("c47a"),o=r.n(n),a=(r("551c"),r("06db"),r("118e")),i=r.n(a),s=r("abc6");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.pollingIntervalTime,r=t.rowsPerPage,n=void 0===r?10:r,o=0,a=1,c=n;return{methods:{fetchWithInterval:function(){var t=this;this.initFetch({limit:o}),this.pollingInterval=setInterval((function(){t.fetchMore({limit:Math.ceil(o/n)*n,refresh:!0})}),e)},fetchMore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.page,u=void 0===r?1:r,f=e.limit,p=void 0===f?n:f,h=e.refresh,d=i()(e,["page","limit","refresh"]);if(u===a&&p===c&&!h)return Promise.resolve();a=u,c=p||n;var b=Object(s["get"])(this,t.fetchMethod);return b(l({},d,{page:u,limit:p||n})).then((function(t){o=u>1?o+=t.data.length:t.data.length}))},initFetch:function(e){var r=Object(s["get"])(this.$refs,t.scrollerRef);return r&&(r.stop(),r.reset()),this.fetchMore(l({page:1,refresh:!0},e)).then((function(){r&&(r.resume(),r.poll())}))}},mounted:function(){e?this.fetchWithInterval():this.fetchMore()},beforeDestroy:function(){clearInterval(this.pollingInterval)}}}},"75df":function(t,e,r){},"77b7":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-toolbar",{staticClass:"row no-wrap items-center"},[r("q-btn-toggle",{staticClass:"bar-toggle",attrs:{"toggle-color":"app-toggle","text-color":"app-grey",size:"14px","no-caps":"",rounded:"",unelevated:"",options:[{label:"All Status",value:""},{label:"Success",value:"enabled"},{label:"Warnings",value:"warning"},{label:"Errors",value:"disabled"}]},model:{value:t.getStatus,callback:function(e){t.getStatus=e},expression:"getStatus"}}),r("q-space"),r("q-input",{staticClass:"bar-search",attrs:{rounded:"",dense:"",outlined:"",type:"search",debounce:"500",placeholder:"Search","bg-color":t.$q.dark.isActive?void 0:"white"},scopedSlots:t._u([{key:"append",fn:function(){return[r("q-icon",{attrs:{name:"eva-search-outline"}})]},proxy:!0}]),model:{value:t.getFilter,callback:function(e){t.getFilter=e},expression:"getFilter"}})],1)},o=[],a=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),i=r.n(a),s=r("50d4");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={name:"ToolBarTable",props:["status","filter"],components:{},data:function(){return{}},mounted:function(){this.routeToState(this.$route)},computed:{getStatus:{get:function(){return this.status},set:function(t){this.$emit("update:status",t),this.stateToRoute(this.$route,{status:t})}},getFilter:{get:function(){return this.filter},set:function(t){this.$emit("update:filter",t),this.stateToRoute(this.$route,{filter:t})}}},watch:{$route:function(t,e){this.routeToState(t)}},methods:{routeToState:function(t){for(var e in t.query)this.$emit("update:".concat(e),t.query[e])},stateToRoute:function(t,e){this.$router.push({path:t.path,query:s["a"].removeEmptyObjects(l({},t.query,{},e))})}},created:function(){}},f=u,p=(r("13dc"),r("2877")),h=Object(p["a"])(f,n,o,!1,null,"71295a3a",null);e["a"]=h.exports}}]);